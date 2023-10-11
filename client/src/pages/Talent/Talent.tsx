import React from "react";
import { FaHome, FaSearch } from "react-icons/fa";
import TalentNav from "../../components/Navbar/TalentNav";
import "./Talent.css";

const Talent = (): JSX.Element => {
  return (
    <>
      <div className="talent-page">
        <TalentNav />
        <div>
          <div>
            <div className="home-icon">
              <FaHome style={{ color: "green", fontSize: "30px" }} />
            </div>

            <div>
              <div className="search-con">
                <input name="search"></input>
                <button>
                  <FaSearch />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Talent;
