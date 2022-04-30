import { useEffect, useState } from "react";
import { Image } from "semantic-ui-react";
import axios from "axios";
import Loader from "../../Loader";
import { useRouter } from "next/router";
import generator from "generate-password";
import { Input } from "semantic-ui-react";
import Portal from "./Portal";
import { HandIcon, PlusIcon } from "@heroicons/react/outline";

function Modal({ setShowModal, showModal, login }) {
  const url = "https://api.cloudinary.com/v1_1/blytetech/image/upload";
  const preset = "dufgjx3z";
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);
  const [openn, setOpenn] = useState(false);
  const [image, setImage] = useState("");
  const [imagee, setImagee] = useState("");
  const router = useRouter();

  const [form, setForm] = useState({
    groupname: "", //this one
    adminId: "",
    teacher: "",
    picture: "",
    subjectname: "", //this one
    code: "",
  });

  const setCode = async () => {
    let code = await generator.generate({
      length: 5,
      numbers: true,
    });

    await setForm((form.code = code));
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    if (
      form.groupname != "" ||
      imagee != "" ||
      image != "" ||
      form.subjectname != ""
    ) {
      setOpen(true);
      await setCode();

      try {
        var fd = new FormData();
        fd.append("upload_preset", preset);
        fd.append("file", imagee);
        const config2 = {
          headers: { "X-Requested-With": "XMLHttpRequest" },
        };

        const res = await axios.post(url, fd, config2);

        await setForm((form.picture = res.data.secure_url));
      } catch (error) {
        console.log(error);
        setOpen(false);
        setMessage("Your picture is invalid");
      }

      await setForm((form.adminId = login.adminId));

      await setForm((form.teacher = login._id));

      const config = {
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
      };

      try {
        const response = await axios.post(`/api/group`, form, config);

        if (response.data === "subject") {
          setOpenn(true);
          setOpen(false);
        } else {
          router.replace(router.asPath);
          setShowModal(false);
        }
      } catch (error) {
        console.log(error);
        setOpen(false);
        setMessage("Something went wrong");
      }
    } else {
      setMessage("Invalid Credentials");
    }
  };

  return (
    <div>
      <div className="justify-center px-3 h-screen w-screen items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-full sm:w-2/3 my-auto mx-auto max-w-full">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
              <h3 className="text-3xl font-semibold">Create Group</h3>
            </div>
            {/*body*/}
            <Portal open={openn} />
            <div>
              <Image
                className="object-contain py-5 px-3 rounded-full max-h-32"
                src={
                  image
                    ? image
                    : "https://images.unsplash.com/photo-1617791160536-598cf32026fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=764&q=80"
                }
                bordered
                size="small"
              />

              <label className="w-36 ml-3 flex flex-col items-center  bg-gray-600 rounded-xl shadow-md  uppercase border border-blue cursor-pointer hover:bg-blue-600 hover:text-white text-black ease-linear transition-all duration-150">
                {/* <i className="fas fa-cloud-upload-alt fa-3x" /> */}
                <span className="mt-2 text-sm leading-normal text-white">
                  Select a profile pic
                </span>
                <input
                  type="file"
                  name="image"
                  onChange={(e) => {
                    setImagee(event.target.files[0]);
                    setImage(URL.createObjectURL(event.target.files[0])); //to show the picture on the browser
                  }}
                  className="invisible"
                />
              </label>
            </div>

            <div className="flex justify-center">
              <h1 className="font-medium text-red-500 text-center p-4 text-base">
                {message}
              </h1>
            </div>

            <form className="h-full w-full space-y-2 ml-6 sm:px-5 my-10 sm:mr:10 justify-items-stretch sm:space-x-1 sm:grid md:grid:cols-2 lg:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
              <div>
                <h4 className="text-base text-gray-500">Group name</h4>

                <input
                  type="text"
                  value={form.groupname}
                  onChange={handleChange}
                  name="groupname"
                  className="h-16 w-54 text-indigo-500 font-bold  rounded-full px-3 bg-gray-200 shadow-md "
                />
              </div>

              <div>
                <h4 className="text-base text-gray-500">Subject</h4>

                <div>
                  <Input
                    readonly="readonly"
                    size="massive"
                    transparent={false}
                    list="subjects"
                    placeholder="Choose a subject..."
                    name="subjectname"
                    value={form.subjectname}
                    onChange={handleChange}
                  />
                  <datalist id="subjects">
                    {login?.subject?.map((res) => (
                      <option value={`${res.subjectname}`}></option>
                    ))}
                    <HandIcon className="h-5 w-5" />
                  </datalist>
                </div>
              </div>

              <Loader open={open} setOpen={setOpen} />
            </form>

            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
              <button
                onClick={handleSubmit}
                className="shadow-lg text-red-500 active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
              >
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </div>
  );
}

export default Modal;
