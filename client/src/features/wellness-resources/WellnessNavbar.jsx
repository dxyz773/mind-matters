import WellnessLink from "./WellnessLink";
function WellnessNavbar() {
  const wellnessTopics = [
    "meditation",
    "time-in-nature-green-blue-spaces",
    "movement",
    "social-connection",
    "self-expression",
  ];
  return (
    <div>
      <ul style={{ listStyle: "none" }}>
        {wellnessTopics.map((topic) => (
          <WellnessLink topic={topic} key={topic} />
        ))}
      </ul>
    </div>
  );
}

export default WellnessNavbar;
