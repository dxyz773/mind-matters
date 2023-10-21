import WellnessLink from "./WellnessLink";
function WellnessNavbar() {
  const wellnessTopics = [
    "Meditation",
    "Time In Nature",
    "Movement",
    "Social Connection",
    "Self-expression",
  ];
  return (
    <div id="resourcesPageContainer">
      <ul id="resourcesSelectionBtnsContainer" style={{ listStyle: "none" }}>
        {wellnessTopics.map((topic) => (
          <WellnessLink topic={topic} key={topic} />
        ))}
      </ul>
    </div>
  );
}

export default WellnessNavbar;
