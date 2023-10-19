import { useSelector } from "react-redux";

function WellnesssTopic() {
  const { currentTopic } = useSelector((store) => store.topic);

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
