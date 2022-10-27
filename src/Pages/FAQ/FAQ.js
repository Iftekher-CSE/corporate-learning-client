import React from "react";

const FAQ = () => {
  return (
    <div>
      <h2 className="text-center text-3xl font-bold m-4">
        Frequently Asked Questions (FAQ)
      </h2>

      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mx-8"
      >
        <div className="collapse-title text-xl font-medium">
          Is this course only for Corporate personnel?
        </div>
        <div className="collapse-content">
          <p>
            No. Any one can undertake all the courses.This courses is mainly
            focused on professional skill development, who are working in
            different organization. So, graduate and undergraduate students can
            undertake any courses.
          </p>
        </div>
      </div>
      <div
        tabIndex={1}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mx-8"
      >
        <div className="collapse-title text-xl font-medium">
          How ony can pay course fees?
        </div>
        <div className="collapse-content">
          <p>
            Course fees can be paid by using any mobile banking system (like:
            bKash, Nagod, Rocket etc.) and any credit or ATM card.
          </p>
        </div>
      </div>
      <div
        tabIndex={2}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mx-8"
      >
        <div className="collapse-title text-xl font-medium">
          Can any ony cant enrolled for off-line course?
        </div>
        <div className="collapse-content">
          <p>
            Currently all the courses is offered for online only. But within
            short time we will offer off-line course.
          </p>
        </div>
      </div>
      <div
        tabIndex={3}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mx-8"
      >
        <div className="collapse-title text-xl font-medium">
          Is there any discount or offer available?
        </div>
        <div className="collapse-content">
          <p>
            Course fees ary fixed for individual person. But for any corporate
            group we have special discounted price.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
