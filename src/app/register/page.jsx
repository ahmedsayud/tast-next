'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import axios from 'axios';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export default function Register() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    phoneNumber: '',
    countryCode: '+20',
  });
  const router = useRouter();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`${BASE_URL}/register`, formData);
      if (data.ok) {
        alert('Registration successful! Check your email for verification code.');
        router.push('/verify');
      } else {
        alert('Registration failed: ' + (data.message || 'Unknown error'));
      }
    } catch (error) {
      console.error('Error:', error.response?.data || error.message);
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5] flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md transform transition duration-300 hover:shadow-3xl">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Create Account</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Full Name"
            required
            className="w-full  px-4 py-2 border border-[#BE968E] text-black rounded-lg focus:outline-none focus:ring-1 focus:ring-[#BE968E] transition"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
            className="w-full px-4 py-2 border border-[#BE968E] text-black rounded-lg focus:outline-none focus:ring-1 focus:ring-[#BE968E] transition"
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            required
            className="w-full px-4 py-2 border border-[#BE968E] text-black rounded-lg focus:outline-none focus:ring-1 focus:ring-[#BE968E] transition"
          />
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="Phone Number"
            required
            className="w-full px-4 py-2 border border-[#BE968E] text-black rounded-lg focus:outline-none focus:ring-1 focus:ring-[#BE968E] transition"
          />
          <input
            type="text"
            name="countryCode"
            value={formData.countryCode}
            onChange={handleChange}
            placeholder="Country Code (e.g., +20)"
            required
            className="w-full px-4 py-2 border border-[#BE968E] text-black rounded-lg focus:outline-none focus:ring-1 focus:ring-[#BE968E] transition"
          />
          <button
            type="submit"
            className="w-full bg-[#BE968E] text-white py-2 rounded-lg hover:bg-[#A8766E] transition duration-300 transform hover:scale-105"
          >
            Register
          </button>
        </form>
        <p className="mt-4 text-center text-gray-600">
          Already have an account?{' '}
          <Link href="/" className="text-[#BE968E] hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
}