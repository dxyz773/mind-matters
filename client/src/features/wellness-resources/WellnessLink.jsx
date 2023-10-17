import { Link } from "react-router-dom";
function WellnessLink({ topic }) {
  return (
    <li>
      <Link to={`/wellness-resources?topic=${topic.toLowerCase()}`}>
        {topic}
      </Link>
    </li>
  );
}

export default WellnessLink;
