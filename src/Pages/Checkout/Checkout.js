import React from "react";
import greenTic from "../../Assets/green-tick.gif";

const Checkout = () => {
  return (
    <div>
      <h3 className="text-center text-3xl font-bold m-8">
        You Have successfully Checkout with premium access...!!!
      </h3>
      <div className="flex justify-center">
        <img className="w-1/4" src={greenTic} alt="" />
      </div>
    </div>
  );
};

export default Checkout;
