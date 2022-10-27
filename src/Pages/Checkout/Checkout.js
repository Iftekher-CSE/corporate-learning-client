import React from "react";
import { useLoaderData } from "react-router-dom";
import greenTic from "../../Assets/green-tick.gif";

const Checkout = () => {
  const courseDetails = useLoaderData();
  return (
    <div>
      <h3 className="text-center text-3xl font-bold m-8">
        You Have successfully Checkout with premium access...!!!
      </h3>
      <div className="flex w-full">
        <div className="grid h-40 flex-grow card bg-base-300 rounded-box place-items-center">
          <div>
            <h2 className="text-3xl font-bold">
              Course Name: {courseDetails.courseName}
            </h2>
            <h2 className="text-xl">
              Course Duration: {courseDetails.duration}
            </h2>
            <h2 className="text-xl">Payment Amount: {courseDetails.cost}</h2>
          </div>
        </div>
        <div className="divider divider-horizontal"></div>
        <div className="grid h-40 flex-grow card bg-base-300 rounded-box place-items-center">
          <img className="w-1/4" src={greenTic} alt="" />{" "}
        </div>
      </div>
    </div>
  );
};

export default Checkout;
