import { modalProps } from "./interfaces/modaInterface.ts";
import { useContext, useRef } from "react";
import { TalentContext } from "../../pages/Talent/Talent.tsx";
import { deleteEducation, updateEducation } from "../../api/education.ts";
import TButton from "../Button/TButton.tsx";
import { presentOrNot } from "./utils/helpers.ts";
import { FaEdit, FaTrash } from "react-icons/fa";

function AddProjectModal({ show, setShow, info }: modalProps) {
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
    await updateEducation(info._id, data);
    tp.setRefresh(!tp.refresh);
    const formElement = e.target as HTMLFormElement;
    formElement.reset();
    setShow(false);
  };

  const handleDelete = async () => {
    deleteEducation(info._id);
    tp.setRefresh(!tp.refresh);
  };

  return (
    <div className={"Modal " + modalStyle}>
      <div className="content">
        <div className={"header-11"}>
          <h1>Add Education</h1>{" "}
          <TButton value={"X"} onClick={() => setShow(false)} />
        </div>
        <hr />
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="degree">Degree</label>
            <input type="text" name={"degree"} defaultValue={info.degree} />
          </div>{" "}
          <div className="form-control">
            <label htmlFor="school">School</label>
            <input type="text" name={"school"} defaultValue={info.school} />
          </div>{" "}
          <div className="form-control">
            <label htmlFor="country">Country</label>
            <input type="text" name={"country"} defaultValue={info.country} />
          </div>
          <div className="form-control">
            <label htmlFor="city">City</label>
            <input type="text" name={"city"} defaultValue={info.city} />
          </div>
          <div className={"flex start-end"}>
            <div className="form-control">
              <label htmlFor="startDate">Start</label>
              <input
                type="date"
                name={"startDate"}
                defaultValue={new Date(info.startDate)
                  .toISOString()
                  .slice(0, 10)}
              />
            </div>
            <div className="form-control">
              <label htmlFor="endDate">End</label>
              <input
                type="date"
                name={"endDate"}
                ref={endDateRef}
                defaultValue={new Date(info.endDate).toISOString().slice(0, 10)}
              />
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
            <textarea name={"description"} defaultValue={info.description} />
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
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddProjectModal;
