import { modalProps } from "./interfaces/modaInterface.ts";
import TButton from "../Button/TButton.tsx";
import "./styles/AddProjectModal.css";

function AddCertificateModal({ show, setShow }: modalProps) {
  const modalStyle = show ? "showModal" : "";

  return (
    <div className={"Modal " + modalStyle}>
      <div className="content">
        <div className={"header-11"}>
          <h1>Update Certification Modal</h1>{" "}
          <TButton value={"X"} onClick={() => setShow(false)} />
        </div>
        <hr />
        <form>
          <div className="form-control">
            <label htmlFor="title">Title</label>
            <input type="text" name={"title"} />
          </div>
          <div className="form-control">
            <label htmlFor="link">Link</label>
            <input type="url" name={"link"} />
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

export default AddCertificateModal;
