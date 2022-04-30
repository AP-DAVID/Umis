import ConnectToDatabase from "../../../../backend/server";

import Subject from "../../../../models/Subject";
import Class from "../../../../models/Class";

import nextConnect from "next-connect";

ConnectToDatabase();
const handler = nextConnect();

handler.put(async (req, res) => {
  const {
    query: { id },
  } = req;

  try {
    const subject = await Subject.findByIdAndUpdate(id, {
      $set: req.body,
    });

    res.status(200).json("subject updated and shii");
  } catch (err) {
    return res.status(500).json(err);
  }
});

handler.delete(async (req, res) => {
  const {
    query: { id },
  } = req;

  try {
    const subject = await Subject.findByIdAndDelete(id);
    !subject && res.status(404).json("subject doesn't exist");

    const classs = await Class.findOneAndUpdate({
      $pull: { subjects: id },
    });
    classs.save();

    res.status(200).json("subject deleted");
  } catch (error) {
    res.status(400).json({ success: false, error: error });
  }
});

export default handler;
