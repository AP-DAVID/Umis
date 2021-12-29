
import ConnectToDatabase from "../../../backend/server"

import Resultlist from "../../../models/Resultlist"

import Result from "../../../models/Result"

import Student from "../../../models/Student"

import nextConnect from "next-connect"


ConnectToDatabase();
const handler = nextConnect();


// handler.get(async(req, res)=>{
    
//   const {
//      query:{id}
//   }= req

//     try {
//       const blogs  = await Announcement.find({adminId : id});
//       res.status(200).json(blogs)
//     } catch (error) {
//       res.status(400).json({success: false, error: error})
//     }
// })

  export const config = {
    api: {
      bodyParser: {
        sizeLimit: '16mb',
      },
    },
  }




handler.post(async(req, res) =>{
    const {score, grade, term, adminId, studentId, subjectname, classname} = req.body

    
     
    try {
       
        const findTerm = await Result.findOne({term : term, studentId : studentId, classname : classname});

        if(findTerm){

            const findResult = await Resultlist.findOne({term : term, classname : classname, subjectname : subjectname});

            if(findResult){

                const result = await Resultlist.findByIdAndUpdate(findResult._id, {
                    $set : {grade : grade, score : score}
                });
                result.save();
                res.status(200).json("donee")
            }else{

                const newResult = await Resultlist.create({term : term, classname : classname, grade : grade, score : score, subjectname : subjectname, student : studentId })
                newResult.save();

                const newRest = await Result.findByIdAndUpdate(findTerm._id,{
                    $push : {results : newResult._id},
                  });
                newRest.save();

                res.status(200).json("yepp")
              }


        }else{
           
            const newResult = await Result.create({term : term, adminId : adminId, studentId : studentId, classname : classname})
            await newResult.save();

            const resultList = await Resultlist.create({ term : term, classname : classname,  grade : grade, score : score, subjectname : subjectname, student : studentId})
            await resultList.save();

            const newRest = await Result.findByIdAndUpdate(newResult._id,{
                $push : {results : resultList._id},
              });
            await newRest.save();

            const newStudent = await Student.findByIdAndUpdate(studentId,{
              $push : {results : newResult._id},
            });
            await newStudent.save();

            res.status(200).json("yepp")




        }
      
    } catch (error) {
        console.error(error)
    }
})


export default handler
