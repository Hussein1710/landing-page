"use client";
import Modal from "@/components/Modal";
import React, { useState, Fragment } from "react";
const Button = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <Fragment>
      <button
        className="flex justify-center items-center px-14 py-4 rounded-3xl bg-gradient-to-r from-orange-300 via-orange-600 "
        onClick={() => setShowModal(true)}
      >
        Join the waitlist
      </button>
      <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
      
      </Modal>
    </Fragment>
  );
};

export default Button;
