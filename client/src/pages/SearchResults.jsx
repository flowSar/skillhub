import React, { useEffect, useState } from "react";
import SimpleHeader from "../components/SimpleHeader";
import { loadAllServiceProviders } from "../data/cards";
import CardsGrid from "../components/CardsGrid";
import { LoadLogInState } from "../utils/HTTPRequest";


function SearchResults() {
  const [cardsdata, setCardsData] = useState([]);
  const [dataLoaded, setDataLoaded] = useState('block');
  const subservice = localStorage.getItem('searchSubService');
  const  service  = localStorage.getItem('searchService');
  const [isLogged, setLogged] = useState(false);
  const searchKeyWord = localStorage.getItem('navBarSearchWord');
  const locationSearch =   localStorage.getItem('locationSearch');


  useEffect(() => {
    // load all service providers from data base
    const loadData = async() => {
      const data = await loadAllServiceProviders();
      if (data) {
        setDataLoaded('hidden');
      }
      setCardsData(data);
    };

    loadData();
  }, []);


  useEffect(() => {
    // this function if for check if the user is log in by checking for a session is exist in the server 
    // we call LoadLogInStatet function that will send a request to the server with user_id to check if the user has a session on the server to 
    // keep him logged
    const LoadDataFromDb = async() => {
      if (localStorage.getItem('user_id')) {
        const data = {
          user_id: localStorage.getItem('user_id')
        };
        const result = await LoadLogInState(data);
        if (result) {
          setLogged(true);
          console.log('is logged', isLogged);
        }

      } else {
        console.log('your not loged yet');
      }
    };
    // when the page is loaded we call this function to check if the user is log in 
    LoadDataFromDb();
  }, []); 

  let filtredByService = [];
  let filteredBySubService = [];

  if (searchKeyWord) {
    // if the searck key work came from search bar will need to filter search for the keyword in body service and subservice
    filtredByService = cardsdata.filter((card) => {
      if (card.service.toLowerCase().includes(searchKeyWord) || card.sub_service.toLowerCase().includes(searchKeyWord)) {
        return true;
      }
      return false;
    });
    if (locationSearch !== '') {
      filtredByService = filtredByService.filter((card) => {
        if (card.city.toLowerCase().includes(locationSearch)) {
          return true
        }
        return false
      });
    }
  } else {
    // this section if the keyword came from category 
    filtredByService = cardsdata.filter((card) => card.service === service);
    filtredByService.map((item) => {
      if (item.sub_service && typeof item.sub_service === 'string') {
        item.sub_service = item.sub_service.split(',');
      }
      return item;
    });
  
    filteredBySubService = filtredByService.filter((card) => {
      // filter by sub serbservice
      if (card.sub_service.includes(subservice)) {
        return true
      }
      return false
    });
  }


  return (
    <>
      <SimpleHeader />
      <div className="p-4 bg-slate-50 shadow-lg mt-8 mb-4">
        <p className="text-center text-xl font-semibold underline"> {service} {searchKeyWord} <span className={`text-red-800 inline-block ml-2 ${subservice? 'block': 'hidden'}`}>({subservice})</span></p>
      </div>
      { filtredByService.length === 0?
        <div className="h-screen flex justify-center items-center p-10  text-xl md:text-4xl text-slate-900">
            <p className="bg-red-400 p-10">{service} {subservice} {searchKeyWord}: this service was not found</p>
        </div>
        :
        !subservice ?
         <CardsGrid isLogged={isLogged} cardsdata={ filtredByService } cardNumber="4" display="block"/>
        :
        <CardsGrid isLogged={isLogged} cardsdata={ filteredBySubService } cardNumber="4" display="block"/>
      }

      <div className={`loading absolute top-[5rem] inset-0 flex items-center justify-center bg-white ${dataLoaded}`}>
        <p className="w-[8rem] text-center">Please wait...</p>
        <div className="spinner"></div>
      </div>
    </>
  )
}

export default SearchResults