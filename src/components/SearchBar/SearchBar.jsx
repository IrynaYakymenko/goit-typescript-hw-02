import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { toast } from "react-toastify";

import s from "./SearchBar.module.css";

const SearchBar = ({ onSubmit }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim() === "") {
      toast.error("Please enter some text!");
      return;
    }
    onSubmit(value);
    setValue("");
  };

  return (
    <div className={s.wrapper}>
      <form onSubmit={handleSubmit} className={s.form}>
        <input
          className={s.input}
          onChange={handleChange}
          value={value}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit" className={s.button}>
          <FiSearch size="16px" />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
