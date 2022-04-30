import { useState, useEffect, useRef } from "react";

import { getData } from "../../api/announce/[id]";
import Interweave from "interweave";
import axios from "axios";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import Loader from "../../../components/Loader";
import { signIn, signOut, useSession } from "next-auth/client";
import ConfirmModal from "../../../components/Scriptss/ConfirmModal";

const SunEditor = dynamic(() => import("suneditor-react"), {
  ssr: false,
});

const buttonList = dynamic(() => import("suneditor-react"), {
  ssr: false,
});

let CustomEditor;
if (typeof window !== "undefined") {
  CustomEditor = dynamic(() => import("../../../components/Scriptss/constant"));
}

function Updateblog({ dataa }) {
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const url = "https://api.cloudinary.com/v1_1/blytetech/image/upload";
  const preset = "dufgjx3z";
  const [session, loading] = useSession();
  const [showModal, setShowModal] = useState(false);
  const [editorLoaded, setEditorLoaded] = useState(false);
  const { id } = router.query;
  const [data, setData] = useState("");
  const [message, setMessage] = useState("");
  const [form, setForm] = useState({
    firstname: dataa.firstname,

    title: dataa.title,
    desc: dataa.desc,
    body: dataa.body,
    image: dataa.image,
  });

  const [form2, setForm2] = useState({
    file: "",
    upload_preset: "dufgjx3z",
  });

  useEffect(() => {
    setEditorLoaded(true);
  }, []);

  const handleSubmit = async () => {
    setOpen(true);
    if (form2.file != "") {
      var fd = new FormData();
      fd.append("upload_preset", preset);
      fd.append("file", form2.file);
      const config2 = {
        headers: { "X-Requested-With": "XMLHttpRequest" },
      };

      const res = await axios.post(url, fd, config2);

      await setForm((form.image = res.data.secure_url));
      const imageUrl = await res.data.secure_url;
      await setForm({ ...form, image: imageUrl });
    }

    await setForm((form.body = data));

    const config = {
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
    };

    try {
      const response = await axios.put(
        `/api/announce/${id}`,
        JSON.stringify(form),
        config
      );
      setOpen(false);
      setShowModal(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const editor = useRef();

  const getSunEditorInstance = (sunEditor) => {
    editor.current = sunEditor;
  };

  return (
    <div className="bg-gray-400 h-screen">
      <Loader setOpen={setOpen} open={open} />
      {session && (
        <div className="py-12 text-black bg-gray-400">
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
              <div className="p-6 flex flex-col mt-14 bg-white border-b border-gray-200">
                <form onSubmit={handleSubmit}>
                  <h1 className="mb-4 text-center font-normal text-red-400">
                    {message}
                  </h1>

                  <div className="mb-4">
                    <label className="text-xl text-gray-600 mb-4 pb-3">
                      Choose Blog Image <span className="text-red-500">*</span>
                    </label>
                    <br />

                    <input
                      type="file"
                      name="image"
                      onChange={(e) =>
                        setForm2({ ...form2, file: e.target.files[0] })
                      }
                    />
                  </div>

                  <div className="mb-4">
                    <label className="text-xl text-gray-600">
                      Title <span className="text-red-500">*</span>
                    </label>
                    <br />
                    <input
                      value={form.title || ""}
                      name="title"
                      maxLength="100"
                      placeholder={dataa.title}
                      onChange={handleChange}
                      type="text"
                      className="border-2 text-black border-gray-300 p-2 w-full"
                      id="title"
                    />
                  </div>

                  <div className="mb-4">
                    <label className="text-xl text-gray-600">
                      Description <span className="text-red-500">*</span>
                    </label>
                    <br />

                    <textarea
                      cols="30"
                      rows="5"
                      maxLength="200"
                      value={form.desc || ""}
                      placeholder={dataa.desc}
                      name="desc"
                      onChange={handleChange}
                      type="text"
                      className="border-2 text-black border-gray-300 p-2 w-full"
                      id="desc"
                    />
                  </div>

                  <div className="mb-8">
                    <label className="text-xl text-gray-600">
                      Content <span className="text-red-500">*</span>
                    </label>
                    <br />
                    {/* <textarea id="editor" className="border-2 border-gray-500">
                                        
                                    </textarea> */}

                    {/* <Editor
                                        value={form.body || ''}

                                        name= "body"

                                        onChange={(data) => {
                                            setData(data)
                                          }}
                                        className="text-black"
                                        editorLoaded={editorLoaded}
                                />

                                {CustomEditor && <CustomEditor />} */}

                    <SunEditor
                      defaultValue={form.body}
                      value={form.body || ""}
                      placeholder={dataa.body}
                      name="body"
                      width="100%"
                      setDefaultStyle="font-family: arial; font-size: 20px;"
                      setAllPlugins={true}
                      onChange={(content) => {
                        setData(content);
                      }}
                      setOptions={{
                        height: 200,
                        buttonList: [
                          ["undo", "redo"],
                          ["font", "fontSize", "formatBlock"],
                          ["paragraphStyle", "blockquote"],
                          [
                            "bold",
                            "underline",
                            "italic",
                            "strike",
                            "subscript",
                            "superscript",
                          ],
                          ["fontColor", "hiliteColor", "textStyle"],
                          ["removeFormat"],
                          "/", // Line break
                          ["outdent", "indent"],
                          ["align", "horizontalRule", "list", "lineHeight"],
                          ["table", "link", "audio" /** ,'math' */], // You must add the 'katex' library at options to use the 'math' plugin.
                          /** ['imageGallery'] */ // You must add the "imageGalleryUrl".
                          ["fullScreen", "showBlocks", "codeView"],
                          ["preview", "print"],
                          ["save", "template"],
                        ],
                      }}
                      getSunEditorInstance={getSunEditorInstance}
                    />

                    {showModal && (
                      <ConfirmModal
                        own
                        text1="Blog post updated"
                        setShowModal={setShowModal}
                      />
                    )}

                    <link
                      rel="stylesheet"
                      href="https://pagecdn.io/lib/font-awesome/5.10.0-11/css/all.min.css"
                      integrity="sha256-p9TTWD+813MlLaxMXMbTA7wN/ArzGyW/L7c5+KkjOkM="
                      crossOrigin="anonymous"
                    />
                  </div>

                  <div className="flex p-1">
                    <button
                      type="button"
                      onClick={handleSubmit}
                      className="rounded-xl hover:animate-pulse p-3 bg-blue-500 text-white hover:bg-blue-400"
                      required
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* <script src="./node_modules/ckeditor4/ckeditor.js"></script>
    <script>
        CKEDITOR.replace( 'editor' );
    </script> */}
    </div>
  );
}

export async function getServerSideProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = await getData(params.id);
  const dataa = await JSON.parse(JSON.stringify(res));

  // Pass post data to the page via props
  return { props: { dataa } };
}

export default Updateblog;
