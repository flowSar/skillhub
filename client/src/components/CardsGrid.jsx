import Card from "./Card";
import { cards, result } from "../data/cards";
import { useEffect, useState } from "react";

const CardsGrid = () => {
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-2">
        {cards.map((item, index) => (
          index <= 8 ?
            <Card
              key={index}
              thumbnail={item.thumbnail_img}
              profile_img={item.profile_img}
              name={item.first_name+' '+item.last_name}
              description={item.description}
              rating={item.rating}
              onClick={handleCardClick}
            />
          :
          ''
        ))}
      </div>
    </>
  );
};

export default CardsGrid;
