import React, { useEffect, useState } from "react";
import SimpleHeader from "../components/SimpleHeader";
import { Link, useLocation } from "react-router-dom";
import { loadAllServiceProviders } from "../data/cards";
import CardsGrid from "../components/CardsGrid";
import Card from "../components/Card";
import { LoadLogInState } from "../utils/HTTPRequest";

function SearchResults() {
  const [cardsdata, setCardsData] = useState([]);
  const [dataLoaded, setDataLoaded] = useState('block');



  useEffect(() => {
    const loadData = async() => {
      const data = await loadAllServiceProviders();
      if (data) {
        setDataLoaded('hidden');
      }
      setCardsData(data);
    };

    loadData();
  }, []);

  const subservice = localStorage.getItem('searchSubService');
  const  service  = localStorage.getItem('searchService');
  console.log('search: for service', service);
  console.log('search: for servsubserviceice', subservice);

  const [isLogged, setLogged] = useState(false);
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

  let filtredByService = cardsdata.filter((card) => card.service === service);
  filtredByService.map((item) => {
    if (item.sub_service && typeof item.sub_service === 'string') {
      item.sub_service = item.sub_service.split(',');
    }
    return item;
  });

  let filteredBySubService = filtredByService.filter((card) => {
    if (card.sub_service.includes(subservice)) {
      return true
    }
    return false
  });


  console.log('filteredBySubService', filteredBySubService);
  // console.log('filteredBySubService', filteredBySubService);
  // if (subservice) {
  //  const filteredBySubService = filtredByService.filter((sub) => sub.sub_service === subservice);
  // }
  return (
    <>
      <SimpleHeader />
      { filtredByService.length === 0?
        <div className="h-screen flex justify-center items-center p-10  text-xl md:text-4xl text-slate-900">
            <p className="bg-red-400 p-10">{service}/{subservice}: this service was not found</p>
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