import ConnectToDatabase from "../../../backend/server";
import Subject from "../../../models/Subject";
import Student from "../../../models/Student";
import Group from "../../../models/Group";
import Question from "../../../models/Question";
import Teacher from "../../../models/Teacher";
import Class from "../../../models/Class";
import Assignment from "../../../models/Assignment";
import nextConnect from "next-connect";
import Submission from "../../../models/Submission";
import Comment from "../../../models/Comment";

ConnectToDatabase();
const handler = nextConnect();

export async function getData(id) {
  try {
    const group = await Group.findById(id)
      .populate({ path: "teacher", model: Teacher })
      .populate({ path: "students", model: Student })
      .populate({
        path: "subject",
        populate: {
          path: "classId",
          model: Class,
        },
        model: Subject,
      })
      .populate({
        path: "text",
        populate: {
          path: "comments",
          model: Comment,
        },
        model: Question,
      })
      .populate({
        path: "assignment",
        populate: {
          path: "submission",
          populate: {
            path: "student",
            model: Student,
          },
          model: Submission,
        },
        model: Assignment,
      })
      .exec();

    if (!group) {
      return { status: "group doesn't exist" };
    } else {
      return group;
    }
  } catch (error) {
    return error;
  }
}

handler.get(async (req, res) => {
  const group = await getData();
  res.status(200).json(group);
});

handler.post(async (req, res) => {
  const {
    query: { id },
  } = req;

  const { code } = req.body;

  try {
    const group = await Group.findOne({ code: code });

    if (!group) {
      res.status(200).json("no group");
    }

    if (group) {
      const groupfind = await Student.findOne({ _id: id, groups: group._id });

      console.log(groupfind);

      if (!groupfind) {
        const newGroup = await Student.findByIdAndUpdate(id, {
          $push: { groups: group._id },
        });
        newGroup.save();

        const newStudent = await Group.findByIdAndUpdate(group._id, {
          $push: { students: id },
        });
        newStudent.save();

        res.status(200).json(newGroup);
      } else {
        res.status(200).json("group exist");
      }
    }
  } catch (error) {
    res.status(400).json({ success: false, error: error });
  }
});

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "4mb",
    },
  },
};

export default handler;
