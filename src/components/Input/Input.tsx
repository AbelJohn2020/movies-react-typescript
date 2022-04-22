import React from "react";
import "./Inputs.css";

type DarkMode = {
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
};

export const Input = ({ inputValue, setInputValue }: DarkMode) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="form">
      <div className="box-input">
        <input
          className="inputText"
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Title movie"
        />
      </div>
    </div>
  );
};
