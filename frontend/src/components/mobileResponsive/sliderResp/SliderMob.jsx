import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

function SliderMob() {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 767px)" });

  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "50px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const images = [
    "images/slider.svg",
    "images/slider.svg",
    "images/slider.svg",
  ];

  return (
    <>
      {isSmallScreen && (
        <div className="container max-auto">
          <div className="mb-8 lg:mb-20">
            <h1 className="media text-[60px] sm:text-[80px] lg:text-[60px] text-[#014F59] leading-[60px] sm:leading-[70px] lg:leading-[50px] sing-up-title xl:max-w-[686px] text-center lg:text-left">
              Nex-gen design ecosystem
            </h1>
          </div>
          <div className="mb-6">
            <Slider {...settings}>
              {images?.map((image, index) => (
                <div className="px-3" key={index}>
                  <img src={image} alt="" />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      )}
      <div className="bg-[#014F59] lg:hidden block  py-6 mx-8 mt-8 rounded-full">
        <Link to="/">
          <button className="text-[24px] text-[#E1FF26] leading-[14.13px] font-normal w-full">
            Start your Journey
          </button>
        </Link>
      </div>
    </>
  );
}

export default SliderMob;
