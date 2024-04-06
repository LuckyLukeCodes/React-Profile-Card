import React from "react";

const CardButton = ({ text, btnColor }) => {
  return (
    <button
      className={`${btnColor} rounded-2xl px-4 py-2 text-slate-100 shadow-md hover:opacity-40`}
    >
      {text}
    </button>
  );
};

export default CardButton;
