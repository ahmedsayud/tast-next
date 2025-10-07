import React,{useState} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

import {
  faBagShopping,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
export default function ProductDetails() {
      const [selectedType, setSelectedType] = useState("Cotton");
      const [selectedSize, setSelectedSize] = useState("2XL");
      const [openDropdown, setOpenDropdown] = useState(null);
      const [selectedColor, setSelectedColor] = useState("Blue");
     const types = ["Cotton", "Wool", "Linen", "Polyester"];
  const sizes = ["S", "M", "L", "XL", "2XL", "3XL"];
  const images = [
    { id: 1, src: "/product/young-adult-man-wearing-hoodie-beanie 1.png", alt: "Product 1" },
    { id: 2, src: "/product/360_F_649571437_eo442p0EwFcdkUOoeocbdi7VKl4VWqRP-removebg-preview.png", alt: "Product 2" },
    { id: 3, src: "/product/Frame 1000005851.png", alt: "Product 3" },
    { id: 4, src: "/product/360_F_649571437_eo442p0EwFcdkUOoeocbdi7VKl4VWqRP-removebg-preview.png", alt: "Product 4" },
  ];
  const colors = [
    { name: "Red", value: "#e63946" },
    { name: "Blue", value: "#9bc4f8" },
    { name: "Beige", value: "#c9b997" },
    { name: "Gray", value: "#a8a8a8" },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  };
  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };
  const [quantity, setQuantity] = useState(1);
  const pricePerPiece = 300;

  const increase = () => setQuantity((prev) => prev + 1);
  const decrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div>
           {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto bg-[#F5F5F5] mt-4 py-2 px-5 sm:px-6 md:px-8 rounded-xl shadow-md">
        <p className="text-sm md:text-2xl mb-0">
          Home <FontAwesomeIcon icon={faChevronRight} /> Our Category <FontAwesomeIcon icon={faChevronRight} />{" "}
          <span className="text-[#8A8A8A]">Product Details</span>
        </p>
      </div>

      {/* Product Section */}
      <div className="max-w-6xl mx-auto mt-8 flex flex-col md:flex-row justify-between items-center sm:px-4 md:px-0">
        <div className="w-full md:w-1/2 lg:w-4/12">
          {/* Main Carousel */}
          <div className="relative w-full h-150 bg-gray-300 rounded-xl overflow-hidden">
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              className="w-full h-full object-cover"
            />
            {/* Buttons (Modified to dots as per your code) */}
            <div className="absolute top-4 w-full flex justify-center space-x-2">
              {images.map((image, index) => (
                <div
                  key={image.id}
                  className={`w-1/4 h-2 bg-gray-400 rounded-full cursor-pointer ${
                    index === currentIndex ? "bg-[#BE968E]" : ""
                  }`}
                  onClick={() => handleThumbnailClick(index)}
                ></div>
              ))}
            </div>
            {/* Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-[#BE968E] text-black w-10 h-10 rounded-full hover:bg-gray-600"
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#BE968E] text-black w-10 h-10 rounded-full hover:bg-gray-600"
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>

          {/* Thumbnails */}
          <div className="mt-4 flex justify-between space-x-4">
            {images.map((image, index) => (
              <div
                key={image.id}
                className={`w-20 h-20 bg-gray-200 rounded-xl cursor-pointer overflow-hidden ${
                  index === currentIndex ? "border-2 border-[#BE968E]" : ""
                }`}
                onClick={() => handleThumbnailClick(index)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
        {/* r */}
        <div className="w-full md:w-1/2 lg:w-7/12 px-2 sm:px-4 md:px-6 ">
          <div className="flex justify-between items-center">
            <div className="bg-white text-[#BE968E] px-3 py-1 rounded-full border border-[#BE968E]">
              T-shirt
            </div>
            <div className="flex justify-center items-center gap-2 bg-white px-3 py-1 ">
              <div className="bg-white  py-1 rounded-xl border border-[#BE968E] h-10 w-10 flex justify-center items-center">
                <FontAwesomeIcon
                  icon={faBagShopping}
                  size="lg"
                  className="text-[#BE968E]"
                />
              </div>{" "}
              <div className="bg-white  py-1 rounded-xl border border-[#BE968E] h-10 w-10 flex justify-center items-center">
                <FontAwesomeIcon
                  icon={faHeart}
                  size="lg"
                  className="text-[#BE968E]"
                />
              </div>{" "}
            </div>
          </div>
          <div className="mt-2 w-10/12">
            <h2 className="text-2xl font-bold mt-4 ">
              J.VER Man Shirts Solid Long Sleeve Stretch Wrinkle-Free With Blue
            </h2>
            <p className="text-3xl font-bold mt-2">
              $49.99{" "}
              <span className="text-gray-500 line-through font-normal text-2xl">
                $69.99
              </span>
            </p>
            <p className="text-sm"> This price is exclusive of taxes.</p>
            <p className="mt-2  font-medium">
              Lorem ipsum dolor sit , consectetuer adipiscing elit, sed diam
              nonummy Lorem ipsum dolor sit amet, diam nonummy
            </p>
            <div className="w-full h-0.5 bg-gray-200 my-3"></div>
            {/*  */}
            <div className="w-1/2 space-y-3 ">
              {/* Type Dropdown */}
              <div className="relative">
                <label className="block text-sm font-semibold mb-0">Type</label>
                <button
                  type="button"
                  onClick={() => toggleDropdown("type")}
                  className="w-full flex justify-between items-center border border-gray-300 rounded-2xl px-4 py-1 text-lg bg-white shadow-sm"
                >
                  <span>{selectedType}</span>
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className="text-gray-500 w-4 h-4"
                  />
                </button>

                {openDropdown === "type" && (
                  <ul className="absolute z-10 w-full bg-white border border-gray-200 rounded-xl shadow-md mt-2">
                    {types.map((type) => (
                      <li
                        key={type}
                        onClick={() => {
                          setSelectedType(type);
                          setOpenDropdown(null);
                        }}
                        className={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${
                          selectedType === type
                            ? "font-semibold text-blue-600"
                            : ""
                        }`}
                      >
                        {type}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Size Dropdown */}
              <div className="relative">
                <label className="block text-sm font-semibold mb-1">Size</label>
                <button
                  type="button"
                  onClick={() => toggleDropdown("size")}
                  className="w-full flex justify-between items-center border border-gray-300 rounded-2xl px-4 py-1 text-lg bg-white shadow-sm"
                >
                  <span>{selectedSize}</span>
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className="text-gray-500 w-4 h-4"
                  />
                </button>

                {openDropdown === "size" && (
                  <ul className="absolute z-10 w-full bg-white border border-gray-200 rounded-xl shadow-md mt-2">
                    {sizes.map((size) => (
                      <li
                        key={size}
                        onClick={() => {
                          setSelectedSize(size);
                          setOpenDropdown(null);
                        }}
                        className={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${
                          selectedSize === size
                            ? "font-semibold text-blue-600"
                            : ""
                        }`}
                      >
                        {size}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>{" "}
            <div className="w-full max-w-sm mt-2">
              {/* العنوان */}
              <h3 className="text-lg font-semibold mb-3">Colors</h3>

              {/* الألوان */}
              <div className="flex items-center gap-4">
                {colors.map((color) => (
                  <div key={color.name} className="flex flex-col items-center">
                    <div
                      onClick={() => setSelectedColor(color.name)}
                      className={`w-10 h-10 flex items-center justify-center rounded-full border-2 transition-all cursor-pointer ${
                        selectedColor === color.name
                          ? "border-black scale-105"
                          : "border-white"
                      }`}
                    >
                      <div
                        className="w-9 h-9 rounded-full border border-gray-100 border-8"
                        style={{ backgroundColor: color.value }}
                      ></div>
                    </div>

                    <span
                      className={`text-sm mt-1 ${
                        selectedColor === color.name
                          ? "text-black font-medium"
                          : "text-gray-500"
                      }`}
                    >
                      {color.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            {/* + - */}
            <div className="mt-2">
              {/* العنوان */}
              <div className="flex items-baseline gap-2 mb-3">
                <h3 className="text-lg font-semibold">Quantity</h3>
                <span className="text-gray-500 text-sm">
                  (${pricePerPiece}.00 for Piece)
                </span>
              </div>
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center justify-between w-1/2 max-w-sm">
                  <div className="flex items-center gap-2 rounded-2xl p-2 bg-gray-200">
                    {/* زرار النقص */}
                    <button
                      onClick={decrease}
                      className="w-8 h-8 flex items-center justify-center rounded-xl  bg-white hover:bg-gray-200 transition"
                    >
                      <FontAwesomeIcon
                        icon={faMinus}
                        className="text-gray-700"
                      />
                    </button>

                    {/* العدد */}
                    <span className="w-10 text-center font-semibold text-lg">
                      {quantity.toString().padStart(2, "0")}
                    </span>

                    {/* زرار الزيادة */}
                    <button
                      onClick={increase}
                      className="w-8 h-8 flex items-center justify-center rounded-xl  bg-white hover:bg-gray-200 transition"
                    >
                      <FontAwesomeIcon
                        icon={faPlus}
                        className="text-gray-700"
                      />
                    </button>
                  </div>

                  {/* السعر الإجمالي */}
                  <div className="text-lg font-semibold">
                    ${(quantity * pricePerPiece).toFixed(2)}
                  </div>
                </div>

                <button className="bg-[#BE968E] text-white px-10 py-3 rounded-xl shadow-md ">
                  Add To Cart <FontAwesomeIcon icon={faBagShopping} size="lg" />
                </button>
              </div>
              {/* التحكم في العدد */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
