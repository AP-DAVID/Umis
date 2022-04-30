import { UserGroupIcon, PencilAltIcon } from "@heroicons/react/outline";
import { useState } from "react";
import { HandIcon, PlusIcon } from "@heroicons/react/outline";
import Groupcard from "./Groupcard";
import Modal from "./Modal";

function Groups({ login }) {
  const [showModal, setShowModal] = useState(false);

  const groups = login?.groups;

  return (
    <div className="flex md:ml-10 flex-col w-full pt-6 overflow-y-scroll h-screen scrollbar-hide">
      <div>
        <div className="mt-6 " />
        <div className="flex space-x-2">
          <UserGroupIcon className="h-6 w-6 text-yellow-500" />
          <h1 className="text-md font-medium text-red-400">
            Yo!, {login?.username}!
          </h1>
        </div>

        <div className="flex justify-between align-middle">
          <h1 className="text-4xl font-normal">
            Choose <span className="font-bold">Groups</span>
          </h1>
          <PencilAltIcon className="h-6 w-6 border rounded-md  mr-3 " />
        </div>
      </div>

      <div>
        <div className="w-16 overflow-hidden inline-block">
          <div className=" h-12 w-11 bg-gray-400 rotate-45 transform origin-bottom-left"></div>
        </div>

        <div className="sm:px-5  my-10 sm:mr:10 justify-items-stretch sm:space-x-1 sm:grid md:grid:cols-2 lg:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
          {groups?.map((group) => (
            <Groupcard key={group._id} data={group} />
          ))}
        </div>

        <div
          onClick={() => setShowModal(true)}
          className="px-2 py-4 rounded-full cursor-pointer fixed p-14 bottom-8 right-3 sm:right-80 origin-bottom-right space-y-2 text-align group"
        >
          <div className="invisible group-hover:visible  ">
            <h1 className="text-sm text-gray-500 font-md">add</h1>
          </div>
          <div className="rounded-full px-3 py-3 bg-blue-500">
            <PlusIcon className="hover:animate-spin h-6 w-6" />
          </div>
        </div>

        {showModal && (
          <Modal
            setShowModal={setShowModal}
            login={login}
            showModal={showModal}
          />
        )}
      </div>
    </div>
  );
}

export default Groups;
