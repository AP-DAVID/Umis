import { PencilAltIcon } from "@heroicons/react/outline";
import { useState } from "react";
import Grade from "./Grade";

function StudentCard({ student, text1, text2 }) {
  const [openModal, setOpenModal] = useState(false);

  console.log(student);
  return (
    <div>
      <div className="px-5 py-3 flex justify-between items-center border-b-2 overflow-x-scroll scrollbar-hide">
        <div>
          <img
            className="h-12 w-12 rounded-full mr-7 object-cover"
            src={
              student.profile
                ? student.profile
                : "https://images.unsplash.com/photo-1619472351888-f844a0b33f5b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGJpb2xvZ3l8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            }
          />
        </div>

        <div className="px-2 flex w-full justify-around">
          <div className="font-bold text-lg truncate px-3">
            {student?.firstname} {student?.lastname}
          </div>

          <div className="font-bold text-lg truncate px-3">{student?.age}</div>
        </div>

        {openModal && (
          <Grade
            text1={text1}
            text2={text2}
            setOpenModal={setOpenModal}
            data={student}
          />
        )}

        <PencilAltIcon
          onClick={() => setOpenModal(true)}
          className="bg-indigo-500 px-3 py-2 rounded-xl h-12 w-12 hover:bg-yellow-500 hover:text-black text-white font-medium"
        />
      </div>
    </div>
  );
}

export default StudentCard;
