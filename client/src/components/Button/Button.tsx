import "./Button.css"

interface ButtonProps {
  text: string;
  size: "sm" | "lg";
}

const Button = ({ text, size }: ButtonProps) => {
  return (
    <button className={`${size == "sm" ? "btn" : size == "lg" ? "btn-large" : ""} bg-green-500`}>{text}</button>
  );
};

export default Button;