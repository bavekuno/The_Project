"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function WelcomePage() {
  const [housePost, setHousePost] = useState([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/data/hero.json");
        const data = await response.json();
        setHousePost(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    if (housePost.length === 0) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % housePost.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [housePost]);

  if (housePost.length === 0) {
    return (
      <div className="h-screen flex justify-center items-center">
        Loading...
      </div>
    );
  }

  return (
    <>
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50  bg-blue-100 px-8 py-5">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <h1 className="text-black text-3xl font-black">
            Extra
          </h1>

          <Link
            href="/login"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-all"
          >
            Login
          </Link>
        </div>
      </nav>

      {/* HERO */}
      <section className="min-h-screen bg-blue-100 flex items-center">
        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div>

            <h1 className="text-5xl md:text-7xl font-black text-black leading-tight">
              Find Your
              <br />
              Dream Place
            </h1>

            <p className="text-gray-600 mt-6 text-lg max-w-lg">
              Buying a home is a life-changing experience.
              Discover the perfect property for your family.
            </p>

            {/* Buttons */}
            <div className="flex gap-3 mt-10">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg">
                Buy
              </button>

              <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg">
                Sale
              </button>

              <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg">
                Rent
              </button>
            </div>

            {/* Search Skeleton */}
            <div className="bg-white shadow-xl rounded-xl p-5 mt-10 flex flex-wrap gap-6">

              <div>
                <h3 className="font-semibold">
                  Location
                </h3>

                <p className="text-gray-400">
                  Select City
                </p>
              </div>

              <div>
                <h3 className="font-semibold">
                  Property Type
                </h3>

                <p className="text-gray-400">
                  All Types
                </p>
              </div>

              <div>
                <h3 className="font-semibold">
                  Price
                </h3>

                <p className="text-gray-400">
                  Select Range
                </p>
              </div>

              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">
                Search
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div>

            <div className="overflow-hidden rounded-2xl shadow-2xl">

              <img
                key={current}
                src={housePost[current]?.image}
                alt={housePost[current]?.location}
                className="w-full h-[500px] object-cover"
              />

            </div>

            {/* Slider Dots */}
            <div className="flex justify-center gap-3 mt-6">
              {housePost.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-4 h-4 rounded-full transition-all ${
                    current === index
                      ? "bg-blue-600 scale-125"
                      : "bg-gray-300"
                  }`}
                />
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* section to emphases joining our team why may use need to buy and sell to us or use our website  */}
      <section>
        <div className="max-w-7xl mx-auto px-8 py-20 text-center">
          <h2 className="text-4xl font-bold text-white">
            Join Our Team
          </h2>

        </div>
      </section>
    </>
  );
}