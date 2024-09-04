
import { Link } from "react-router-dom";
import { services } from "../data/services";
import SimpleHeader from "../components/SimpleHeader";
const Categories = () => {

  const handleServiceClick = (event) => {
    console.log(event.target.innerText);
  };

  return (
    <>
    <SimpleHeader />
    <div className="h-full">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-8">
        {
          Object.keys(services).map((service, index) => (
            <div key={`container-service${index}`} className="shadow-lg p-2">
              <p className="font-semibold" key={service}>{service}</p>
              <ul className="ml-4 list-disc" key={`ul${service}${index}`}>
                {
                  services[service].map((subservice, index) => (
                    <li key={subservice} className="cursor-pointer" onClick={handleServiceClick}>{ subservice }</li>
                  ))
                }
              </ul>
            </div>
          ))
        }
      </div>
    </div>
     
    </>
  );
};

export default Categories;
