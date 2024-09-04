import React, { useState, useRef } from "react";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsArrowLeftCircleFill } from "react-icons/bs";
import { BsArrowRightCircleFill } from "react-icons/bs";

function GalleryWidget() {
  const [images, setImages] = useState([img1, img2, img3]);
  const sliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024, // For screens smaller than 1024px
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600, // For screens smaller than 600px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    const newImages = files.map((file) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });
    });

    Promise.all(newImages)
      .then((imageUrls) => {
        setImages((prevImages) => [...prevImages, ...imageUrls]);
      })
      .catch((error) => {
        console.error("Error reading file", error);
      });
  };

  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev(); // Navigate to previous slide
    }
  };

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext(); // Navigate to next slide
    }
  };

  const btnStyle = {
    borderRadius: "75px",
    background: "#3A3C42",
    boxShadow: "26px 26px 52px #17181a, -5px -5px 23px #5d606a",
  };

  return (
    <div className="w-full bg-zinc-700 rounded-xl p-6 shadow-2xl mt-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-white bg-black px-6 py-3 rounded-xl">Gallery</h2>
        <label className="flex items-center space-x-2 cursor-pointer">
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />
          <span className="px-5 py-3 text-xs text-white" style={btnStyle}>
            + ADD IMAGE
          </span>
        </label>
        <div className="flex space-x-2">
          <button
            onClick={handlePrev}
            className="text-black text-4xl shadow-black shadow-lg rounded-full"
          >
            <BsArrowLeftCircleFill />
          </button>

          <button
            onClick={handleNext}
            className="text-black text-4xl shadow-black shadow-lg rounded-full"
          >
            <BsArrowRightCircleFill />
          </button>
        </div>
      </div>
      <Slider ref={sliderRef} {...settings}>
        {images.map((image, index) => (
          <div key={index} className="px-2">
            <img
              src={image}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-48 rounded-lg object-cover"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default GalleryWidget;
