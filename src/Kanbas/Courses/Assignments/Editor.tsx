import Assignments from ".";

export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input id="wd-name" value="A1 - ENV + HTML" />
      <br />
      <br />
      <textarea id="wd-description">
        The assignment is available online Submit a link to the landing page of
      </textarea>
      <br />
      <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} />
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-group">Assignment Group</label>
          </td>
          <td>
            <select id="wd-group">
              <option value="ASSIGNMENTS">ASSIGNMENTS</option>
            </select>
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-display-grade-as">Display Grade as</label>
          </td>
          <td>
            <select id="wd-display-grade-as">
              <option value="Percentage">Percentage</option>
            </select>
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-submission-type">Submission Type</label>
          </td>
          <td>
            <select id="wd-submission-type">
              <option value="Online">Online</option>
            </select>
          </td>
        </tr>
        <tr>
          <div>Online Entry Options</div>
          <br />
          <td>
            <label>
              <input
                type="checkbox"
                name="OnlineEntryOptions"
                value="Text Entry"
                id="wd-text-entry"
              />
              Text Entry
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                name="OnlineEntryOptions"
                value="Website URL"
                id="wd-website-url"
              />
              Website URL
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                name="OnlineEntryOptions"
                value="Media Recordings"
                id="wd-media-recordings"
              />
              Media Recordings
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                name="OnlineEntryOptions"
                value="Student Annotation"
                id="wd-student-annotation"
              />
              Student Annotation
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                name="OnlineEntryOptions"
                value="File Uploads"
                id="wd-file-upload"
              />
              File Uploads
            </label>
          </td>
        </tr>
        <tr>
          <div>Assign</div>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-assign-to">Assign to</label>
            </td>
            <td>
              <input id="wd-assign-to" value={"Everyone"} />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-due-date">Due</label>
            </td>
            <td>
              <input id="wd-due-date" type="date" />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-available-from">Available from</label>
            </td>
            <td>
              <input id="wd-available-from" type="date" />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-available-until">Until</label>
            </td>
            <td>
              <input id="wd-available-until" type="date" />
            </td>
          </tr>
        </tr>
      </table>
      <button>save</button>
      <button>cancel</button>
    </div>
  );
}
