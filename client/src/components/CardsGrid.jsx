import Card from "./Card";
import { cards } from "../data/cards";

const CardsGrid = () => {
  const handleCardClick = () => {
    console.log("clicked");
  };
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-2">
        {cards.map((item, index) => (
          <Card
            key={index}
            thumbnail={item.thumbnail_img}
            profile_img={item.profile_img}
            name={item.name}
            description={item.description}
            rating={item.rating}
            onClick={handleCardClick}
          />
        ))}
      </div>
    </>
  );
};

export default CardsGrid;
