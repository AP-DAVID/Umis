import {
  UserCircleIcon,
  EyeOffIcon,
  ArrowNarrowRightIcon,
  EyeIcon,
} from "@heroicons/react/outline";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Loader from "../Loader";
import { signIn } from "next-auth/client";

function Form() {
  const [eye, setEye] = useState(false);
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [validation, setValidation] = useState("");

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    const config = {
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
    };

    if (form.username !== "" && form.password !== "") {
      // setValid(true)

      setOpen(true);
      try {
        const response = await axios.post(
          "/api/login/student",
          JSON.stringify(form),
          config
        );

        if (response.data === "User not found") {
          // setValid(false)
          setValidation("The User does not Exist");
          setOpen(false);
        } else if (response.data === "Wrong Password") {
          // setValid(false)
          setValidation("Invalid Password");
          setOpen(false);
        } else if (response.data === "Something") {
          // setValid(false)
          setValidation("Bad request");
          setOpen(false);
        } else {
          await signIn("student-login", {
            username: form.username,
            password: form.password,
          });

          router.replace(router.asPath);
        }
      } catch (error) {
        console.log(error);
        setOpen(false);
      }
    } else {
      setValidation("Please enter the required inputs");
    }
  };

  return (
    <div className="h-full">
      <Loader open={open} setOpen={setOpen} />

      <form className="flex h-full mt-32 flex-col justify-center space-y-4">
        m{" "}
        <div className="flex justify-center">
          <h1 className="text-red-500">{validation}</h1>
        </div>
        <div className="flex">
          <input
            type="text"
            placeholder="Student ID"
            className="px-5 h-14 w-4/5 sm:w-72 placeholder-gray-400 text-white rounded-tl-lg rounded-bl-lg bg-gray-700"
            name="username"
            value={form.username}
            onChange={handleChange}
          />
          <div className="h-14 cursor-pointer w-10 px-1 items-center flex flex-col justify-center text-gray-500 bg-gray-700 rounded-tr-lg rounded-br-lg">
            <UserCircleIcon className="text-red-400" />
          </div>
        </div>
        <div className="flex">
          <input
            type={eye ? "text" : "password"}
            placeholder="Password"
            name="password"
            value={form.password}
            onChange={handleChange}
            className="px-5 h-14 w-4/5 sm:w-72 text-white placeholder-gray-400 rounded-tl-lg rounded-bl-lg bg-gray-700"
          />
          <div
            onClick={() => setEye(!eye)}
            className="h-14 w-10 px-1 flex cursor-pointer flex-col justify-center items-center text-gray-500 bg-gray-700 rounded-tr-lg rounded-br-lg"
          >
            {!eye && <EyeOffIcon className="text-red-400" />}
            {eye && <EyeIcon className="text-blue-300" />}
          </div>
        </div>
        <div>
          <button
            type="button"
            onClick={handleSubmit}
            className="h-14 w-60 sm:w-80 ml-1 text-white hover:shadow-xl rounded-lg bg-gradient-to-r from-purple-500 via-pink-500 to-red-500   hover:from-green-400 hover:to-blue-500"
          >
            <div className="flex justify-between items-center px-4">
              <div>
                <h1 className="text-white">Login to Your Student's Account</h1>
              </div>

              <ArrowNarrowRightIcon className="text-white h-12 w-8" />
            </div>
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
