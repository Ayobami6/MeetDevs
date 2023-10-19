import { modalProps } from "./interfaces/modaInterface.ts";
import TButton from "../Button/TButton.tsx";
import "./styles/AddProjectModal.css";

function AddSkillModal({ show, setShow }: modalProps) {
  const modalStyle = show ? "showModal" : "";

  return (
    <div className={"Modal " + modalStyle}>
      <div className="content">
        <div className={"header-11"}>
          <h1>Update Skill</h1>{" "}
          <TButton value={"X"} onClick={() => setShow(false)} />
        </div>
        <hr />
        <form>
          <div className="form-control">
            <label htmlFor="name">Name</label>
            <input type="text" name={"name"} />
          </div>
          <div className="form-control">
            <label htmlFor={"subSkills"}>Sub Skills</label>
            <input type="text" name={"subSkills"} />
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

export default AddSkillModal;
