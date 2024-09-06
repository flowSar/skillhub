const SearchNav = () => {
  return (
    <>
      <div className="flex items-center justify-center bg-gray-300 h-[8rem] sm:h-[10rem] md:h-[12rem] lg:h-[16rem] pt-[55px] md:pt-[60px] shadow-lg">
        <div className="">
          <input
            type="text"
            placeholder="Enter service Name"
            className=" p-2 md:p-4 w-[22rem] sm:w-[26rem] md:w-[40rem] rounded-l-lg focus:outline-none"
          />
          <button className="bg-[#bdbdbd] font-medium p-2 md:p-4 lg:px-6 rounded-r-lg">
            Search
          </button>
        </div>
      </div>
    </>
  );
};

export default SearchNav;
