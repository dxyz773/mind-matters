import { wellnessData } from "../../data/wellnessResourceData";
import { useLoaderData } from "react-router-dom";

function WellnesssTopic() {
  const currentTopic = useLoaderData();
  return (
    <div>
      <h3>{currentTopic.topic.split("-").join(" ").toUpperCase()}</h3>
      {currentTopic.resources.map((resource) => (
        <div key={resource.statement}>
          <h4>{resource.statement}</h4>
          {resource.resource.map((fact) => (
            <p key={fact.data}>{fact.data}</p>
          ))}
        </div>
      ))}
      <h4>Further Reading</h4>
      {currentTopic.links.map((link) => (
        <li key={link.title}>
          <a href={link.link}>{link.title}</a>
        </li>
      ))}
    </div>
  );
}

export default WellnesssTopic;

export function loader({ params }) {
  const currentTopic = wellnessData.find((curr) => curr.topic === params.topic);
  return currentTopic;
}
