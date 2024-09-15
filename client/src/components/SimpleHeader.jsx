import { Link } from "react-router-dom";
import Logo from "../assets/logo-2.webp"

const SimpleHeader = () => {
  return (
    <>
      <div className="flex justify-between items-center h-[3.4rem] bg-white border-b border-black shadow-lg">
        <div className="w-[10rem] p-2">
          <Link to="/" >
            <img src={Logo} className="h-[2.8rem] w-full object-cover"/>
          </Link>
        </div>
        <div>
          <ul className="horizontal-list">
            <li>
              <Link to="/TestPage">Contact</Link>
            </li>
            <li>
              <Link to="/about">about</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SimpleHeader;
