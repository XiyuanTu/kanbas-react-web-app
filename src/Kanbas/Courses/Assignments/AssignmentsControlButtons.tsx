import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs";

export default function ModuleControlButtons() {
  return (
    <div className="d-flex align-items-center float-end" >
      <p className="wd-rounded-corners-all-around wd-border-medium me-4" >
        40% of Total
      </p>
      <p><BsPlus className="fs-3 me-4" /></p>
      <p><IoEllipsisVertical className="fs-3" /></p>
    </div>
  );
}