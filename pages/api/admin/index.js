import ConnectToDatabase from "../../../backend/server";
import Admin from "../../../models/Admin";
import nextConnect from "next-connect";
const bcrypt = require("bcrypt");

ConnectToDatabase();
const handler = nextConnect();

// handler.get(async(req, res)=>{
//   try {
//     const admin  =  await Admin.findById(id).populate("teachers").populate("students").exec();
//     res.status(200).json(admin)
//   } catch (error) {
//     res.status(400).json({success: false, error: error})
//   }
// })

handler.post(async (req, res) => {
  const { username, password, email, payment } = req.body;
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  try {
    const usernamefind = await Admin.findOne({ username: username })
      .populate("teachers")
      .populate("students")
      .exec();

    if (usernamefind) {
      res.status(200).json("User found");
    }

    const emailFind = await Admin.findOne({ email: email });

    if (emailFind) {
      res.status(200).json("Email found");
    }

    if (!usernamefind && !emailFind) {
      const newRegister = await Admin.create({
        username: username,
        email: email,
        password: hashedPassword,
        payment: payment,
      });
      newRegister.save();
      res.status(201).json(newRegister);
    }
  } catch (error) {
    console.error(error);
  }
});

export default handler;
