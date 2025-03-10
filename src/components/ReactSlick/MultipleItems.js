import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

//Components
import Image from "@/components/Image";

import "./MultipleItems.scss";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  if (props.icon) {
    return (
      <button
        onClick={onClick}
        className="multi-carousel__arrow multi-carousel__arrow--next hide-on-mobile-tablet"
      >
        {props.icon}
      </button>
    );
  } else {
    return (
      <div
        className={`${className} multi-carousel__arrow multi-carousel__arrow--next hide-on-mobile-tablet`}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  }
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  if (props.icon) {
    return (
      <button
        onClick={onClick}
        className="multi-carousel__arrow multi-carousel__arrow--prev hide-on-mobile-tablet"
      >
        {props.icon}
      </button>
    );
  } else {
    return (
      <div
        className={`${className} multi-carousel__arrow multi-carousel__arrow--prev hide-on-mobile-tablet`}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  }
}

function MultipleItems({
  className,
  data,
  Component,
  dots = false,
  speed = 2000,
  autoplaySpeed = 3000,
  slidesToShow = 3.2,
  slidesToScroll = 3.2,
  autoplay = true,
  nextArrow = "",
  prevArrow = "",
  ...props
}) {
  const settings = {
    dots: dots,
    infinite: data?.length > slidesToShow,
    autoplay: autoplay,
    speed: speed,
    autoplaySpeed: autoplaySpeed,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToShow,
    nextArrow: <SampleNextArrow icon={nextArrow} />,
    prevArrow: <SamplePrevArrow icon={prevArrow} />,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: data?.length > 2,
          dots: true,
        },
      },
      {
        breakpoint: 739,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  const renderCarouselContent = () => {
    if (!data) return null;
    return data?.map((item) => {
      switch (Component) {
        case "img":
        case "Image":
        case "hinhAnh":
          return (
            <Link key={item.eventID} to={`/event-detail/${item.eventID}`}>
              <Image className="multi-carousel__img" src={item.imageUrls} />
              <span className="carousel__event_name">{item.name}</span>
            </Link>
          );
        default:
          return (
            <Link key={item.eventID} to={`/event-detail/${item.eventID}`}>
              <span className="carousel__event_name">{item.name}</span>
            </Link>
          );
      }
    });
  };
  return (
    <Slider className={`${className}`} {...settings} {...props}>
      {renderCarouselContent()}
    </Slider>
  );
}

export default MultipleItems;
