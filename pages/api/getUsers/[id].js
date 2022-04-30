import ConnectToDatabase from "../../../backend/server";
import Admin from "../../../models/Admin";
import Student from "../../../models/Student";
import Teacher from "../../../models/Teacher";
import nextConnect from "next-connect";

ConnectToDatabase();
const handler = nextConnect();

handler.get(async (req, res) => {
  // get query Id
  const {
    query: { id },
  } = req;

  try {
    // find teachers and students via the adminid
    const teachers = await Teacher.find({ adminId: id });
    const students = await Student.find({ adminId: id });
    // join them
    const result = teachers.concat(students);

    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ success: false, error: error });
  }
});

export default handler;
