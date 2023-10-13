import { Link } from "react-router-dom";
import "./TalentNav.css";

function TalentNav(): JSX.Element {
  return (
    <div className="talent-nav">
      <div className="nav-con">
        <img className={"rounded-full"} src="src/assets/logo.png" alt="" />
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
          className="w-20 rounded-full"
        />
      </Link>
    </div>
  );
}

export default TalentNav;
