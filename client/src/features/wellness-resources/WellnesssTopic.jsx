import { useSearchParams } from "react-router-dom";

function WellnesssTopic() {
  let [searchParams] = useSearchParams();
  const topic = searchParams.get("topic");

  return <div>Wellness topic: {topic}</div>;
}

export default WellnesssTopic;
