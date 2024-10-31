import { Link, useParams, useNavigate } from "react-router-dom";
import * as db from "../../Database";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAssignment, updateAssignment, cancelUpdate } from "./reducer";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const [assignment, setAssignment] = useState<any | null>(null);

  useEffect(() => {
    const existingAssignment = assignments.find((a: any) => a.course === cid && a._id === aid)
    if (existingAssignment) {
      setAssignment(existingAssignment);
    } else if (!aid) {
      setAssignment({
        title: "New Assignment",
        description: "New Assignment Description",
        points: 100,
        dueDate: new Date().toISOString(),
        availableDate: new Date().toISOString(),
        untilDate: new Date().toISOString(),
        _id: "",
      });
    }
  }, [setAssignment, aid, cid]);

  const handleInputChange = (field: string, value: any) => {
    setAssignment({ ...assignment, [field]: value });
  };

  const handleSave = () => {
    if (!aid) {
      const newAssignment = { ...assignment, _id: new Date().getTime().toString(), course: cid };
      dispatch(addAssignment(newAssignment));
    } else {
      dispatch(updateAssignment(assignment));
    }
    navigate(`/Kanbas/Courses/${cid}/Assignments`);
  };

  const handleCancel = () => {
    dispatch(cancelUpdate(aid));
    navigate(`/Kanbas/Courses/${cid}/Assignments`);
  };

  return (
    <div id="wd-assignments-editor" className="container mt-4">
      <h2>{aid ? "Edit Assignment" : "New Assignment"}</h2>
      <div className="row mb-3">
        <div className="col">
          <label htmlFor="wd-name">Assignment Name</label>
          <input
            id="wd-name"
            className="form-control"
            value={assignment?.title || ""}
            onChange={(e) => handleInputChange("title", e.target.value)}
          />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col">
          <textarea
            id="wd-description"
            className="form-control"
            rows={12}
            cols={50}
            value={assignment?.description || ""}
            onChange={(e) => handleInputChange("description", e.target.value)}
          />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col">
          <div className="row mb-3 align-items-center">
            <div className="col-md-4 text-end">
              <label htmlFor="wd-points">Points</label>
            </div>
            <div className="col-md-8">
              <input
                id="wd-points"
                className="form-control"
                value={assignment?.points || ""}
                onChange={(e) => handleInputChange("points", e.target.value)}
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-4 text-end">
              <label htmlFor="wd-assign">Assign</label>
            </div>
            <div className="col-md-8">
              <fieldset className="border p-3">
                <div className="mb-3">
                  <label htmlFor="wd-due-date"><strong>Due</strong></label>
                  <input
                    type="datetime-local"
                    id="wd-due-date"
                    className="form-control"
                    value={assignment?.dueDate || ""}
                    onChange={(e) => handleInputChange("dueDate", e.target.value)}
                  />
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label htmlFor="wd-available-from"><strong>Available from</strong></label>
                    <input
                      type="datetime-local"
                      id="wd-available-from"
                      className="form-control"
                      value={assignment?.availableDate || ""}
                      onChange={(e) => handleInputChange("availableDate", e.target.value)}
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="wd-available-until"><strong>Until</strong></label>
                    <input
                      type="datetime-local"
                      id="wd-available-until"
                      className="form-control"
                      value={assignment?.untilDate || ""}
                      onChange={(e) => handleInputChange("untilDate", e.target.value)}
                    />
                  </div>
                </div>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col text-end">
          <hr />
          <button className="btn btn-secondary me-2" type="button" onClick={handleCancel}>
            Cancel
          </button>
          <button className="btn btn-danger" type="button" onClick={handleSave}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
