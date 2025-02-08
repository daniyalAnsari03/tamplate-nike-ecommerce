'use client';
import Image from "next/image";
import Header from "../components/header";
import Navbar from "../components/navBar";
import Link from "next/link";
import React, { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simple validation for email and password
    if (!email || !password) {
      setErrorMessage("All fields are required.");
      return;
    }

    // Email validation regex
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      setErrorMessage("Invalid email address format.");
      return;
    }

    setErrorMessage(""); // Clear error if validation passes
    // Add your logic for login submission here
  };

  return (
    <>
      <Header />
      <Navbar />
      <main className="flex items-center justify-center min-h-screen">
        <div className="w-full max-w-sm p-6 space-y-7 mb-52">
          <Image
            src="/nav-img/yes.png"
            alt="logo"
            width={60}
            height={60}
            loading="lazy"
            className="mx-auto"
          />
          {/* Title */}
          <div className="text-center text-2xl md:text-xl font-bold mb-4">
            <h1 className="text-2xl ">YOUR ACCOUNT </h1>
            <h1 className="text-2xl ">FOR EVERYTHING</h1>
            <h1 className="text-2xl ">NIKE</h1>
          </div>

          {/* Input Fields */}
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Email address"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {/* Error Message */}
            {errorMessage && (
              <p className="text-red-500 text-sm text-center">{errorMessage}</p>
            )}

            {/* Keep Me Signed In */}
            <div className="flex items-center justify-between text-sm text-gray-600">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="h-4 w-4" />
                <span>Keep me signed in</span>
              </label>
              <a href="#" className="text-gray-500 hover:underline">
                Forgotten your password?
              </a>
            </div>
          </div>

          {/* Agreement */}
          <p className="text-xs text-center text-gray-500 my-4">
            By logging in you agree to Nikes{" "}
            <a href="#" className="underline">
              Privacy Policy
            </a>{" "}
            and{" "}
            <a href="#" className="underline">
              Terms of Use
            </a>
            
          </p>

          {/* Sign-In Button */}
          <button
            className="w-full py-2 bg-black text-white font-semibold rounded-md hover:bg-gray-800"
            onClick={handleSubmit}
          >
            SIGN IN
          </button>

          {/* Not a Member */}
          <p className="text-center text-sm text-[#8D8D8D] mt-4">
            Not a Member?{" "}
            <Link href={"joinus"}>
              <span className="underline text-black">Join Us.</span>
            </Link>
          </p>
        </div>
      </main>
    </>
  );
}
