
import { useState } from "react";
import SearcIcon from "../assets/search.svg";
import { useNavigate } from 'react-router-dom';

const SearchNav = () => {

  const [SearchWord, setSearchWord] = useState('');
  const handlesearchBarChange = (event) => setSearchWord(event.target.value);

  const navigate = useNavigate();

  const handleSearchBtnClick = () => {
    localStorage.removeItem("searchService",)
    localStorage.removeItem('searchSubService')
    localStorage.setItem('navBarSearchWord', SearchWord.toLowerCase());
    navigate('/SearchResults');

  };

  return (
    <>
      <div className="flex items-center justify-center bg-gray-300 h-[8rem] sm:h-[10rem] md:h-[12rem] lg:h-[16rem] pt-[55px] md:pt-[60px] shadow-lg">
        <div className="flex">
          <input
            type="text"
            placeholder="Enter service Name"
            className=" p-2 md:p-4 w-[22rem] sm:w-[26rem] md:w-[40rem] rounded-l-lg focus:outline-none"
            value={SearchWord}
            onChange={handlesearchBarChange}
          />
          <button className="bg-[#bdbdbd] font-medium p-2 md:p- md:px-6 lg:px-6 rounded-r-lg" onClick={handleSearchBtnClick}>
            <img src={SearcIcon} className="h-[2rem]" />
          </button>
        </div>
      </div>
    </>
  );
};

export default SearchNav;
