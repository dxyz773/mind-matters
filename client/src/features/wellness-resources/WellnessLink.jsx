import { Link } from "react-router-dom";
function WellnessLink({ topic }) {
  return (
    <li>
      {/* <Link to={`/wellness-resources?topic=${topic.toLowerCase()}`}>
        {topic}
      </Link> */}
      <Link
        style={{ textDecoration: "none" }}
        to={`/wellness-resources/${topic.toLowerCase().split(" ").join("-")}`}
      >
        {topic}
      </Link>
    </li>
  );
}

export default WellnessLink;

// .join("  ")
