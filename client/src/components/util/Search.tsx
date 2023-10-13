import React from "react";
import { FaSearch } from "react-icons/fa";
import "./Search.css";

interface propTypes {
  className?: string;
}

function Search({ className }: propTypes): JSX.Element {
  return (
    <>
      {/* <div className="search-home">
        <div className="home-icon">
          <FaHome />
        </div>

        <div> */}
      <div className={"search-con " + (className || "")}>
        <input name="search"></input>
        <button id="search">
          <FaSearch />
        </button>
      </div>
      {/* </div>
      </div> */}
    </>
  );
}

export default Search;
