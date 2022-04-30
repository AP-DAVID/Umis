import ConnectToDatabase from "../../../backend/server";
import Class from "../../../models/Class";

import nextConnect from "next-connect";

ConnectToDatabase();
const handler = nextConnect();

handler.get(async (req, res) => {
  const {
    query: { id },
  } = req;

  try {
    const received = await Class.find({ adminId: id });
    res.status(200).json(received);
  } catch (error) {
    res.status(400).json({ success: false, error: error });
  }
});

handler.put(async (req, res) => {
  const {
    query: { id },
  } = req;

  try {
    const classs = await Class.findByIdAndUpdate(id, {
      $set: req.body,
    });

    res.status(200).json("Class updated and shii");
  } catch (err) {
    return res.status(500).json(err);
  }
});

handler.delete(async (req, res) => {
  const {
    query: { id },
  } = req;

  try {
    const classs = await Class.findByIdAndDelete(id);
    !classs && res.status(404).json("subject doesn't exist");

    res.status(200).json("teacher deleted");
  } catch (error) {
    res.status(400).json({ success: false, error: error });
  }
});

export default handler;
