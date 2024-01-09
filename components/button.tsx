"use client";

import { useState } from "react";

interface IButton {
  text: string;
}

const Button = ({ text }: IButton) => {
  const [textButton, setTextButton] = useState(text);

  const handleClick = () => {
    setTextButton("Clicked");
  };

  return (
    <button
      onClick={handleClick}
      className="rounded-md bg-blue-600 px-4 py-2 text-gray-100"
    >
      {textButton}
    </button>
  );
};

export default Button;
