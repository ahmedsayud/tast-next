'use client';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope, faStar as faStarO } from '@fortawesome/free-regular-svg-icons';

export default function RatingReviews() {
  const rating = 4.5;
  const ratings = [
    { stars: 5, percentage: 67, count: 2010 },
    { stars: 4, percentage: 15, count: 450 },
    { stars: 3, percentage: 6, count: 180 },
    { stars: 2, percentage: 3, count: 90 },
    { stars: 1, percentage: 9, count: 270 },
  ];

  return (
    <div className="max-w-6xl mx-auto mt-10 px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center md:text-left">
        Rating & Reviews
      </h2>

      {/* Rating Section */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-8 md:gap-12 w-full p-4 md:p-6">
        {/* Left Section - Main Rating */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-1/3">
          <p className="text-7xl md:text-9xl font-bold leading-none">
            4.5
            <span className="text-lg md:text-xl font-semibold text-gray-400"> /5</span>
          </p>
          <div className="flex justify-center md:justify-start mt-3">
            {[1, 2, 3, 4, 5].map((star) => (
              <FontAwesomeIcon
                key={star}
                icon={star <= rating ? faStar : faStarO}
                className="text-[#BE968E] text-2xl mx-1"
              />
            ))}
          </div>
        </div>

        {/* Middle Section - Rating Bars */}
        <div className="flex flex-col justify-center items-center md:items-start w-full md:w-1/3">
          {ratings.map((ratingItem, index) => (
            <div key={index} className="w-full max-w-xs sm:max-w-sm mb-3">
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm text-gray-600 font-medium">{ratingItem.stars} Stars</span>
                <span className="text-sm text-gray-600">{ratingItem.percentage}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-[#BE968E] h-2 rounded-full"
                  style={{ width: `${ratingItem.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Section - Total Reviews */}
        <div className="flex flex-col justify-center items-center text-center w-full md:w-1/3">
          <p className="text-gray-600 text-sm md:text-base">Total Reviews</p>
          <p className="text-5xl md:text-7xl font-bold my-2">3.0K</p>
          <button className="bg-[#BE968E] hover:bg-[#a8766e] px-6 md:px-8 py-2 rounded-md text-white transition text-sm md:text-base flex items-center gap-2">
            Add Comment
            <FontAwesomeIcon icon={faEnvelope} />
          </button>
        </div>
      </div>
    </div>
  );
}
