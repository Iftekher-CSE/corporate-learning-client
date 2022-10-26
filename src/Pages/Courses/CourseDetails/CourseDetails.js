import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FaBookReader } from "react-icons/fa";

const CourseDetails = () => {
  const courseDetails = useLoaderData();
  return (
    <div>
      {/* Course Details container Header */}
      <div className="alert shadow-lg m-4 w-auto">
        <div>
          <FaBookReader className="w-8 h-8"></FaBookReader>
          <div>
            <h3 className="font-bold">{courseDetails.courseName}</h3>
            <div className="text-xs">
              Click on the button to download PDF file of this course details
            </div>
          </div>
        </div>
        <div className="flex-none">
          <button className="btn btn-sm">PDF Download</button>
        </div>
      </div>

      {/* Course Details */}
      <div className="card w-100 bg-base-100 shadow-xl m-8">
        <figure>
          <img src={courseDetails.imgURL} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {courseDetails.courseName}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <h3>Total Course Duration: {courseDetails.duration}</h3>
          <h3>Course Type: {courseDetails.courseType}</h3>
          <p>{courseDetails.brief}</p>
          <div className="card-actions justify-end">
            <div>
              <Link to="/checkout">
                <button className="btn btn-primary">Get premium access.</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
