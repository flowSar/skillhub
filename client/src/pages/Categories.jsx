
import { Link } from "react-router-dom";
import { services } from "../data/services";
import SimpleHeader from "../components/SimpleHeader";
const Categories = () => {
  return (
    <>
    <SimpleHeader />
      <div
        className={``}
      >
        <div className="flex  justify-center items-center h-screen gap-6">
          <ul className="">
            {
              Object.keys(services).map((service, index) => (
                <li>
                  <Link key={service+index} to="">{service}</Link>
                </li>
              ))
            }
            <li>
              <a className="underline text-blue-700">View More</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Categories;
