import langScape from "../assets/langScape.svg";
import Plumbing from "../assets/Plumbing.svg";
import Electrical from "../assets/Electrical.svg";
import Cleaning from "../assets/Cleaning.svg";
import Building from "../assets/Building.svg";

const PopularService = () => {
  return (
    <>
      <ul className="horizontal-list">
        <li className="">
          <img src={langScape} className="mx-auto" />
          <a>LandScaping</a>
        </li>
        <li>
          <img src={Plumbing} className="mx-auto" />
          <a>Plumbing</a>
        </li>
        <li>
          <img src={Electrical} className="mx-auto" />
          <a>Electrical</a>
        </li>
        <li>
          <img src={Cleaning} className="mx-auto" />
          <a>Cleaning</a>
        </li>
        <li>
          <img src={Building} className="mx-auto" />
          <a>Building</a>
        </li>
      </ul>
    </>
  );
};

export default PopularService;
