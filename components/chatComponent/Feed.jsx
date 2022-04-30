import { useEffect, useRef } from "react";
import Chatinput from "./Chatinput";
import Message from "./Mesage";

function Feed({
  handleSubmit,
  setNewMessage,
  newMessage,
  messages,
  user,
  setPicture,
}) {
  const scrollRef = useRef();

  useEffect(async () => {
    await scrollRef.current?.scrollIntoView({ behavior: "smooth" });

    // const lastIndex = await findLastIndex(messages, v => v.sender != user._id)

    // setPic(messages[lastIndex]?.profile)
  }, [messages]);

  return (
    <div className=" w-5/6 h-5/6  sm:px-7 px-2 scrollbar-hide rounded-lg overflow-y-scroll bg-gray-100 shadow-md">
      <main className="h-5/6 py-5 overflow-y-scroll w-full scrollbar-hide">
        {messages.map((m) => (
          <div>
            <div ref={scrollRef} className="">
              <Message message={m} user={user} own={m.sender === user._id} />
            </div>
          </div>
        ))}
      </main>

      <footer className="">
        <Chatinput
          setPicture={setPicture}
          newMessage={newMessage}
          setNewMessage={setNewMessage}
          handleSubmit={handleSubmit}
        />
      </footer>
    </div>
  );
}
export default Feed;
