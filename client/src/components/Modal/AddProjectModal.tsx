import { modalProps } from "./interfaces/modaInterface.ts";
import TButton from "../Button/TButton.tsx";
import { useContext, useRef } from "react";
import { presentOrNot } from "./utils/helpers.ts";
import "./styles/AddProjectModal.css";
import { TalentContext } from "../../pages/Talent/Talent.tsx";
import { createProject } from "../../api/project.ts";

function AddProjectModal({ show, setShow }: modalProps) {
  const modalStyle = show ? "showModal" : "";
  const endDateRef = useRef<HTMLInputElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  const tp = useContext(TalentContext);
  const { talentProfile } = localStorage;
  const tal = talentProfile ? JSON.parse(talentProfile as string).talent : {};
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    formData.append("talentId", tal._id);
    const data = Object.fromEntries(formData);

    await createProject(data);
    tp.setRefresh(!tp.refresh);
    const formElement = e.target as HTMLFormElement;
    formElement.reset();
    setShow(false);
  };

  return (
    <div className={"Modal " + modalStyle}>
      <div className="content">
        <div className={"header-11"}>
          <h1>Add Project</h1>{" "}
          <TButton value={"X"} onClick={() => setShow(false)} />
        </div>
        <hr />
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="name">Name</label>
            <input type="text" name={"name"} />
          </div>
          <div className="form-control">
            <label htmlFor="link">Link</label>
            <input type="url" name={"link"} />
          </div>

          <div className={"flex start-end"}>
            <div className="form-control">
              <label htmlFor="startDate">Start</label>
              <input type="date" name={"startDate"} />
            </div>
            <div className="form-control">
              <label htmlFor="endDate">End</label>
              <input type="date" name={"endDate"} ref={endDateRef} />
              <h1 ref={textRef} style={{ display: "none" }}>
                Present
              </h1>
            </div>
          </div>
          <div className="form-control flex gap-2">
            <label htmlFor="current">Current</label>
            <input
              type="checkbox"
              name={"current"}
              value="present"
              onChange={(e) => presentOrNot(e, endDateRef, textRef)}
            />
          </div>
          <div className="form-control">
            <label htmlFor={"description"}>Description</label>
            <textarea name={"description"} />
          </div>

          {/*  add a save button */}
          <div className="form-control">
            <TButton value={"Save"} type={"submit"} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddProjectModal;
