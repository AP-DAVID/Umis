import { HandIcon, PlusIcon } from "@heroicons/react/outline";
import { useState } from "react";
import Modal from "./Modal";
import Table from "./Table";
import Loader from "../../Loader";
function Students({ login }) {
  const [showModal, setShowModal] = useState(false);
  // const [open, setOpen] = useState(false)
  const students = login?.students;
  return (
    <div className=" flex md:ml-10 flex-col overflow-x-scroll scrollbar-hide w-9/12 pt-6 overflow-y-scroll h-screen">
      <div>
        <div className="mt-6 " />
        <div className="flex space-x-2">
          <HandIcon className="h-6 w-6 text-yellow-500" />
          <h1 className="text-md font-medium text-red-400">
            Hey, {login?.username}!
          </h1>
        </div>

        <h1 className="text-4xl font-bold">Your Students!</h1>
      </div>

      {/* <Loader open={open} setOpen={setOpen} /> */}

      <Table students={students} />

      <div
        onClick={() => setShowModal(true)}
        className="px-2 py-4 rounded-full cursor-pointer fixed p-14 bottom-8 right-3 sm:right-80 origin-bottom-right space-y-2 text-align group"
      >
        <div className="invisible group-hover:visible  ">
          <h1 className="text-sm text-gray-500 font-md">add</h1>
        </div>
        <div className="rounded-full px-3 py-3 bg-green-500">
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
  );
}

export default Students;
