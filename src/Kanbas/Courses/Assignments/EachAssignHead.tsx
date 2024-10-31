import { LiaNewspaper } from "react-icons/lia";
import { BsGripVertical } from 'react-icons/bs';
export default function GreenCheckmark() {
  return (
    <div className="green-assign-mark">
      <BsGripVertical className="me-2 fs-3" />
      <LiaNewspaper className="text-success fs-2" />
    </div>
  );
}