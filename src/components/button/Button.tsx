import { FC } from "react";
import "./Button.scss";

interface ButtonProps {
  text: string;
}

const Button: FC<ButtonProps> = ({ text }) => {
  return (
    <div className="container">
      <button className="button">{text}</button>
    </div>
  );
};

export default Button;
