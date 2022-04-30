function Table({ login }) {
  return (
    <div>
      <table className="mt-10 table-auto border-separate h-screen w-full border-t border-b ease-in transform border-gray-400 ">
        <thead className="">
          <tr className="bg-gray-100 h-12">
            <th className="border-b border-gray-200 font-medium">Details</th>
            <th className="border-b border-gray-200 font-medium">Data</th>
          </tr>
        </thead>
        <tbody className="items-center text-center">
          <tr>
            <td className="border-b border-gray-200 font-light">Admissions</td>
            <td className="border-b border-gray-200 font-light">
              {login.students.length}
            </td>
          </tr>
          <tr class="bg-emerald-200">
            <td className="border-b border-gray-200 font-light">classes</td>
            <td className="border-b border-gray-200 font-light">
              {login.classes.length}
            </td>
          </tr>
          <tr class="bg-emerald-200">
            <td className="border-b border-gray-200 font-light">
              Number of Students
            </td>
            <td className="border-b border-gray-200 font-light">
              {login.students.length}
            </td>
          </tr>
          <tr class="bg-emerald-200">
            <td className="border-b border-gray-200 font-light">Religion</td>
            <td className="border-b border-gray-200 font-light">
              Christainity
            </td>
          </tr>
          <tr>
            <td className="border-b border-gray-200 font-light">Sex</td>
            <td className="border-b border-gray-200 font-light">F</td>
          </tr>
          <tr>
            <td className="border-b border-gray-200 font-light">Age</td>
            <td className="border-b border-gray-200 font-light">56</td>
          </tr>

          <tr class="bg-emerald-200">
            <td className="border-b border-gray-200 font-light">Country</td>
            <td className="border-b border-gray-200 font-light">Nigeria</td>
          </tr>
          <tr>
            <td className="border-b border-gray-200 font-light">Address</td>
            <td className="border-b border-gray-200 font-light">
              Pitbull is my friend ESt
            </td>
          </tr>
          <tr>
            <td className="border-b border-gray-200 font-light">Email</td>
            <td className="border-b border-gray-200 font-light">
              Irobotoff@gmail.com
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table;
