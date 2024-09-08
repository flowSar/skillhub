import Card from "./Card";
import { cards, loadAllServiceProviders } from "../data/cards";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const CardsGrid = ({ isLogged, cardsdata, cardNumber, display }) => {

  const navigate = useNavigate();

  localStorage.setItem('card_uid', cardsdata.uid);
  localStorage.setItem('card_data', JSON.stringify(cardsdata));
  const handleCardClick = () => {
    localStorage.setItem('card_uid', cardsdata.uid);
    localStorage.setItem('card_data', JSON.stringify(cardsdata));
    navigate('/service');

  };

  return (
    <>
      { display ?
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-2 mb-[1rem]">
          {
            cardsdata.slice(0, cardNumber).map((cardData, index) => (
              <Link to={`${isLogged? '/service': '/sign'}`} key={`link-${index}`}>
                <Card
                  key={index}
                  data = {cardData}
                  onClick={handleCardClick}
                  isLogged={isLogged}
              />
              </Link>

            ))
          }
        </div>
        :
        null

      }
    </>
  );
};

export default CardsGrid;
