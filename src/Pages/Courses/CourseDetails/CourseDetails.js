import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const CourseDetails = () => {
  const courseDetails = useLoaderData();
  return (
    <div>
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
              <Link>
                <button className="btn btn-primary">Button</button>
              </Link>
            </div>
            <div>
              <Link>
                <button className="btn btn-primary">Button</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
