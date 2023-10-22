import React from "react";

const Modal = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  const handleModalClose = (e) => {
    if (e.target.id === "wrapper") {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-20 backdrop-blur-sm flex justify-center items-center"
      onClick={handleModalClose}
      id="wrapper"
    >
      <div className="w-96 h-80 bg-white rounded-lg">
        <div className="m-2 p-1 flex justify-between">
          <h2 className="text-xl font-semibold underline">My Modal</h2>
          <button
            className="bg-slate-300 w-5 rounded-sm"
            onClick={() => onClose()}
          >
            X
          </button>
        </div>
        <p className="m-1 p-1">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged
        </p>
      </div>
    </div>
  );
};

export default Modal;
