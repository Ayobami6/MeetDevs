import React from "react";
import { FaPlus } from "react-icons/fa";
import "./AddInfo.css";

interface propInterface {
  title: string;
}

function AddInfo({ title }: propInterface): JSX.Element {
  return (
    <div className="add-info-con">
      <div className="title">{title}</div>
      <button>
        <FaPlus />
      </button>
    </div>
  );
}

export default AddInfo;
