import Image from "next/image";
import Resultcard from "./Resultcard";
import { Result, Button } from "antd";
import { SmileOutlined } from "@ant-design/icons";

function Resultt({ data }) {
  console.log(data.results);
  return (
    <div className="flex md:ml-10 flex-col w-full pt-6 overflow-y-scroll h-screen scrollbar-hide">
      {data.results.length != 0 ? (
        <div className="sm:px-5 my-10 space-x-1 sm:mr:10 justify-items-stretch sm:grid md:grid:cols-2 lg:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
          {data.results?.map((result) => (
            <Resultcard result={result} />
          ))}
        </div>
      ) : (
        <Result
          icon={<SmileOutlined />}
          title="Your results will show here.!"
        />
      )}
    </div>
  );
}

export default Resultt;
