import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CoursesContext } from "../Courses/Courses";

const CourseContainer = () => {
  const courses = useContext(CoursesContext);
  return (
    <div className="grid grid-cols-1 gap-4 p-6">
      {courses.map(course => (
        <div className="lg:h-48">
          <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure>
              <img
                className="rounded rounded-xl lg:h-48"
                src={course.imgURL}
                alt="Album"
              />
            </figure>
            <div className="card-body flex flex-row">
              <div className="grow">
                <h2 className="card-title">{course.courseName}</h2>
                <h4>Course Duration: {course.duration}</h4>
                <h4>Course Type: {course.courseType}</h4> <br />
                <h2 className="text-xl font-bold">
                  Course Cost: {course.cost}
                </h2>
              </div>
              <div className="card-actions items-center">
                <Link to={`/courses/${course.id}`}>
                  <button className="btn btn-primary">Details</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseContainer;
