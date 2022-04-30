import Image from "next/image";

function Chat() {
  return (
    <div className="mt-16 sm:mt-2 flex flex-col w-full justify-center items-center group">
      <div className="flex w-full justify-center">
        <div className="flex flex-col space-y-5">
          <Image
            src="/resultdog.svg"
            className="text-blue-400 hover:animate-bounce"
            height={500}
            width={550}
          />

          <h1 className="text-center break-words font-medium">
            The Chat section will be available soon
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Chat;
