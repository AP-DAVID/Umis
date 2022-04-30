import { UserCircleIcon } from "@heroicons/react/solid";
import { useEffect, useState } from "react";
import { format } from "timeago.js";
import { useRouter } from "next/router";

function Message({ message, own, sropee }) {
  const [more, setMore] = useState(true);
  const [change, setChange] = useState(true);
  const router = useRouter();
  const [res, setRes] = useState();

  useEffect(() => {
    let string = message.text;
    let count = 0;

    for (let i = 0; i < string.length; i++) {
      if (string.charAt(i)) {
        count++;
      }
    }

    setRes(count);
  }, [message]);

  return (
    <div>
      {!own && (
        <div ref={sropee} className="py-2 flex space-x-3">
          <div className="flex flex-col items-center cursor-pointer">
            <div>
              {message.profile ? (
                <img
                  src={message?.profile}
                  className="h-8 w-8 rounded-full object-cover"
                />
              ) : (
                <UserCircleIcon className="h-8 w-8 text-purple-400" />
              )}
            </div>
            <div>
              <h1 className="text-xs text-gray-500 ">
                {format(message.createdAt)}
              </h1>
            </div>
          </div>

          <div className="messageText  bg-gray-300 rounded-tr-xl rounded-br-xl rounded-bl-xl">
            <p
              className={`${
                more ? "line-clamp-6" : "line-clamp-none"
              } px-2 py-2 font-mono`}
            >
              {message.text}
            </p>
          </div>

          {res > 140 && (
            <div>
              {change && more ? (
                <h1
                  onClick={() => setMore(false)}
                  className="text-sm cursor-pointer text-blue-500 "
                >
                  read more ...
                </h1>
              ) : (
                <h1
                  onClick={() => setMore(true)}
                  className="text-sm cursor-pointer text-blue-500 "
                >
                  truncate...
                </h1>
              )}
            </div>
          )}
        </div>
      )}

      {own && (
        <div ref={sropee} className="py-2 justify-end flex space-x-3">
          <div className="messageText bg-gray-800 shadow-md rounded-tl-xl rounded-bl-xl rounded-br-xl">
            <p
              className={` ${
                more ? "line-clamp-6" : "line-clamp-none"
              } px-2 py-2 text-white font-mono`}
            >
              {message.text}
            </p>
          </div>

          <div className="flex flex-col items-center cursor-pointer">
            <div>
              {message.profile ? (
                <img
                  src={message?.profile}
                  className="h-8 w-8 rounded-full object-cover"
                />
              ) : (
                <UserCircleIcon className="h-8 w-8 text-purple-400" />
              )}
            </div>
            <div>
              <h1 className="text-sm text-gray-500 ">
                {format(message.createdAt)}
              </h1>
            </div>
          </div>

          {res > 140 && (
            <div>
              {change && more ? (
                <h1
                  onClick={() => setMore(false)}
                  className="text-sm cursor-pointer text-blue-500 "
                >
                  read more ...
                </h1>
              ) : (
                <h1
                  onClick={() => setMore(true)}
                  className="text-sm cursor-pointer text-blue-500 "
                >
                  truncate...
                </h1>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Message;
