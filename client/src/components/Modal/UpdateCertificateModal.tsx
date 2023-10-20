import { modalProps } from "./interfaces/modaInterface.ts";
import TButton from "../Button/TButton.tsx";
import "./styles/AddProjectModal.css";
import { useContext } from "react";
import { TalentContext } from "../../pages/Talent/Talent.tsx";
import {
  deleteCertification,
  updateCertification,
} from "../../api/certifications.ts";
import { FaEdit, FaTrash } from "react-icons/fa";

function AddCertificateModal({ show, setShow }: modalProps) {
  const modalStyle = show ? "showModal" : "";
  const tp = useContext(TalentContext);

  const { talentProfile, info } = localStorage;
  const tal = talentProfile ? JSON.parse(talentProfile as string).talent : {};
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    formData.append("talentId", tal._id);
    const data = Object.fromEntries(formData);

    await updateCertification(info._id, data);
    tp.setRefresh(!tp.refresh);
    const formElement = e.target as HTMLFormElement;
    formElement.reset();
    setShow(false);
  };
  const handleDelete = async () => {
    await deleteCertification(info._id);
    tp.setRefresh(!tp.refresh);
  };

  return (
    <div className={"Modal " + modalStyle}>
      <div className="content">
        <div className={"header-11"}>
          <h1>Add Certification Modal</h1>{" "}
          <TButton value={"X"} onClick={() => setShow(false)} />
        </div>
        <hr />
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="title">Title</label>
            <input type="text" name={"title"} defaultValue={info.title} />
          </div>
          <div className="form-control">
            <label htmlFor="link">Link</label>
            <input type="url" name={"link"} defaultValue={info.link} />
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

export default AddCertificateModal;
