import React from "react";
import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h3>Profile</h3>
      <input
        id="wd-username"
        value="txy"
        placeholder="username"
        className="form-control mb-2"
      />
      <input
        id="wd-password"
        value="123"
        placeholder="password"
        type="password"
        className="form-control mb-2"
      />
      <input
        id="wd-firstname"
        value="Xiyuan"
        placeholder="First Name"
        className="form-control mb-2"
      />
      <input
        id="wd-lastname"
        value="Tu"
        placeholder="Last Name"
        className="form-control mb-2"
      />
      <input
        id="wd-dob"
        value="1999-07-09"
        type="date"
        className="form-control mb-2"
      />
      <input
        id="wd-email"
        value="xiyuan.tyler@gmail.com"
        type="email"
        className="form-control mb-2"
      />
      <select id="wd-role" className="form-control mb-3">
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </select>

      <Link to="/Kanbas/Account/Signin" className="btn btn-danger w-100">
        Sign out
      </Link>
    </div>
  );
}
