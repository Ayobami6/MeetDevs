import { modalProps } from "./interfaces/modaInterface.ts";
import TButton from "../Button/TButton.tsx";
import "./styles/AddProjectModal.css";
import { useContext } from "react";
import { TalentContext } from "../../pages/Talent/Talent.tsx";
import { createSkill } from "../../api/skills.ts";

function AddSkillModal({ show, setShow }: modalProps) {
  const modalStyle = show ? "showModal" : "";

  const tp = useContext(TalentContext);
  const { talentProfile } = localStorage;
  const tal = talentProfile ? JSON.parse(talentProfile as string).talent : {};
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    formData.append("talentId", tal._id);
    const data = Object.fromEntries(formData);

    await createSkill(data);
    tp.setRefresh(!tp.refresh);
    const formElement = e.target as HTMLFormElement;
    formElement.reset();
    setShow(false);
  };

  return (
    <div className={"Modal " + modalStyle}>
      <div className="content">
        <div className={"header-11"}>
          <h1>Add Skill</h1>{" "}
          <TButton value={"X"} onClick={() => setShow(false)} />
        </div>
        <hr />
        <form onSubmit={(e) => handleSubmit(e)}>
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
