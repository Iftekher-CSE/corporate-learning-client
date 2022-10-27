import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CoursesContext } from "../Courses/Courses";

const CourseSideBar = () => {
  const courses = useContext(CoursesContext);
  console.log(courses);
  return (
    // <div className="btn-group btn-group-vertical">
    //   <button className="btn">Button</button>
    // </div>

    <div className="">
      <h3 className="text-2xl font-bold">Total {courses.length} courses</h3>
      <div className="btn-group btn-group-vertical">
        {courses.map(course => (
          <Link key={course.id} to={`/courses/${course.id}`}>
            <button className="btn py-4 my-2 btn-block btn-primary">
              {course.courseName}
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CourseSideBar;
