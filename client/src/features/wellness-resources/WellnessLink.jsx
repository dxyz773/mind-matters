// import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { updateTopic } from "./topicSlice";

function WellnessLink({ topic }) {
  const navigate = useNavigate();
  // const dispatch = useDispatch();

  return (
    <li>
      <button id="resourcesBtns"
        onClick={() => {
          // dispatch(updateTopic(topic.toLowerCase().split(" ").join("-")));
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
