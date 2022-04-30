import ConnectToDatabase from "../../../backend/server";
import Group from "../../../models/Group";
import Question from "../../../models/Question";
import Admin from "../../../models/Admin";

import nextConnect from "next-connect";

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
  const { text, picture, groupId, firstname, lastname, sectionId, image } =
    req.body;

  console.log(text);

  try {
    const newRegister = await Question.create({
      text: text,
      sectionId: sectionId,
      firstname: firstname,
      lastname: lastname,
      image: image,
      groupId: groupId,
      picture: picture,
    });
    newRegister.save();

    const newGroup = await Group.findByIdAndUpdate(groupId, {
      $push: { text: newRegister._id },
    });

    newGroup.save();

    res.status(201).json(newRegister);
  } catch (error) {
    console.error(error);
  }
});

export default handler;
