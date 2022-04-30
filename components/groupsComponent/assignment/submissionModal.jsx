import { useEffect, useState, useRef } from "react";
import axios from "axios";
import Loader from "../../Loader";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import SubmitCard from "./SubmitCard";
import { Popconfirm, message } from "antd";

function Submissions({ setOpenn, data, login, index }) {
  const submit = data.submission[index];
  const [messagee, setMessage] = useState("");
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const [form, setForm] = useState({
    close: false,
  });

  function cancel(e) {
    console.log(e);
    message.error("No biggie");
  }

  const handleUnsubmit = async () => {
    setOpen(true);

    try {
      const res = await axios.delete(`/api/assign/${submit?._id}`);

      await router.replace(router.asPath);
      await setOpen(false);
      await setOpenn(false);
      message.success("Unsubmission successful");
    } catch (error) {
      console.log(error);
      setOpen(false);
      router.replace(router.asPath);
      message.success("Unsubmission successful");
      // setMessage("Something might have gone wrong")
    }
  };

  const handleSubmit = async () => {
    setOpen(true);
    setForm((form.close = !data?.close));

    const config = {
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
    };

    try {
      const response = await axios.put(
        `/api/assign/input/${data?._id}`,
        form,
        config
      );

      await router.replace(router.asPath);
      setOpen(false);
    } catch (error) {
      console.log(error);
      setOpen(false);
      if (data?.close === true) {
        setMessage("Unable to Open result");
      } else {
        setMessage("Unable to Close result");
      }
    }
  };
  //data is for the group
  //login is for the user

  return (
    <div>
      <div className="justify-center h-screen px-2  py-2 w-screen items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-full sm:w-2/3 my-auto mx-auto max-w-full">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
              <h3 className="text-3xl font-semibold">Your Submissions</h3>
            </div>
            {/*body*/}

            <div className="flex justify-center">
              <h1 className="font-medium text-red-500 text-center p-4 text-base">
                {messagee}
              </h1>
            </div>

            <Loader open={open} setOpen={setOpen} />

            <div className="px-5">
              {index === -1 ? (
                data.submission.map((s) => (
                  <SubmitCard
                    details={data}
                    key={s._id}
                    data={s}
                    index={index}
                    date={s.createdAt}
                    answer={s.answer}
                    mark={s.mark}
                    student={s.student}
                  />
                ))
              ) : (
                <SubmitCard
                  details={data}
                  key={submit._id}
                  data={submit}
                  index={index}
                  date={submit.createdAt}
                  answer={submit.answer}
                  mark={submit.mark}
                  student={submit.student}
                />
              )}
            </div>
            {/*                      
                  <Loader open={open} setOpen={setOpen} /> */}

            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setOpenn(false)}
              >
                Close
              </button>

              {index === -1 &&
              data?.close != true &&
              login?.section === "teacher" ? (
                <button
                  onClick={handleSubmit}
                  className="shadow-lg text-red-500 active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                >
                  Close submissions
                </button>
              ) : index === -1 &&
                data?.close === true &&
                login?.section === "teacher" ? (
                <button
                  onClick={handleSubmit}
                  className="shadow-lg text-red-500 active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                >
                  Open submissions
                </button>
              ) : index != -1 && data?.close != true ? (
                <Popconfirm
                  title="Are you sure to delete this task?"
                  onConfirm={handleUnsubmit}
                  onCancel={cancel}
                  okText="Yes"
                  cancelText="No"
                >
                  <button
                    className="shadow-lg text-red-500 active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                  >
                    Unsubmit
                  </button>
                </Popconfirm>
              ) : (
                <button
                  onClick={() => setOpenn(false)}
                  className="shadow-lg text-red-500 active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                >
                  Can't unsubmit
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </div>
  );
}

export default Submissions;
