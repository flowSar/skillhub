import talenImage from "../assets/find-talent-2x.jpeg";

const ForClientSection = () => {
  return (
    <>
      <div className="relative h-[35rem] bg-red-200 mt-2 mb-2 ">
        <img src={talenImage} className="h-full w-full object-cover" />
        <div className="absolute text-white p-4 top-0">
          <p className="font-semibold">For client</p>
          <p className="text-5xl font-bold w-[16rem] mt-[6rem]">
            find talent your way
          </p>
          <p className="mt-[4rem] w-[26rem]">
            Work with the largest network of independent professionals and get
            things done—from quick turnarounds to big transformations.
          </p>
          <div className="bg-[#0e8b0e] p-4 max-w-[16rem] space-y-4 mt-[2rem] font-semibold hover:bg-white hover:text-[#0e8b0e] rounded-xl cursor-pointer">
            <p className="text-2xl w-[12rem]">Post a job and hire a pro</p>
            <p>Talent Marketplace &#x2794;</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForClientSection;
