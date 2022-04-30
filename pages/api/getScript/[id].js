import ConnectToDatabase from "../../../backend/server";

import Announcement from "../../../models/Announcement";

import nextConnect from "next-connect";

ConnectToDatabase();
const handler = nextConnect();

handler.get(async (req, res) => {
  const {
    query: { id },
  } = req;

  try {
    const blogs = await Announcement.find({ adminId: id });
    res.status(200).json(blogs);
  } catch (error) {
    res.status(200).json("nahhhhh");
  }
});

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "16mb",
    },
  },
};

export default handler;
