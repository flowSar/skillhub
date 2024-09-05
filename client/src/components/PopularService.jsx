import langScape from "../assets/langScape.svg";
import Plumbing from "../assets/Plumbing.svg";
import Electrical from "../assets/Electrical.svg";
import Cleaning from "../assets/Cleaning.svg";
import Building from "../assets/Building.svg";
import { Link } from "react-router-dom";

const PopularService = () => {
  return (
    <>
      <ul className="horizontal-list">
        <li className="">
          <img src={langScape} className="mx-auto" />
          <Link>LandScaping</Link>
        </li>
        <li>
          <img src={Plumbing} className="mx-auto" />
          <Link>Plumbing</Link>
        </li>
        <li>
          <img src={Electrical} className="mx-auto" />
          <Link>Electrical</Link>
        </li>
        <li>
          <img src={Cleaning} className="mx-auto" />
          <Link>Cleaning</Link>
        </li>
      </ul>
    </>
  );
};

export default PopularService;
