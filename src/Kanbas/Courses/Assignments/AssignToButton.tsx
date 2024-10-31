import { RxCross2 } from "react-icons/rx";

export default function AssignToButton() {
  return (
    <div>
      <button id="wd-everyone-assign-btn" className="btn btn-secondary">
        <span className="me-5">Everyone</span>
        <RxCross2 className="position-relative" style={{ bottom: "1px" }} />
      </button>
    </div>
  );
}