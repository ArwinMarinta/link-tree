import React from "react";

const Modal = ({ visible, onClose, children }) => {
  if (!visible) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-10 backdrop-blur-sm flex justify-center items-center " onClick={onClose}>
      <div className="flex flex-col border-2 bg-white rounded-xl divide-y">{children}</div>
    </div>
  );
};

export default Modal;
