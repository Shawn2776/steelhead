"use client";

import Image from "next/image";
import { useState } from "react";
import { FaRegCheckCircle } from "react-icons/fa";

export default function SprinklerHeroSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, phone, service, message });
  };

  return (
    <div
      className="relative w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/logo/bg.jpg')" }}
    >
      <div className="bg-black/70">
        <div className="flex justify-between sm:pt-20 sm:pb-10 flex-col sm:flex-row">
          {/* LEFT */}
          <div className="w-full px-4 pt-10 sm:w-2/3 max-w-4xl sm:pl-40 mx-auto">
            <h1 className="hidden sm:block sm:text-5xl font-bold text-4xl">
              POWERING YOUR WORLD
              <br />
              WITH PRECISION
            </h1>
            <h1 className="sm:hidden sm:text-5xl font-bold text-4xl">
              POWERING YOUR WORLD WITH PRECISION
            </h1>
            <p className="mt-5 sm:text-2xl font-light text-lg">
              Our expert electricians tackle every project with innovation and
              expertise. From simple repairs to complex installations,
              we&nbsp;re the trusted partner you need.
            </p>
            <button className="hidden sm:flex btn bg-orange-500 border-none my-10 text-xl p-8 shadow-xl">
              OUR SERVICES
            </button>
            <button className="sm:hidden btn bg-orange-500 border-none my-8">
              OUR SERVICES
            </button>

            {/* DESKTOP */}
            <ul className="hidden sm:flex flex-col gap-10">
              <li className="">
                <p className="flex items-center gap-4 text-2xl">
                  <span className="bg-orange-500 rounded-full">
                    <FaRegCheckCircle />
                  </span>
                  <span>Trained Staff</span>
                </p>

                <p className="ml-12 font-light text-md">
                  We understand what complete customer satisfaction means.
                </p>
              </li>
              <li className="">
                <p className="flex items-center gap-4 text-2xl">
                  <span className="bg-orange-500 rounded-full">
                    <FaRegCheckCircle />
                  </span>
                  <span>Quality Work</span>
                </p>

                <p className="ml-12 font-light text-md">
                  We take a great deal of pride in the quality of our work.
                </p>
              </li>
              <li className="">
                <p className="flex items-center gap-4 text-2xl">
                  <span className="bg-orange-500 rounded-full">
                    <FaRegCheckCircle />
                  </span>
                  <span>Military and Senior Discount</span>
                </p>

                <p className="ml-12 font-light text-md">
                  5% discount for all military and senior citizens.
                </p>
              </li>
            </ul>

            {/* Mobile */}
            <ul className="sm:hidden flex-col flex gap-2 pb-4">
              <li className="">
                <p className="flex items-center gap-4 text-lg">
                  <span className="bg-orange-500 rounded-full">
                    <FaRegCheckCircle />
                  </span>
                  <span>Trained Staff</span>
                </p>

                <p className="ml-12 font-light text-sm">
                  We understand what complete customer satisfaction means.
                </p>
              </li>
              <li className="">
                <p className="flex items-center gap-4 text-lg">
                  <span className="bg-orange-500 rounded-full">
                    <FaRegCheckCircle />
                  </span>
                  <span>Quality Work</span>
                </p>

                <p className="ml-12 font-light text-sm">
                  We take a great deal of pride in the quality of our work.
                </p>
              </li>
              <li className="">
                <p className="flex items-center gap-4 text-lg">
                  <span className="bg-orange-500 rounded-full">
                    <FaRegCheckCircle />
                  </span>
                  <span>Military and Senior Discount</span>
                </p>

                <p className="ml-12 font-light text-sm">
                  5% discount for all military and senior citizens.
                </p>
              </li>
            </ul>
          </div>

          {/* RIGHT */}

          {/* DESKTOP */}
          <div className="w-1/3 hidden sm:block">
            <div className="flex flex-col max-w-sm bg-blue-900 p-2">
              <h2 className="text-center text-2xl mb-10">REQUEST A FREE BID</h2>
              <form
                onSubmit={handleSubmit}
                className="flex flex-col w-full gap-5"
              >
                <input
                  className="input w-full rounded-none h-12 border-none"
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  className="input w-full rounded-none h-12 border-none"
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  className="input w-full rounded-none h-12 border-none"
                  type="tel"
                  placeholder="Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <select
                  className="select w-full rounded-none h-12 border-none"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                >
                  <option value="">Our Services</option>
                  <option value="sprinkler">Sprinkler Installation</option>
                  <option value="landscaping">Landscaping</option>
                  <option value="maintenance">Maintenance</option>
                </select>
                <textarea
                  className="textarea w-full rounded-none h-12 border-none"
                  placeholder="Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-lg"
                >
                  GET A BID
                </button>
              </form>
            </div>
          </div>

          {/* MOBILE */}
          <div className="sm:hidden w-full">
            <div className="flex flex-col max-w-sm bg-blue-900 p-2 mx-auto">
              <h2 className="text-center text-2xl mb-10">REQUEST A FREE BID</h2>
              <form
                onSubmit={handleSubmit}
                className="flex flex-col w-full gap-5"
              >
                <input
                  className="input w-full rounded-none h-12 border-none"
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  className="input w-full rounded-none h-12 border-none"
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  className="input w-full rounded-none h-12 border-none"
                  type="tel"
                  placeholder="Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <select
                  className="select w-full rounded-none h-12 border-none"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                >
                  <option value="">Our Services</option>
                  <option value="sprinkler">Sprinkler Installation</option>
                  <option value="landscaping">Landscaping</option>
                  <option value="maintenance">Maintenance</option>
                </select>
                <textarea
                  className="textarea w-full rounded-none h-12 border-none"
                  placeholder="Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-lg"
                >
                  GET A BID
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
