// import talenImage from "../assets/find-talent-2x.jpeg";
import { Link } from "react-router-dom";
import talenImage from "../assets/section-2.png";

const ForClientSection = ({ isLogged }) => {
  return (
    <>
      { !isLogged ?
        <div className="relative h-[25rem] w-[30rem] md:w-auto  mt-2 mb-2 bg-[#c2e1e9]">
          <img src={talenImage} className="w-[60rem] h-[25rem] lg:h-full lg:w-full object-contain lg:object-cover text-blue-950" />
          <div className="absolute  p-4 top-0">
            <p className="font-semibold">For client</p>
            <p className="text-4xl md:text-5xl font-bold mt-[2rem]">
              find talent your way
            </p>
            <p className="mt-[1rem] w-[26rem] md:w-[28rem]">
              Work with the largest network of independent professionals and get
              things done—from quick turnarounds to big transformations.
            </p>
            <Link to="sign" className="btn-scale bg-[#a9c1d6] p-4 max-w-[16rem] space-y-4 mt-[2rem] font-semibold hover:bg-white hover:text-[#0e8b0e] rounded-xl cursor-pointer block">
              <p className="text-2xl w-[12rem]">Post a job and hire a pro</p>
              <p>Talent Marketplace &#x2794;</p>
            </Link>
          </div>
        </div>
        :

        null
      }
    </>
  );
};

export default ForClientSection;
