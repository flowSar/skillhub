import { useEffect, useState } from "react";
import { LoadLogInState } from "../utils/HTTPRequest";
import { Link } from "react-router-dom";

const Card = ({
  data,
  onClick,
  isLogged,
}) => {
  return (
    <>
      <div
        className="group relative bg-gray-50 mx-4 sm:mx-0 p-2 mt-2 mb-2 cursor-pointer border border-slate-900 rounded-lg shadow-md shadow-black"
        onClick={onClick}
      >
        <img src={data.thumbnail_img} className="lg:h-[10rem] md:h-[15rem] w-full object-full"/>
        <div className=" flex items-center space-x-2 mt-1">
          <img
            src={data.profile_img}
            className="bg-black rounded-[50%] h-[2.5rem] w-[2.5rem]"
          />
          <div className="text-md font-medium">{data.first_name+' '+data.last_name}</div>
        </div>
        <div className="text-center mt-2">
          <p className="line-clamp-2">{data.description}</p>
          <div className="font-bold text-lg">city: {data.city} </div>
        </div>
        {isLogged?
          <div className="absolute inset-0 bg-gray-50 p-4 transition-opacity duration-500 opacity-0 group-hover:opacity-100">
          <div className="flex flex-col justify-center items-center space-y-2 font-serif text-lg ">
            <img src={data.profile_img} className="rounded-[50%] h-[4rem] w-[4rem] object-contain bg-white"/>
            <p className="text-lg font-semibold underline">{data.first_name + ' ' + data.last_name}</p>
            <p className="text-center line-clamp-2">{data.description}</p>
            <div>
              <p><span className="font-semibold">phone:</span> {data.phone_number}</p>
              <p><span className="font-semibold">email:</span> {data.email}</p>
              <p><span className="font-semibold">address:</span> {data.address}</p>
            </div>
            <p className="text-green-700 underline decoration-2">View more</p>
          </div>
        </div>
        :
        null
        }
      </div>
    </>
  );
};

export default Card;
