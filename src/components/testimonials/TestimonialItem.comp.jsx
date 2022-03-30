import React from "react";

const TestimonialItem = ({ imageUrl, name, review }) => {
  return (
    <div className="testimonial_item">
      <div className="testimonial_item__avatar">
        <img src={imageUrl} alt="" />
      </div>
      <h5 className="testimonial_item__name">{name}</h5>
      <small className="testimonial_item__review">{review}</small>
    </div>
  );
};

export default TestimonialItem;
