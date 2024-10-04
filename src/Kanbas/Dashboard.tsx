import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses (8)</h2>
      <hr />

      <div
        id="wd-dashboard-courses"
        className="row row-cols-1 row-cols-md-5 g-4"
      >
        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
          <div className="card rounded-3 overflow-hidden">
            <Link
              className="wd-dashboard-course-link text-decoration-none text-dark"
              to="/Kanbas/Courses/1111/Home"
            >
              <img
                src="/images/cat1.jpg"
                width="100%"
                height={160}
                alt="Java"
              />
              <div className="card-body">
                <h5 className="wd-dashboard-course-title card-title">
                  CS1111 Java
                </h5>
                <p className="wd-dashboard-course-title card-text">
                  Java developer
                </p>
                <button className="btn btn-primary"> Go </button>
              </div>
            </Link>
          </div>
        </div>

        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
          <div className="card rounded-3 overflow-hidden">
            <Link
              className="wd-dashboard-course-link text-decoration-none text-dark"
              to="/Kanbas/Courses/5610/Home"
            >
              <img
                src="/images/cat2.jpg"
                width="100%"
                height={160}
                alt="Web Development"
              />
              <div className="card-body">
                <h5 className="wd-dashboard-course-title card-title">
                  CS2222 Web Development
                </h5>
                <p className="wd-dashboard-course-title card-text">
                  Web Development
                </p>
                <button className="btn btn-primary"> Go </button>
              </div>
            </Link>
          </div>
        </div>

        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
          <div className="card rounded-3 overflow-hidden">
            <Link
              className="wd-dashboard-course-link text-decoration-none text-dark"
              to="/Kanbas/Courses/5200/Home"
            >
              <img src="/images/cat3.jpg" width="100%" height={160} alt="OOP" />
              <div className="card-body">
                <h5 className="wd-dashboard-course-title card-title">
                  CS3333 OOP
                </h5>
                <p className="wd-dashboard-course-title card-text">OOP</p>
                <button className="btn btn-primary"> Go </button>
              </div>
            </Link>
          </div>
        </div>

        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
          <div className="card rounded-3 overflow-hidden">
            <Link
              className="wd-dashboard-course-link text-decoration-none text-dark"
              to="/Kanbas/Courses/5550/Home"
            >
              <img
                src="/images/cat4.jpg"
                width="100%"
                height={160}
                alt="Data Science"
              />
              <div className="card-body">
                <h5 className="wd-dashboard-course-title card-title">
                  CS4444 Data Science
                </h5>
                <p className="wd-dashboard-course-title card-text">
                  Data Science
                </p>
                <button className="btn btn-primary"> Go </button>
              </div>
            </Link>
          </div>
        </div>

        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
          <div className="card rounded-3 overflow-hidden">
            <Link
              className="wd-dashboard-course-link text-decoration-none text-dark"
              to="/Kanbas/Courses/6700/Home"
            >
              <img
                src="/images/cat5.jpg"
                width="100%"
                height={160}
                alt="Compiler"
              />
              <div className="card-body">
                <h5 className="wd-dashboard-course-title card-title">
                  CS5555 Compiler
                </h5>
                <p className="wd-dashboard-course-title card-text">Compiler</p>
                <button className="btn btn-primary"> Go </button>
              </div>
            </Link>
          </div>
        </div>

        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
          <div className="card rounded-3 overflow-hidden">
            <Link
              className="wd-dashboard-course-link text-decoration-none text-dark"
              to="/Kanbas/Courses/7800/Home"
            >
              <img
                src="/images/cat6.jpg"
                width="100%"
                height={160}
                alt="iOS Development"
              />
              <div className="card-body">
                <h5 className="wd-dashboard-course-title card-title">
                  CS6666 iOS Development
                </h5>
                <p className="wd-dashboard-course-title card-text">
                  iOS Development
                </p>
                <button className="btn btn-primary"> Go </button>
              </div>
            </Link>
          </div>
        </div>

        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
          <div className="card rounded-3 overflow-hidden">
            <Link
              className="wd-dashboard-course-link text-decoration-none text-dark"
              to="/Kanbas/Courses/6400/Home"
            >
              <img
                src="/images/cat7.jpg"
                width="100%"
                height={160}
                alt="Cloud Computing"
              />
              <div className="card-body">
                <h5 className="wd-dashboard-course-title card-title">
                  CS7777 Cloud Computing
                </h5>
                <p className="wd-dashboard-course-title card-text">
                  Cloud Computing
                </p>
                <button className="btn btn-primary"> Go </button>
              </div>
            </Link>
          </div>
        </div>

        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
          <div className="card rounded-3 overflow-hidden">
            <Link
              className="wd-dashboard-course-link text-decoration-none text-dark"
              to="/Kanbas/Courses/7000/Home"
            >
              <img
                src="/images/cat8.jpg"
                width="100%"
                height={160}
                alt="Cybersecurity"
              />
              <div className="card-body">
                <h5 className="wd-dashboard-course-title card-title">
                  CS8888 Cybersecurity
                </h5>
                <p className="wd-dashboard-course-title card-text">
                  Cybersecurity
                </p>
                <button className="btn btn-primary"> Go </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
