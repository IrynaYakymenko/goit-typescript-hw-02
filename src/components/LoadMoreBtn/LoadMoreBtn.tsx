import s from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProps {
  handleClick: () => void;
}

const LoadMoreBtn = ({ handleClick }: LoadMoreBtnProps) => {
  return (
    <button onClick={handleClick} className={s.btn}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;
