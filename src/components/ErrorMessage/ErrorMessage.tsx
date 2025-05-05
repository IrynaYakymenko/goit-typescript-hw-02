import s from "./ErrorMessage.module.css";

interface ErrorMessageProps {
  error: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ error }) => {
  return <div className={s.error}>Something went wrong! - {error}</div>;
};

export default ErrorMessage;
