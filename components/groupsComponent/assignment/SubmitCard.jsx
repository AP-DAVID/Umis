import { useEffect, useState } from "react";
import { format } from "timeago.js";
import Interweave from "interweave";
import Showsubmit from "./Showsubmit";

function SubmitCard({ answer, details, date, data, student, mark, index }) {
  const [openModal, setOpenModal] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div
        onClick={() => setOpenModal(true)}
        style={{ maxWidth: "900px" }}
        className="border-2 hover:border-blue-500 w-full cursor-pointer  overflow-auto  py-4 mb-2 shadow-lg rounded-md  break-all"
      >
        <div className="flex space-x-4 ml-3 break-all">
          <div className="flex flex-col  space-y-2 break-all object-contain">
            <h1 className="font-bold line-clamp-1 flex items-center space-x-3 px-2 text-base">
              <img
                src={student[0]?.profile}
                className="h-8 w-8 rounded-full object-cover"
              />
              {student[0]?.lastname} - {student[0]?.firstname}
            </h1>

            <h1 className={` "line-clamp-2" font-medium text-base break-all`}>
              <Interweave
                className="mr-3 line-clamp-2"
                tagName="div"
                content={answer}
              />
            </h1>

            <h1 className="text-sm  text-gray-500">{format(date)}</h1>
          </div>
        </div>
      </div>
      {openModal && (
        <Showsubmit
          details={details}
          data={data}
          index={index}
          setOpenModal={setOpenModal}
          date={format(date)}
          student={student}
          answer={answer}
        />
      )}
    </div>
  );
}

export default SubmitCard;
