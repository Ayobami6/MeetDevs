import { modalProps } from "./interfaces/modaInterface.ts";
import TButton from "../Button/TButton.tsx";
import "./styles/AddProjectModal.css";
import { useContext } from "react";
import { TalentContext } from "../../pages/Talent/Talent.tsx";
import { deleteSkill, updateSkill } from "../../api/skills.ts";
import { FaEdit, FaTrash } from "react-icons/fa";

function AddSkillModal({ show, setShow, info }: modalProps) {
  const modalStyle = show ? "showModal" : "";

  const tp = useContext(TalentContext);
  const { talentProfile } = localStorage;
  const tal = talentProfile ? JSON.parse(talentProfile as string).talent : {};
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    formData.append("talentId", tal._id);
    const data = Object.fromEntries(formData);

    await updateSkill(info._id, data);
    tp.setRefresh(!tp.refresh);
    const formElement = e.target as HTMLFormElement;
    formElement.reset();
    setShow(false);
  };

  const handleDelete = async () => {
    await deleteSkill(info._id);
    tp.setRefresh(!tp.refresh);
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
            <input type="text" name={"name"} defaultValue={info.name} />
          </div>
          <div className="form-control">
            <label htmlFor={"subSkills"}>Sub Skills</label>
            <input
              type="text"
              name={"subSkills"}
              defaultValue={info.subSkills}
            />
          </div>

          {/*  add a save button */}
          <div className="form-control">
            <TButton
              value={(<FaTrash />) as unknown as string}
              className={" border-red-800"}
              type={"button"}
              onClick={handleDelete}
            />{" "}
            &nbsp;
            <TButton
              value={(<FaEdit />) as unknown as string}
              type={"submit"}
            />{" "}
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddSkillModal;
