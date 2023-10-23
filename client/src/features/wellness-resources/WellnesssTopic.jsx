import { wellnessData } from "../../data/wellnessResourceData";
import { useLoaderData } from "react-router-dom";

function WellnesssTopic() {
  const currentTopic = useLoaderData();
  return (
    <div id="card">
      <h3 id="currentTopic">
        {currentTopic.topic.split("-").join(" ").toUpperCase()}
      </h3>
      <div id="cardInfoProfileBtnAndImage">
        <div id="cardInfoAndAddToProfileBtn">
          {currentTopic.resources.map((resource) => (
            <div key={resource.statement}>
              <h4 id="resourceQuestions">{resource.statement}</h4>
              {resource.resource.map((fact) => (
                <p id="resourceQuestionResponses" key={fact.data}>
                  {fact.data}
                </p>
              ))}
            </div>
          ))}
          <div id="furtherReading">
            <h4>Further Reading</h4>
            {currentTopic.links.map((link) => (
              <li key={link.title}>
                <a href={link.link}>{link.title}</a>
              </li>
            ))}
          </div>
          <div id="addToProfileBtnContainer">
            <button id="addToProfileBtn">Add to Profile</button>
          </div>
        </div>
        <div id="imageContainer">
          <div id="cardImage">IMAGE GOES HERE!!!</div>
        </div>
      </div>
    </div>
  );
}

export default WellnesssTopic;

export function loader({ params }) {
  const currentTopic = wellnessData.find((curr) => curr.topic === params.topic);
  return currentTopic;
}
