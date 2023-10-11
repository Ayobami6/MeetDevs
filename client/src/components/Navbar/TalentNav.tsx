import React from "react";
import { Link } from "react-router-dom";
import "./TalentNav.css";

function TalentNav(): JSX.Element {
  return (
    <div className="talent-nav">
      <div className="nav-con">
        <h3 className="">MeetDevs</h3>
        <nav className="nav-items-con">
          <Link to={"#"}>Get Ranked</Link>
          <Link to={"#"}>Messages</Link>
          <Link to={"#"}>Offers</Link>
        </nav>
      </div>

      <Link to={"#"}>
        <img
          src="src/assets/talents/no_image.png"
          alt="fine girl"
          className="w-20"
        />
      </Link>
    </div>
  );
}

export default TalentNav;
