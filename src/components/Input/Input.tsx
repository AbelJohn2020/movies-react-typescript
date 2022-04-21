import React, { useState } from "react";
import Icons from "../UI/Icons";

type DarkMode = {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
};

export const Input = ({
  darkMode,
  setDarkMode,
  inputValue,
  setInputValue,
}: DarkMode) => {
  const handleClick = () => {
    setDarkMode(!darkMode);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  return (
    <div>
      <div>
        <button onClick={handleClick}>
          <Icons
            type={darkMode ? "dark" : "light"}
            color="#404040"
            size="20px"
          />
        </button>
      </div>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Title movie"
        />
      </div>
    </div>
  );
};
