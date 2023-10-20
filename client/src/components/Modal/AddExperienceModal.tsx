import "./styles/AddExperienceModal.css";
import TButton from "../Button/TButton.tsx";
import { modalProps } from "./interfaces/modaInterface.ts";
import { useContext, useRef } from "react";
import { presentOrNot } from "./utils/helpers.ts";
import { createExperience } from "../../api/experience.ts";
import { TalentContext } from "../../pages/Talent/Talent.tsx";

function AddExperienceModal({ show, setShow }: modalProps): JSX.Element {
  const endDateRef = useRef<HTMLInputElement>(null);
  const textRef = useRef<HTMLInputElement>(null);

  const { talentProfile } = localStorage;
  const tal = talentProfile ? JSON.parse(talentProfile as string).talent : {};
  const modalStyle = show ? "showModal" : "";
  const tp = useContext(TalentContext);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    formData.append("talentId", tal._id);
    const data = Object.fromEntries(formData);

    await createExperience(data);
    tp.setRefresh(!tp.refresh);
  };

  return (
    <div className={"Modal " + modalStyle}>
      <div className={"content"}>
        <div className={"header-11"}>
          <h1>Add Position</h1>{" "}
          <TButton value={"X"} onClick={() => setShow(false)} />
        </div>
        <hr />
        <form
          onSubmit={async (e) => {
            await handleSubmit(e);
            setShow(false);
          }}
        >
          <div className="form-control">
            <label htmlFor="jobTitle">Title</label>
            <input type="text" name={"jobTitle"} />
          </div>
          <div className="form-control">
            <label htmlFor="employer">Company</label>
            <input type="text" name={"employer"} />
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

          <div className="form-control">
            <label htmlFor={"country"}>Country</label>
            <input type="text" name={"country"} />
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

export default AddExperienceModal;
