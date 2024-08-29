import { Link } from "react-router-dom";

const SimpleHeader = () => {
  return (
    <>
      <div className="flex justify-between items-center h-[3rem] bg-white border-b border-black">
        <div className="bg-red-300 w-[10rem] p-2">
          {" "}
          <a href="/">SkillHub Logo</a>
        </div>
        <div>
          <ul className="horizontal-list">
            <li>
              <Link to="/contact">Contact us</Link>
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
