import ConnectToDatabase from "../../../backend/server";
import Admin from "../../../models/Admin";
import Student from "../../../models/Student";
import Teacher from "../../../models/Teacher";
import nextConnect from "next-connect";

ConnectToDatabase();
const handler = nextConnect();

handler.get(async (req, res) => {
  const {
    query: { id },
  } = req;

  try {
    const student = await Student.findById(id);

    if (!student) {
      const teacher = await Teacher.findById(id);

      if (!teacher) {
        const admin = await Admin.findById(id);
        res.status(200).json(admin);
      } else {
        res.status(200).json(teacher);
      }
    } else {
      res.status(200).json(student);
    }
  } catch (error) {
    res.status(400).json({ success: false, error: error });
  }
});

export default handler;
