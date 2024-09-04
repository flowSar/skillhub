import Card from "./Card";
import { cards, result } from "../data/cards";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CardsGrid = ({ isLogged }) => {
  const [cardsdata, setCardsData] = useState([])
  const handleCardClick = async () => {
    const data = await result();
    setCardsData(data);
  };

  useEffect(() => {
    const loadData = async() => {
      const data = await result();
      setCardsData(data);
    };

    loadData();
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-2 mb-[1rem]">
        {cardsdata.map((cardData, index) => (
          index <= 8 ?
            <Link 
            to={localStorage.getItem('login')? '/service' : '/' } state={{ cardData }}
              key={index}
              >
              <Card
                key={index}
                data = {cardData}
                onClick={handleCardClick}
                isLogged={isLogged}
            />
            </Link>
          :
          ''
        ))}
      </div>
    </>
  );
};

export default CardsGrid;
