import Card from "./Card";
import { cards, loadAllServiceProviders } from "../data/cards";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CardsGrid = ({ isLogged, cardsdata, cardNumber, display }) => {

  const handleCardClick = async () => {
    const data = await result();
    setCardsData(data);
  };

  return (
    <>
      { display ?
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-2 mb-[1rem]">
          {
            cardsdata.slice(0, cardNumber).map((cardData, index) => (
                <Link 
                to={localStorage.getItem('login')? '/service' : '/sign' } state={{ cardData }}
                  key={index}
                  >
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
