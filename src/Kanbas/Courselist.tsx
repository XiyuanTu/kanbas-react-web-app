import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const courses = [
  {
    code: "CS1111",
    name: "Java",
    term: "Spring 2023",
  },
  {
    code: "CS2222",
    name: "Web Development",
    term: "Full 2024",
  },
  {
    code: "CS3333",
    name: "OOP",
    term: "Summer 2024",
  },
  {
    code: "CS4444",
    name: "Data Science",
    term: "Fall 2024",
  },
  {
    code: "CS5555",
    name: "Compiler",
    term: "Fall 2024",
  },
  {
    code: "CS6666",
    name: "iOS Development",
    term: "Fall 2024",
  },
  {
    code: "CS7777",
    name: "Cloud Computing",
    term: "Fall 2024",
  },
  {
    code: "CS8888",
    name: "Cybersecurity",
    term: "Fall 2023",
  },
];

export default function CourseList() {
  return (
    <div className="wd-course-list">
      <h1>Courses</h1>
      <hr />
      <h2 className="text-danger">All Courses</h2>
      <hr />
      {courses.map((course) => (
        <div key={course.code} className="wd-course-item">
          <Link
            to={`/Kanbas/Courses/${course.code}/Modules`}
            className="text-danger text-decoration-none"
          >
            <h3>
              {course.code} {course.name}
            </h3>
            <p>{course.term}</p>
          </Link>
        </div>
      ))}
      <p>
        Welcome to your courses! To customize the list of courses, click on the
        "All Courses" link and star the courses to display.
      </p>
    </div>
  );
}
