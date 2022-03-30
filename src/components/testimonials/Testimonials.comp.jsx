import React from "react";

import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import TestimonialItem from "./TestimonialItem.comp";
import "./testimonials.styles.css";

const Testimonials = () => {
  const items = [
    {
      imageUrl: "/assets/avatar1.jpg",
      name: "Tina Snow",
      review: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut nesciunt ea, odio id dolore
        ipsum consectetur maxime, qui aspernatur exercitationem obcaecati cumque porro? Sunt
        placeat, nostrum eum et laudantium illo.`,
    },
    {
      imageUrl: "/assets/avatar2.jpg",
      name: "Shatta Wale",
      review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam fugiat pariatur quos
        asperiores ducimus earum laudantium, eius quis ipsa autem, quae nisi labore ab obcaecati
        mollitia! Ullam sed obcaecati dolorem.`,
    },
    {
      imageUrl: "/assets/avatar3.jpg",
      name: "Kuame Despite",
      review: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit perferendis cum dolores
        ratione assumenda excepturi fugit! Doloremque, illo praesentium. Architecto distinctio nihil
        velit sint numquam expedita. In porro eum aspernatur.`,
    },
    {
      imageUrl: "/assets/avatar4.jpg",
      name: "Amal Mahmoud",
      review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, commodi optio maiores
        nemo rem facere mollitia quia voluptates placeat, pariatur sit quis sequi hic impedit nulla.
        Provident nulla porro consectetur.`,
    },
  ];

  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <div className="container testimonials__container">
        <Swiper
          modules={[Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
          {items.map((item) => (
            <SwiperSlide key={item.name}>
              <TestimonialItem {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
