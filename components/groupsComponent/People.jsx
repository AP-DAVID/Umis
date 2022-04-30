import Details from "./Details";

function People({ data }) {
  const students = data?.students;
  return (
    <div className="flex px-2 py-4 flex-col items-center">
      <div className="w-full sm:w-3/4 ">
        <div className=" text-4xl w-full border-b border-black py-3">
          <h1>Teacher</h1>
        </div>

        <Details
          picture={data?.teacher[0].profile}
          name={`${data?.teacher[0].firstname} - ${data?.teacher[0].lastname} `}
        />

        <div className="mt-10 text-4xl w-full flex justify-between border-b border-black py-3">
          <h1>Classmates</h1>

          <h1 className="text-lg text-gray-500">
            {data?.students.length} Students
          </h1>
        </div>

        {students?.map((student) => (
          <Details
            key={student._id}
            picture={student.profile}
            name={`${student.firstname} - ${student.lastname} `}
          />
        ))}
      </div>
    </div>
  );
}

export default People;
