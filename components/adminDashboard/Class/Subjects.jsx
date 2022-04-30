import { PencilAltIcon, UserCircleIcon } from "@heroicons/react/outline";
import Subedit from "./Subedit";
import { useState } from "react";

function Subjects({ subject, data }) {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Subedit
        data={data}
        subject={subject}
        visible={visible}
        setVisible={setVisible}
      />
      <div className="px-5 py-3 flex justify-between items-center border-b-2 overflow-x-scroll scrollbar-hide">
        <div>
          <img
            className="h-12 w-12 rounded-full mr-7 object-cover"
            src={
              subject.picture
                ? subject.picture
                : "https://images.unsplash.com/photo-1619472351888-f844a0b33f5b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGJpb2xvZ3l8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            }
          />
        </div>

        <div className="px-2 flex w-full justify-between">
          <div className="font-bold text-lg truncate px-3">
            {subject?.subjectname}
          </div>

          {!subject.teacher.length ? (
            <UserCircleIcon className="bg-indigo-500 px-2 py-2 rounded-xl hover:bg-yellow-500 h-10 w-10 hover:text-black text-white font-medium" />
          ) : (
            <div className="font-medium">{subject?.teacher[0]?.firstname}</div>
          )}
        </div>

        <PencilAltIcon
          onClick={() => setVisible(true)}
          className="bg-indigo-500 px-3 py-2 rounded-xl h-12 w-12 hover:bg-yellow-500 hover:text-black text-white font-medium"
        />
      </div>
    </div>
  );
}

export default Subjects;
