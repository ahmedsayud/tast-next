"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/app/_components/Navbar";
import ProductDetails from "@/app/_components/ProductDetails";
import RatingReviews from "../_components/RatingReviews";
import Comment from "../_components/Comment";
import SimilarItems from "../_components/SimilarItems";
import Footer from "../_components/Footer";
export default function Products() {
 
  const router = useRouter();
const [token, setToken] = useState<string | null>(null);
  const [showPopup, setShowPopup] = useState(false);
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    const localToken =
      typeof window !== "undefined" ? localStorage.getItem("token") : null;
    setToken(localToken);
    setIsLoading(false); 

    if (!localToken) {
      setShowPopup(true);
    }
  }, []);
  const handleClosePopup = () => {
    setShowPopup(false);
    router.push("/");
  };

  if (isLoading) return null;

  if (!token && showPopup) {
    return (
      <div className="min-h-screen bg-gray-900 bg-opacity-50 flex items-center justify-center fixed inset-0 z-50">
        <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">تنبيه</h2>
          <p className="text-gray-600 mb-4">سجل الدخول أولاً</p>
          <button
            onClick={handleClosePopup}
            className="bg-[#BE968E] text-white py-2 px-4 rounded-lg hover:bg-[#A8766E] transition"
          >
            موافق
          </button>
        </div>
      </div>
    );
  }

  if (!token) return null; 

  return (
    <div className="min-h-screen bg-white ">
      <Navbar />
      <div
        className="flex items-center justify-center w-full h-64 bg-cover bg-center relative overflow-hidden shadow-md "
        style={{ backgroundImage: "url('/xx.png')" }}
      >
        <h1 className="hidden md:flex text-4xl font-bold  absolute inset-0 flex items-center justify-center">
          Product Details
        </h1>
        <h1 className="md:hidden flex text-black text-xl font-semibold">
          T-Shirt
        </h1>
      </div>
      <div className="p-4">
        <ProductDetails />
      </div>
      <div className=" max-w-6xl mx-auto flex justify-center items-center">
        <div className="flex-grow  ">
          <img src="/Layer_2.png" alt="Background" className="w-20 h-auto  " />
        </div>
      </div>{" "}
      <div className="m-auto w-full max-w-6xl px-4">
        <RatingReviews />
        {[1, 2, 3, 4, 5].map((star) => (
          <Comment key={star} />
        ))}
        <div className="flex  justify-center"> <button className="bg-[#F5F5F5] text-[#BE968E]  px-8 py-2 rounded-md transition mb-6 ">
          Add Comment
        </button></div>

       
      </div>
     < SimilarItems />
     <Footer />
    </div>
  );
}
