import { modalProps } from "./interfaces/modaInterface.ts";
import TButton from "../Button/TButton.tsx";
import { useRef } from "react";
import { presentOrNot } from "./utils/helpers.ts";
function AddProjectModal({ show, setShow }: modalProps) {
  const modalStyle = show ? "showModal" : "";
  const endDateRef = useRef<HTMLInputElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  return (
    <div className={"Modal " + modalStyle}>
      <div className="content">
        <div className={"header-11"}>
          <h1>Update Education</h1>{" "}
          <TButton value={"X"} onClick={() => setShow(false)} />
        </div>
        <hr />
        <form>
          <div className="form-control">
            <label htmlFor="degree">Degree</label>
            <input type="text" name={"degree"} />
          </div>{" "}
          <div className="form-control">
            <label htmlFor="school">School</label>
            <input type="text" name={"school"} />
          </div>{" "}
          <div className="form-control">
            <label htmlFor="country">Country</label>
            <input type="text" name={"country"} />
          </div>
          <div className="form-control">
            <label htmlFor="city">City</label>
            <input type="text" name={"city"} />
          </div>
          <div className={"flex start-end"}>
            <div className="form-control">
              <label htmlFor="start">Start</label>
              <input type="date" name={"start"} />
            </div>
            <div className="form-control">
              <label htmlFor="end">End</label>
              <input type="date" name={"end"} ref={endDateRef} />
              <h1 ref={textRef} style={{ display: "none" }}>
                Present
              </h1>
            </div>
          </div>
          <form className="form-control flex gap-2">
            <label htmlFor="current">Current</label>
            <input
              type="checkbox"
              name={"current"}
              value="present"
              onChange={(e) => presentOrNot(e, endDateRef, textRef)}
            />
          </form>
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
