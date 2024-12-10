import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { toggleShowAllCourses, fetchEnrollments } from './Courses/Enrollment/client';
import { RootState, AppDispatch  } from './store';

interface Course {
  _id: string;
  name: string;
  number: string;
  startDate: string;
  endDate: string;
  department?: string;
  credits?: number;
}

interface CourseListProps {
  courses: Course[] | null; 
  allCourses: Course[] | null; 
}

export default function CourseList({ courses, allCourses }: CourseListProps) {
  const dispatch = useDispatch<AppDispatch>();
  const { currentUser } = useSelector((state: RootState) => state.accountReducer);
  const { showAllCourses } = useSelector(
    (state: RootState) => state.enrollmentReducer
  );

  useEffect(() => {
    if (Array.isArray(allCourses)) {
      const fetchEnrollmentsInBatches = async () => {
        const batchSize = 3;
        for (let i = 0; i < allCourses.length; i += batchSize) {
          const batch = allCourses.slice(i, i + batchSize);
          await Promise.all(
            batch.map(course => dispatch(fetchEnrollments(course._id)))
          );
        }
      };
      fetchEnrollmentsInBatches();
    }
  }, [dispatch, allCourses]);

  const isEnrolled = (courseId: string) => {
    return Array.isArray(courses) && courses.some(course => course && course._id === courseId);
  };
  
  const enrolledCourses = Array.isArray(courses) 
    ? courses.filter(course => course !== null) 
    : [];
  
  const availableCourses = Array.isArray(allCourses) 
    ? allCourses.filter(course => course && !isEnrolled(course._id)) 
    : [];
  
  const displayedCourses = !currentUser ? [] : 
    currentUser.role === 'STUDENT' 
      ? enrolledCourses 
      : (showAllCourses ? availableCourses : enrolledCourses);
  
  // Update role checks to handle null currentUser
  const isAdminOrFaculty = currentUser?.role === 'ADMIN';
  const isStudentOrFaulty = currentUser?.role === 'STUDENT' || currentUser?.role === 'FAULTY';

  return (
    <div id="wd-course-list" className="container-fluid px-4">
      <div className="row align-items-center mb-4 mt-3">
        <div className="col">
          <h2 className="m-0">
            {isStudentOrFaulty
              ? 'My Courses' 
              : (showAllCourses ? 'Available Courses' : 'My Courses')} ({displayedCourses.length})
          </h2>
        </div>
        {isStudentOrFaulty && (
          <div className="col-auto">
            <button
              className="btn btn-primary"
              style={{ minWidth: '140px' }}
              onClick={() => dispatch(toggleShowAllCourses())}
            >
              {showAllCourses ? 'Show My Courses' : 'Show All Courses'}
            </button>
          </div>
        )}
      </div>

      <ul className="list-group">
        {displayedCourses.map((course: Course) => (
          <li key={course._id} 
              className="list-group-item border-0 p-3"
              style={{
                borderBottom: '1px solid #dee2e6',
                marginBottom: '0.5rem'
              }}>
            <Link
              to={`/Kanbas/Courses/${course._id}/Home`}
              className="text-danger text-decoration-none d-block mb-2"
              style={{ fontSize: '1.1rem', fontWeight: 'bold' }}
            >
              {course.number} - {course.name}
            </Link>
            
            <div className="course-details" style={{ fontSize: '0.9rem', color: 'gray' }}>
              <p className="mb-1">Term: {course.startDate} to {course.endDate}</p>
              <p className="mb-1">Department: {course.department}, {course.credits} Credits</p>
              {isStudentOrFaulty && isEnrolled(course._id) && (
                <p className="mb-0 text-success fw-bold">
                  ✓ Enrolled
                </p>
              )}
            </div>
          </li>
        ))}
      </ul>

      {isStudentOrFaulty && (
        <>
          {enrolledCourses.length === 0 && !showAllCourses && (
            <div className="alert alert-info mt-4">
              You are not enrolled in any courses yet.
              <br />
              Click "Show All Courses" to view available courses.
            </div>
          )}

          {showAllCourses && availableCourses.length === 0 && (
            <div className="alert alert-info mt-4">
              No additional courses are available for enrollment at this time.
            </div>
          )}

          {showAllCourses && availableCourses.length > 0 && (
            <div className="alert alert-light mt-4 border">
              Browse all available courses above.
              Click "Show My Courses" to see only your enrolled courses.
            </div>
          )}
        </>
      )}

      {/* Add a specific message for students with no courses */}
      {isStudentOrFaulty && enrolledCourses.length === 0 && (
        <div className="alert alert-info mt-4">
          You are not enrolled in any courses yet.
        </div>
      )}
      </div>
  );
}