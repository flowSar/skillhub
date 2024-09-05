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
        <Link to="/SearchResults">
            <img src={langScape} className="mx-auto" onClick={() => {
                localStorage.setItem("searchService", "LandScaping")
            }}/>
            LandScaping
          </Link>
        </li>
        <li>
          <Link to="/SearchResults">
            <img src={Plumbing} className="mx-auto" onClick={() => {
                localStorage.setItem("searchService", "Plumbing");
            }}/>
            Plumbing
          </Link>
        </li>
        <li>
          <Link to="/SearchResults" >
              <img src={Electrical} className="mx-auto" onClick={() => {
                  localStorage.setItem("searchService", "Electrical");
              }}/>
              
              Electrical
            </Link>
        </li>
        <li>
          <Link to="/SearchResults">
            <img src={Cleaning} className="mx-auto" onClick={() => {
                localStorage.setItem("searchService", "Cleaning");
            }}/>
            
            Cleaning
          </Link>
        </li>
      </ul>
    </>
  );
};

export default PopularService;
