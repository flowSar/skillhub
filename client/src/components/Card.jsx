import { useEffect } from "react";

const Card = ({
  thumbnail,
  profile_img,
  name,
  description,
  rating,
  onClick,
}) => {
  return (
    <>
      <div
        className="bg-gray-200 mx-4 sm:mx-0 p-2 mt-2 mb-2 cursor-pointer border border-slate-900 rounded-lg"
        onClick={onClick}
      >
        <img src={thumbnail} />
        <div className=" flex items-center space-x-2 mt-1">
          <img
            src={profile_img}
            className="bg-black rounded-[50%] h-[2.5rem] w-[2.5rem]"
          />
          <div className="text-md font-medium">{name}</div>
        </div>
        <div className="text-center mt-2">
          <a className="">{description}</a>
          <div className="font-bold text-lg"> {rating} &#9733; </div>
        </div>
      </div>
    </>
  );
};

export default Card;
