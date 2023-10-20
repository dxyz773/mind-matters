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
    <div>
      <ul style={{ listStyle: "none", display: "flex" }}>
        {wellnessTopics.map((topic) => (
          <WellnessLink topic={topic} key={topic} />
        ))}
      </ul>
    </div>
  );
}

export default WellnessNavbar;
