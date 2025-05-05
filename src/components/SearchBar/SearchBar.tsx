import { ChangeEvent, FormEvent, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { toast } from "react-toastify";

import s from "./SearchBar.module.css";

interface SearchBarProps {
  onSubmit: (query: string) => void;
}

const SearchBar = ({ onSubmit }: SearchBarProps) => {
  const [value, setValue] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
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
