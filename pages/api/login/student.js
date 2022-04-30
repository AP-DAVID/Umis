import ConnectToDatabase from "../../../backend/server";
import Student from "../../../models/Student";
import nextConnect from "next-connect";
const bcrypt = require("bcrypt");

ConnectToDatabase();
const handler = nextConnect();

handler.post(async (req, res) => {
  const { username, password } = req.body;

  try {
    const login = await Student.findOne({ username: username });
    if (!login) {
      res.status(200).json("User not found");
    }
    if (login) {
      const validPassword = await bcrypt.compare(password, login.password);
      if (!validPassword) {
        res.status(200).json("Wrong Password");
      } else {
        res.status(200).json(login);
        console.log("Successfully logged in");
      }
    }
  } catch (err) {
    res.status(500).json("Something");
    console.log("credentials Invalid");
  }
});

export default handler;
