'use client'
import Image from "next/image";
import Link from "next/link";
import Header from "../components/header";
import Navbar from "../components/navBar";
import React, { useState } from "react";

export default function JoinUs() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [country, setCountry] = useState("");
  const [gender, setGender] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simple validation for all fields
    if (!email || !password || !firstName || !lastName || !dob || !country || !gender) {
      setErrorMessage("All fields are required.");
      return;
    }

    // Email validation regex
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      setErrorMessage("Invalid email address format.");
      return;
    }

    // Password validation (min 8 chars, 1 letter, 1 number, 1 special char)
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordPattern.test(password)) {
      setErrorMessage("Password must be at least 8 characters long, including 1 letter, 1 number, and 1 special character.");
      return;
    }

    // DOB validation (simple check for date format, can be improved)
    if (!dob.match(/^\d{4}-\d{2}-\d{2}$/)) {
      setErrorMessage("Invalid Date of Birth format. Please use YYYY-MM-DD.");
      return;
    }

    setErrorMessage(""); // Clear error if validation passes
    // Add your logic for form submission here
  };

  return (
    <>
      <Header />
      <Navbar />
      <main className="flex justify-center items-center min-h-screen p-4">
        <div className="w-full max-w-md p-6 ">
          {/* Logo */}
          <div className="text-center mb-8">
            <Image
              src="/nav-img/yes.png"
              alt="logo"
              width={60}
              height={60}
              loading="lazy"
              className="mx-auto"
            />
            <h2 className="mt-4 text-2xl font-bold">BECOME A NIKE MEMBER</h2>
            <p className="mt-10 text-base text-[#8D8D8D]">
              Create your Nike Member profile and get first access to the very best of Nike products, inspiration, and community.
            </p>
          </div>

          {/* Input Section */}
          <div className="space-y-4">
            <input
              type="email"
              placeholder="Email address"
              className="w-full p-2 border border-[#E5E5E5] rounded placeholder:px-4 focus:ring-2 focus:ring-gray-400 focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-2 border border-[#E5E5E5] rounded placeholder:px-4 focus:ring-2 focus:ring-gray-400 focus:outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="text"
              placeholder="First Name"
              className="w-full p-2 border border-[#E5E5E5] rounded placeholder:px-4 focus:ring-2 focus:ring-gray-400 focus:outline-none"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-full p-2 border border-[#E5E5E5] rounded placeholder:px-4 focus:ring-2 focus:ring-gray-400 focus:outline-none"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Date of Birth"
              className="w-full p-2 border border-[#E5E5E5] rounded placeholder:px-4 focus:ring-2 focus:ring-gray-400 focus:outline-none"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />

            {/* Error Message */}
            {errorMessage && (
              <p className="text-red-500 text-sm text-center">{errorMessage}</p>
            )}

            <p className="text-sm text-[#8D8D8D] text-center">
              Get a Nike Member Reward every year on your Birthday.
            </p>

            <input
              type="text"
              placeholder="Country"
              className="w-full p-2 border border-[#E5E5E5] rounded placeholder:px-4 focus:ring-2 focus:ring-gray-400 focus:outline-none"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />

            
{/* Gender Inputs */}
<div className="flex space-x-4 mt-4">
<input
  type=""
  id="male"
  name="gender"
  value="Male"
  className="w-full p-2 border text-[#8D8D8D] border-[#E5E5E5] rounded text-center cursor-pointer focus:ring-2 focus:ring-gray-400 focus:outline-none"
  onChange={() => setGender("Male")}
/>

<input
  type=""
  id="female"
  name="gender"
  value="Female"
  className="w-full p-2 border text-[#8D8D8D] border-[#E5E5E5] rounded text-center cursor-pointer focus:ring-2 focus:ring-gray-400 focus:outline-none"
  onChange={() => setGender("Female")}
/>
</div>

            {/* Checkbox */}
            <div className="flex items-center space-x-4 mt-4">
              <input
                type="checkbox"
                id="email"
                className="h-7 w-7 text-[#8D8D8D]"
              />
              <label htmlFor="email" className="text-xs text-[#8D8D8D]">
                Sign up for emails to get updates from Nike on products, offers, and your Member benefits
              </label>
            </div>

            {/* Privacy Policy */}
            <div className="text-center text-sm text-[#8D8D8D] mt-4">
              By creating an account, you agree to Nikes{" "}
              <span className="underline">Privacy Policy</span> and{" "}
              <span className="underline">Terms of Use.</span>
            </div>

            {/* Join Button */}
            <div className="mt-4">
              <button
                className="w-full p-2 bg-black text-white rounded hover:bg-gray-800"
                onClick={handleSubmit}
              >
                JOIN US
              </button>
            </div>

            {/* Already Member */}
            <div className="text-center text-sm text-[#8D8D8D] mt-4">
              Already a Member?{" "}
              <Link href={'/login'}>
                <span className="underline cursor-pointer text-black">Sign In.</span>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
