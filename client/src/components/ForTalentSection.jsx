import { Link } from "react-router-dom";
// import TalentImage from "../assets/find-great-work@2x.jpeg";
import TalentImage from "../assets/image (20).webp"

const ForTalentSection = ( {isLogged} ) => {
  return (
    <>
      {!isLogged?
        <div className="h-[25rem] flex flex-col md:flex-row mt-2 mb-2 bg-red-200">
          <img
            src={TalentImage}
            className="bg-blue-200 hidden md:inline-block w-[50%] h-[18rem] md:h-full object-cover"
          />
          <div className=" bg-[#c2e1e9] flex-1 md:w-[50%] h-[18rem] md:h-full text-slate-950 p-2 md:p-6 justify-between">
            <div className="space-y-2">
              <p>For talent</p>
              <p className="text-6xl md:text-5xl lg:text-6xl font-semibold">Find great work</p>
              <p className="max-w-[23rem]">
                Meet clients you’re excited to work with and take your career or
                business to new heights.
              </p>
            </div>
            <div className="mt-[4rem] md:mt-[1rem] lg:mt-[4rem] xl:mt-[12-rem]">
              <span className="border border-white bg-white block mx-4 mt-[1rem] mb-1"></span>
              <div className="grid grid-cols-2 md:grid-cols-3">
                <p className="p-2">
                  Find opportunities for every stage of your freelance career
                </p>
                <p className="p-2">Control when, where, and how you work</p>
                <p className="p-2">Explore different ways to earn</p>
              </div>
              <button className="text-blue-600 bg-white py-2 px-8 rounded-lg mt-3">
                <Link to='/sign'>Find opportunities</Link>
              </button>
            </div>
          </div>
        </div>
      :
        null
      }
    </>
  );
};

export default ForTalentSection;
