import React from "react";
import NavComponent from "../../components/layouts/NavComponents/NavComponent";
import "./ServicesView.css";
import { CarouselDemo } from "@/components/features/carousel-demo";

export const ServicesView = () => {
  return (
    <>
      <NavComponent></NavComponent>
      <div className="area-services">
        <div className="area-carousel">
          <div className="carousel-cards">
          <CarouselDemo></CarouselDemo>
          </div>
        </div>
      </div>
    </>
  );
};
export default ServicesView;
