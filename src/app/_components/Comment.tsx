import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Comment() {
  const review = {
    name: "Alex Dawn",
    rating: 4, 
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    date: "4 months ago",
  };

  return (
    <div className="border-t-2 border-gray-200 pt-6 max-w-6xl mx-auto my-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-3">
     
        <div>
          <span className="block font-semibold text-gray-800 text-base">
            {review.name}
          </span>
          <div className="flex mt-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <FontAwesomeIcon
                key={star}
                icon={star <= review.rating ? faStarSolid : faStarRegular}
                className="text-[#BE968E] text-base mr-1"
              />
            ))}
          </div>
        </div>

        
        <span className="text-sm text-gray-500 mt-2 sm:mt-0">
          {review.date}
        </span>
      </div>

     
      <p className="text-gray-600 text-sm leading-relaxed">
        {review.text}
      </p>
    </div>
  );
}
