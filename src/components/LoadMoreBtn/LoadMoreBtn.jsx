import s from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ handleClick }) => {
  return (
    <button onClick={handleClick} className={s.btn}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;
