import WellnessNavbar from "./WellnessNavbar";
import { Outlet } from "react-router-dom";

function WellnessResourcePage() {
  return (
    <div id="wellnessResources">
      <div id="wellnessResourcesTextAndBtnsContainer">
        <div id="wellnessResourcesTextContainer">
          <h2 id="wellnessResourcesTitle">Discover the <span id="data">Data</span> Behind Our Recommendations</h2>
          <p id="wellnessResourcesBlurb">Here, we delve deep into the data and research, providing you with statistics that prove the effectiveness of each well-being recommendation. Gain a comprehensive understanding of why these activities work and how they can transform your life. Dive into the world of mental wellness with evidence-based insights that empower you to make informed choices.</p>
        </div>
        <div id="wellnessResourcesBtns">
          <WellnessNavbar />
        </div>
      </div>
      <div id="wellnessResourcesCardContainer">
        <Outlet />
      </div>
    </div>
  );
}

export default WellnessResourcePage;
