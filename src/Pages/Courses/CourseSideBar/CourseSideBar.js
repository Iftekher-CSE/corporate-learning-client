import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CoursesContext } from "../Courses/Courses";

const CourseSideBar = () => {
  const courses = useContext(CoursesContext);
  console.log(courses);
  return (
    <div className="border">
      <h3>Total {courses.length} courses</h3>
      {courses.map(course => (
        <Link key={course.id} to={`/courses/${course.id}`}>
          {course.courseName}
        </Link>
      ))}
    </div>
  );
};

export default CourseSideBar;
