import { PlusIcon } from "@heroicons/react/outline";
import Image from "next/image";

function Result() {
  return (
    <div className="mt-16 sm:mt-2 flex flex-col w-full justify-center items-center group">
      <div className="flex w-full justify-center">
        <div className="flex flex-col space-y-5 mb-9">
          <Image
            src="/resultdog.svg"
            className="text-blue-400 hover:animate-bounce"
            height={500}
            width={550}
          />

          <h1 className="text-center break-words font-medium">
            Your result will show here when uploaded
          </h1>
        </div>

        <div className="px-2 py-4 rounded-full cursor-pointer fixed p-14 bottom-8 right-3 sm:right-80 origin-bottom-right space-y-2 text-align group">
          <div className="invisible group-hover:visible  ">
            <h1 className="text-sm text-gray-500 font-md">add</h1>
          </div>
          <div className="rounded-full px-3 py-3 bg-yellow-500">
            <PlusIcon className="hover:animate-spin h-6 w-6" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Result;
