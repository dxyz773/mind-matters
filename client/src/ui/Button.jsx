import { useNavigate } from "react-router-dom";

function Button({ children, onClick, type = "primary" }) {
  const navigate = useNavigate();
  if (type === "back")
    return <button onClick={() => navigate(-1)}>{children}</button>;
  return <button onClick={onClick}>{children}</button>;
}

export default Button;
