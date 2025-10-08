"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faShoppingBag,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

export default function SimilarItems() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4; // عدد المنتجات المعروضة دايمًا
  const totalProducts = 10;

  const products = [
    {
      id: 1,
      name: `J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free With Yellow`,
      price: "AED 450",
      discount: 20,
      image: "/Product/61GoUmCw1PL._AC_SX679_-removebg-preview.png",
    },
    {
      id: 2,
      name: `J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free With Yello ..`,
      price: "AED 300",
      discount: null,
      image: "/Product/61rjMSPiDvL._AC_SY879_-removebg-preview 1.png",
    },
    {
      id: 3,
      name: `J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free With Yello ..`,
      price: "AED 600",
      discount: 15,
      image: "/Product/81jorIOyDhL._AC_SX679_-removebg-preview.png",
    },
    {
      id: 4,
      name: `J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free With Yello ..`,
      price: "AED 1200",
      discount: null,
      image: "/Product/61rjMSPiDvL._AC_SY879_-removebg-preview 1.png",
    },
    {
      id: 5,
      name: `J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free With Yello ..`,
      price: "AED 750",
      discount: 10,
      image: "/Product/61rjMSPiDvL._AC_SY879_-removebg-preview 1.png",
    },
    {
      id: 6,
      name: `J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free With Yello ..`,
      price: "AED 150",
      discount: null,
      image: "/Product/81jorIOyDhL._AC_SX679_-removebg-preview.png",
    },
    {
      id: 7,
      name: `J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free With Yello ..`,
      price: "AED 900",
      discount: 25,
      image: "/Product/61GoUmCw1PL._AC_SX679_-removebg-preview.png",
    },
    {
      id: 8,
      name: `J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free With Yello ..`,
      price: "AED 400",
      discount: null,
      image: "/Product/61rjMSPiDvL._AC_SY879_-removebg-preview 1.png",
    },
    {
      id: 9,
      name: `J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free With Yello ..`,
      price: "AED 200",
      discount: 30,
      image: "/Product/81jorIOyDhL._AC_SX679_-removebg-preview.png",
    },
    {
      id: 10,
      name: `J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free With Yello ..`,
      price: "AED 550",
      discount: null,
      image: "/Product/61GoUmCw1PL._AC_SX679_-removebg-preview.png",
    },
  ];

  // ✅ دالة التنقل للأمام
  const nextPage = () => {
    if (currentIndex + itemsPerPage >= totalProducts) {
      setCurrentIndex(0); // لما يوصل للنهاية يرجع للبداية
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // ✅ دالة التنقل للخلف
  const prevPage = () => {
    if (currentIndex === 0) {
      setCurrentIndex(totalProducts - itemsPerPage); // لما يكون في البداية يرجع للآخر
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // ✅ المنتجات المعروضة
  const displayedProducts = products.slice(
    currentIndex,
    currentIndex + itemsPerPage
  );

  // ✅ لو وصلنا للنهاية، نكمّل من الأول (عشان الدائرة تكون كاملة)
  const visibleProducts =
    displayedProducts.length < itemsPerPage
      ? [
          ...displayedProducts,
          ...products.slice(0, itemsPerPage - displayedProducts.length),
        ]
      : displayedProducts;

  return (
    <div className="max-w-6xl mx-auto mt-8 p-4">
      <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
        Similar Items
        <span className="ml-2 h-px flex-1 bg-gray-300"></span>
      </h2>

      <div className="relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {visibleProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
            >
              <div className="relative">
                <div className="w-full h-70 overflow-hidden rounded-t-lg flex items-center justify-center ">
                  <img
                    src={product.image}
                    alt={product.name}
                    className=" object-cover"
                  />
                </div>{" "}
                <button className="absolute top-2 right-2 p-1 rounded-lg border border-[#BE968E] hover:bg-opacity-100 transition">
                  <FontAwesomeIcon
                    icon={faHeart}
                    className="text-[#BE968E] text-sm"
                  />
                </button>
                <button className="absolute top-2 right-10 p-1 rounded-lg border border-[#BE968E] hover:bg-opacity-100 transition">
                  <FontAwesomeIcon
                    icon={faShoppingBag}
                    className="text-[#BE968E] text-sm"
                  />
                </button>
                {product.discount && (
                  <div className="absolute top-2 left-2 text-[#BE968E] px-2 py-1 rounded text-xs font-bold border border-[#BE968E]">
                    {product.discount}% OFF
                  </div>
                )}
              </div>
              <div className="p-3">
                <div className="flex justify-between items-center mb-2">
                  <p className="text-sm text-gray-700">Dresses</p>
                  <p>
                    <span className="text-[#BE968E] text-xl">★</span> 4.5{" "}
                    <span className="text-gray-500 text-sm">(2910)</span>
                  </p>
                </div>
                <h3 className="text-sm font-medium text-gray-800 mb-1 line-clamp-2">
                  {product.name}
                </h3>
                <p className="text-lg font-bold text-gray-900">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-4">
          <button
            onClick={prevPage}
            className="mr-2 bg-[#BE968E] text-white w-10 h-10 rounded-full hover:bg-[#A8766E] transition"
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button
            onClick={nextPage}
            className="bg-[#BE968E] text-white w-10 h-10 rounded-full hover:bg-[#A8766E] transition"
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>
    </div>
  );
}
