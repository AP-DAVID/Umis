
import ConnectToDatabase from "../../../backend/server"
import Admin from "../../../models/Admin";
import Student from "../../../models/Student";
import Teacher from "../../../models/Teacher";
import nextConnect from "next-connect"
const bcrypt = require("bcrypt")

ConnectToDatabase();
const handler = nextConnect();

handler.get(async(req, res)=>{
  try {
    const teachers  =  await Teacher.find({})
    res.status(200).json(teachers)
  } catch (error) {
    res.status(400).json({success: false, error: error})
  }
})




handler.post(async(req, res) =>{
    const { username, password, email, adminId, payment, firstname, lastname, age, state, country, contact, profile} = req.body
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt)
    

    try {
        const usernamefind = await Teacher.findOne({username : username});

        if(usernamefind){
            res.status(200).json("User found");
        }

        const emailFind = await Teacher.findOne({email : email});

        if(emailFind) {
            res.status(200).json("Email found");
        }

       

        if(!usernamefind && !emailFind){
          
          const newRegister = await Teacher.create(
            
            { 
              username: username, 
              adminId : adminId, 
              email : email, 
              password : hashedPassword, 
              payment : payment,
              firstname : firstname,
              lastname : lastname,
              age : age,
              state : state,
              country : country,
              contact : contact,
              profile : profile,

              // subject : subject

            
            
            
            });

          newRegister.save()
          
          const newTeacher = await Admin.findByIdAndUpdate(adminId,{
              $push : {teachers: newRegister._id},
          });
          newTeacher.save();
       

          res.status(201).json(newRegister)
        }
    } catch (error) {
        console.error(error)
    }
})


export default handler
