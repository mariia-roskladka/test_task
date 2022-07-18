import React, { useState } from "react";
import Modal from "../Modal/Modal";
import UserForm from "../Form/UserForm";
import "./Greeting.css";

const Greeting = () => {
  const [modalActive, setModalActive] = useState(false);

  return (
    <>
      <h1 className="title">Hello!</h1>
      <p>
        Are you want to create a request?
        <button className="btn" onClick={() => setModalActive(true)}>
          tab me!
        </button>
      </p>
      <Modal active={modalActive} setActive={setModalActive}>
        <UserForm />
      </Modal>
    </>
  );
};
export default Greeting;
