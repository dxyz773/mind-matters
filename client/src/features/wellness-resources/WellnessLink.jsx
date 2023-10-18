import { useNavigate } from "react-router-dom";

function WellnessLink({ topic }) {
  const navigate = useNavigate();
  return (
    <li>
      <button
        onClick={() => {
          navigate(
            `/wellness-resources/${topic.toLowerCase().split(" ").join("-")}`,
          );
        }}
      >
        {topic}
      </button>
    </li>
  );
}

export default WellnessLink;
