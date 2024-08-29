import React from "react";

import { services } from "../data/services.js";
import { Link } from "react-router-dom";

const SignUpFreelancer = ({ display }) => {
  return (
    <>
      <div className={`border-2 border-slate-400 p-6 rounded-xl ${display}`}>
        <div className="space-y-2 md:space-y-4">
          <div className="flex gap-2 md:gap-8 flex-col md:flex-row">
            <div>
              <p>First name</p>
              <input
                type="text"
                placeholder="First Name"
                className="input-style w-[20rem]"
              />
            </div>
            <div>
              <p>Last Name</p>
              <input
                type="text"
                placeholder="last Name"
                className="input-style w-[20rem]"
              />
            </div>
          </div>
          <div className="flex gap-2 md:gap-8 flex-col md:flex-row">
            <div>
              <p>Email</p>
              <input
                type="email"
                placeholder="Email"
                className="input-style w-[20rem]"
              />
            </div>
            <div>
              <p>Password</p>
              <input
                type="password"
                placeholder="First Name"
                className="input-style w-[20rem]"
              />
            </div>
          </div>
          <div className="flex gap-2 md:gap-8 flex-col md:flex-row">
            <div>
              <p>Address</p>
              <input
                type="text"
                placeholder="address"
                className="input-style w-[20rem]"
              />
            </div>
            <div>
              <p>Phone Number</p>
              <input
                type="tel"
                placeholder="Phone Number"
                className="input-style w-[20rem]"
              />
            </div>
          </div>
          <div className="flex gap-2 md:gap-8 flex-col md:flex-row">
            <div>
              <p>City</p>
              <input
                type="text"
                placeholder="City"
                className="input-style w-[20rem]"
              />
            </div>
            <div>
              <p>Country</p>
              <select className="input-style w-[20rem] bg-white">
                <option>Morocco</option>
              </select>
            </div>
          </div>
          <div>
            <label id="days" className="">
              Select Working Days:
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4  bg-gray-200 p-2">
              <label>
                <input type="checkbox" name="day" value="Monday/" /> Monday
              </label>
              <label>
                <input type="checkbox" name="day" value="Tuesday" /> Tuesday
              </label>
              <label>
                <input type="checkbox" name="day" value="Wednesday" /> Wednesday
              </label>
              <label>
                <input type="checkbox" name="day" value="Thursday" /> Thursday
              </label>
              <label>
                <input type="checkbox" name="day" value="Friday" /> Friday
              </label>
              <label>
                <input type="checkbox" name="day" value="Saturday" /> Saturday
              </label>
              <label>
                <input type="checkbox" name="day" value="Sunday" /> Sunday
              </label>
            </div>
          </div>
          <div className="flex gap-4 flex-col md:flex-row">
            <select
              id="cars"
              className="md:w-[10rem] h-[2.5rem] p-2 text-center"
            >
              <option value="">Services</option>
              {services.map((item, index) => (
                <option key={index} value={item + index}>
                  {item}
                </option>
              ))}
            </select>

            <div>
              <p className="mb-2">Description</p>
              <textarea
                placeholder="Tell Us who you're and what you can"
                className="w-[20rem] md:w-[30rem] h-[10rem] p-2 border border-slate-500"
              />
            </div>
          </div>
          <div className="flex justify-center">
            <button className="button-style">Sign up</button>
          </div>
          <div className="flex justify-center">
            <p>
              Already Have an account{" "}
              <span className="text-green-700 underline text-lg font-semibold">
                <Link to="/">Log In</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpFreelancer;
