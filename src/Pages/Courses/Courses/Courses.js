import React, { createContext } from "react";
import { useLoaderData } from "react-router-dom";
import CourseContainer from "../CourseContainer/CourseContainer";
import CourseSideBar from "../CourseSideBar/CourseSideBar";

export const CoursesContext = createContext();
const Courses = () => {
  const courses = useLoaderData();

  return (
    <div className="lg:flex">
      <CoursesContext.Provider value={courses}>
        <div className="flex-auto w-full lg:w-10/12">
          <CourseContainer></CourseContainer>
        </div>
        <div className="flex-auto lg:w-2/12">
          <CourseSideBar></CourseSideBar>
        </div>
      </CoursesContext.Provider>
    </div>
  );
};

export default Courses;
