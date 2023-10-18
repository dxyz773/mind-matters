import WellnessNavbar from "./WellnessNavbar";
import { Outlet } from "react-router-dom";

function WellnessResourcePage() {
  return (
    <div>
      <h2>Wellness Resources</h2>
      <WellnessNavbar />
      <Outlet />
    </div>
  );
}

export default WellnessResourcePage;
