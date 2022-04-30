import {
  FolderIcon,
  UserCircleIcon,
  DotsVerticalIcon,
  UserIcon,
} from "@heroicons/react/outline";
import Router from "next/router";
function Groupcard({ data }) {
  return (
    <div
      className="mt-10 mb-10 mr-5 relative group cursor-pointer transition duration-200 rounded-xl 
            ease-in transform sm:hover:scale-105 hover:z-50
            border-2 rounded-t-lg h-72 sm:h-60 w-full flex flex-col justify-between justify-self-center"
      onClick={() => Router.push(`/groups/${data?._id}`)}
    >
      <div
        className="h-1/3 bg-no-repeat justify-between flex flex-col bg-cover bg-gray-600 w-full rounded-t-lg "
        style={{
          backgroundImage: `${
            data?.picture
              ? `url("${data?.picture}")`
              : 'url("https://images.unsplash.com/photo-1506220926022-cc5c12acdb35?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YmxhY2slMjBiYWNrZ3JvdW5kfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60")'
          }`,
        }}
      >
        <div className="flex justify-between ml-3">
          <h1 className="text-white text-xl font-semibold">
            {data?.groupname}
          </h1>

          <div className="mr-3 px-3 py-3 group  mt-1">
            <DotsVerticalIcon className="text-white group-hover:text-blue-300 h-7  w-6" />
          </div>
        </div>

        <div className="flex justify-between ml-3 mr-2">
          <h1 className="text-white text-sm font-light">{`${data?.teacher[0]?.firstname} - ${data?.teacher[0]?.lastname}`}</h1>

          <div className="bg-gray-300 object-cover items-center h-12 w-12 filter rounded-full lg:rounded-3xl brightness-75 justify-self-end ">
            <UserIcon className="text-blue-400 align-middle ml-1 items-center w-10  group-hover:animate-bounce" />
          </div>
        </div>
      </div>

      <div className="h-1/4  border-t space-x-3 flex justify-end border-solid w-full ">
        <FolderIcon className="h-7 w-6 text-gray-400 hover:text-blue-300 hover:animate-bounce" />
        <UserCircleIcon className="h-7 w-6 text-gray-400  hover:text-blue-300 hover:animate-bounce" />
      </div>
    </div>
  );
}

export default Groupcard;
