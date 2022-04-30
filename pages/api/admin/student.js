import ConnectToDatabase from "../../../backend/server";
import Admin from "../../../models/Admin";
import Student from "../../../models/Student";
import Class from "../../../models/Class";
import Teacher from "../../../models/Teacher";
import nextConnect from "next-connect";

const bcrypt = require("bcrypt");

ConnectToDatabase();
const handler = nextConnect();

handler.get(async (req, res) => {
  try {
    const students = await Student.find({});
    res.status(200).json(students);
  } catch (error) {
    res.status(400).json({ success: false, error: error });
  }
});

handler.post(async (req, res) => {
  const {
    username,
    password,
    email,
    adminId,
    payment,
    firstname,
    lastname,
    age,
    stage,
    state,
    country,
    contact,
    profile,
  } = req.body;
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  try {
    const usernamefind = await Student.findOne({ username: username });

    const classfind = await Class.findOne({
      classname: stage,
      adminId: adminId,
    });

    if (usernamefind) {
      res.status(200).json("User found");
    }

    const emailFind = await Student.findOne({ email: email });

    if (emailFind) {
      res.status(200).json("Email found");
    }

    if (!usernamefind && !emailFind) {
      const newRegister = await Student.create({
        username: username,
        adminId: adminId,
        email: email,
        password: hashedPassword,
        payment: payment,
        firstname: firstname,
        lastname: lastname,
        age: age,
        state: state,
        country: country,
        contact: contact,
        profile: profile,
        class: classfind._id,
        //  class : "",
      });

      await newRegister.save();

      const newStudent = await Admin.findByIdAndUpdate(adminId, {
        $push: { students: newRegister._id },
      });
      newStudent.save();

      const newClass = await Class.findOneAndUpdate(
        { classname: stage, adminId: adminId },
        { $push: { students: newRegister._id } }
      );

      newClass.save();

      res.status(201).json(newRegister);
    }
  } catch (error) {
    console.error(error);
  }
});

export default handler;
