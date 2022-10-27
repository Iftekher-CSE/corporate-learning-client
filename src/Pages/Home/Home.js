import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import digitalMarketing from "../../Assets/Digital-Marketing-Course.png";
import Marketing from "../../Assets/Marketing-Courses.webp";
import powerBI from "../../Assets/ms-powerBI.jpg";
import msPP from "../../Assets/ms-pp.jpeg";

const Home = () => {
  const allCourses = useLoaderData();

  return (
    <div>
      {/* carousel */}
      <div className="carousel w-11/12 my-8 mx-auto">
        <div id="slide1" className="carousel-item relative w-full">
          <img className="w-full max-h-96 rounded-xl" src={digitalMarketing} />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img className="w-full max-h-96 rounded-xl" src={Marketing} />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img className="w-full max-h-96 rounded-xl" src={powerBI} />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img className="w-full max-h-96 rounded-xl" src={msPP} />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>

      {/* all courses preview */}
      <h3 className="text-3xl text-center bg-orange-300 mx-9 rounded-xl">
        All Our Courses at a Glance
      </h3>
      <div className="grid grid-cols-3 gap-4 p-6 mx-8">
        {allCourses.map(course => (
          <div className="card w-96 bg-base-100 shadow-xl image-full">
            <figure>
              <img src={course.imgURL} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{course.courseName}</h2>
              <p>Duration: {course.duration}</p>
              <p>Price: {course.cost}</p>
              <div className="card-actions justify-end">
                <Link to={`/courses/${course.id}`}>
                  <button
                    to={`/courses/${course.id}`}
                    className="btn btn-primary"
                  >
                    Go to Details
                  </button>{" "}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
