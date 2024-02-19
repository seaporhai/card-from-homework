"use client";
import React, { useState } from "react";
import { DynamicButton } from "../Card";
import { AddForm } from "../Form";
const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <DynamicButton onClick={openModal} position="bottom-left">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </DynamicButton>
      <div className="">
        {isOpen && (
          <div className="modal-bg flex justify-center items-center">
            <div
              className=" flex justify-center rounded-2xl bg-gray-600 my-5"
              style={{ width: "700px", padding: "50px" }}
            >
              <AddForm
                onSubmit={function (data: FormData): void {
                  throw new Error("Function not implemented.");
                }}
              />
              <div className="modal-action">
                {/* <button className="btn" onClick={closeModal}>
                Close
              </button> */}
                <button
                  className="absolute top-2 right-2 text-gray-600"
                  onClick={closeModal}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
