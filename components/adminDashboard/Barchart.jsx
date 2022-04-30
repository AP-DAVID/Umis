import dynamic from "next/dynamic";

const Chart = dynamic(() => import("./Shared/Chart"), { ssr: false });

function Barchart() {
  return (
    <div className="mt-3">
      <div className="flex justify-between mt-10 px-2">
        <h1 className="font-bold text-lg">Time Spendings</h1>

        <h1 className="font-light text-gray-400 text-lg ">Month</h1>
      </div>

      <div className="content-center items-center align-middle sm:ml-14">
        <Chart />
      </div>
    </div>
  );
}

export default Barchart;
