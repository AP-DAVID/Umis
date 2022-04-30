import { UserCircleIcon, UserIcon } from "@heroicons/react/solid";

function Details({ name, picture }) {
  return (
    <div className="flex space-x-4 mt-5 items-center">
      {picture ? (
        <img src={picture} className="rounded-full h-7 w-7 object-cover" />
      ) : (
        <div>
          <UserCircleIcon className="h-7 w-7" />
        </div>
      )}

      <div className="text-base text-gray-600 font-medium">
        <h1>{name}</h1>
      </div>
    </div>
  );
}

export default Details;
