import { useState } from "react";
import { useParams } from "react-router-dom";
import { wellnessData } from "../../data/wellnessResourceData";

function WellnesssTopic() {
  const [currentTopic, setCurrentTopic] = useState(wellnessData[3]);

  const { topic } = useParams();
  console.log(currentTopic);
  return (
    <div>
      <h3>{topic.split("-").join(" ").toUpperCase()}</h3>
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
