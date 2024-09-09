
import { useState } from "react";
import SearcIcon from "../assets/search.svg";
import { useNavigate } from 'react-router-dom';

const SearchNav = () => {

  const [SearchWord, setSearchWord] = useState('');
  const [locationSearch, setLocationSearch] = useState('');
  const handlesearchBarChange = (event) => setSearchWord(event.target.value);
  const handleLocationsearchChange = (event) => setLocationSearch(event.target.value);

  const navigate = useNavigate();

  const handleSearchBtnClick = () => {
    if (SearchWord === '') {
      alert("plase ensure to insert the search key word");
    } else {
      if (SearchWord.length < 3) {
        alert('search key wor to short');
      } else {
        localStorage.removeItem("searchService",)
        localStorage.removeItem('searchSubService')
        localStorage.setItem('navBarSearchWord', SearchWord.toLowerCase());
        localStorage.setItem('locationSearch', locationSearch.toLowerCase());
        navigate('/SearchResults');
      }
    }

  };

  return (
    <>
      <div className="flex items-center justify-center bg-gray-300 h-[8rem] sm:h-[10rem] md:h-[12rem] lg:h-[16rem] pt-[55px] md:pt-[60px] shadow-lg">
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Enter service Name"
            className="w-[12rem] md:w-auto p-2 pl-6 rounded-md focus:outline-none"
            value={SearchWord}
            onChange={handlesearchBarChange}
          />
          <input 
            type="text"
            placeholder="city"
            className="w-[9rem] md:w-auto p-2 pl-6 rounded-md focus:outline-none"
            value={locationSearch}
            onChange={handleLocationsearchChange}/>
          <button className="bg-[#fcfbfb] hover:bg-[#f5f4f4] font-medium p-2 md:p- md:px-6 lg:px-6 rounded-lg" onClick={handleSearchBtnClick}>
            <img src={SearcIcon} className="h-[2rem]" />
          </button>
        </div>
      </div>
    </>
  );
};

export default SearchNav;
