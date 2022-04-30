import React, { useState, useRef, useEffect } from "react";
import { Button, Header, Image, Modal } from "semantic-ui-react";
import Cardc from "./Cardc";
import Loader from "../Loader";
import { useRouter } from "next/router";
import axios from "axios";

function Comment({ open, setOpen, comment, image, login, data }) {
  const scrollRef = useRef();
  const [openn, setOpenn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setTimeout(async () => {
      await scrollRef?.current?.scrollIntoView({ behavior: "smooth" });
    }, 500);

    // const lastIndex = await findLastIndex(messages, v => v.sender != user._id)

    // setPic(messages[lastIndex]?.profile)
  }, [open]);

  const [form, setForm] = useState({
    questionId: "",
    text: "",
    sectionId: "",
    firstname: "",
    lastname: "",
    picture: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    if (form.text != "") {
      setOpenn(true);

      const config = {
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
      };

      setForm((form.firstname = login?.firstname));
      setForm((form.lastname = login?.lastname));
      setForm((form.picture = login?.profile));
      setForm((form.questionId = data));
      setForm((form.sectionId = login?._id));

      try {
        const response = await axios.post("/api/comment", form, config);

        router.replace(router.asPath);
        setOpenn(false);
      } catch (error) {
        console.log(error);
        setOpen(false);
      }
    } else {
      console.log("You need to enter something");
    }
  };

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      className="break-words mb-10"
    >
      <Modal.Header>Comments</Modal.Header>
      <Modal.Content image>
        {/* <Image size='medium' src={image} wrapped /> */}
        <Modal.Description>
          <Header>Comment below</Header>

          <div className="md:w-3/4 ">
            {comment.map((c) => (
              <Cardc
                key={c?._id}
                data={c}
                section={c?.sectionId}
                login={login}
                text={c?.text}
                picture={c.picture}
                name={`${c?.firstname} - ${c?.lastname}`}
              />
            ))}
          </div>
          <Loader open={openn} setOpen={setOpenn} />
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions className="flex  justify-evenly">
        <textarea
          ref={scrollRef}
          type="text"
          name="text"
          value={form.text}
          onChange={handleChange}
          placeholder="add a comment"
          className="w-full px-2 py-2"
        />

        <Button color="black" onClick={() => setOpen(false)}>
          X
        </Button>
        <Button
          content="G"
          labelPosition="right"
          icon="checkmark"
          className="hidden sm:inline-flex"
          onClick={handleSubmit}
          positive
        />
      </Modal.Actions>
    </Modal>
  );
}

export default Comment;
