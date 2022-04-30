import { PencilAltIcon } from "@heroicons/react/solid";
import {
  HandIcon,
  PlusIcon,
  TrashIcon,
  BookOpenIcon,
  UserGroupIcon,
} from "@heroicons/react/solid";
import { useState } from "react";
import Classedit from "./Classedit";
import List from "./List";

function Widget({ login, data }) {
  const [showModal, setShowModal] = useState(false);
  const [visible, setVisible] = useState(false);
  const [showSubjects, setShowSubjects] = useState(false);

  return (
    <div className="mt-12 cursor-pointer">
      <Classedit
        data={data}
        classs={login}
        visible={visible}
        setVisible={setVisible}
      />

      <div className="h-36 w-36 rounded-full bg-indigo-500 hover:bg-green-500 px-5 py-5 group hover:shadow-xl">
        <h1 className="font-bold text-center text-xl text-white group-hover:text-yellow-500 ">
          {login?.classname}
        </h1>

        <div className=" space-x-3  mt-5 flex">
          <UserGroupIcon
            onClick={() => setShowModal(true)}
            className=" h-7 w-7   rounded-lg hover:text-red-700 text-xs"
          />

          <BookOpenIcon
            onClick={() => setShowSubjects(true)}
            className=" h-7 w-7     rounded-lg hover:text-red-700 text-xs"
          />
          <PencilAltIcon
            onClick={() => setVisible(true)}
            className=" h-7 w-7 rounded-lg hover:text-red-700 text-xs"
          />
        </div>
      </div>

      {showModal && (
        <List setShowModal={setShowModal} login={login} data={data} />
      )}

      {showSubjects && (
        <List setShowSubjects={setShowSubjects} login={login} data={data} />
      )}
    </div>
  );
}

export default Widget;
