
import { Link } from "react-router-dom";
import { services } from "../data/services";
import SimpleHeader from "../components/SimpleHeader";
const Categories = () => {

  localStorage.removeItem("searchService",)
  localStorage.removeItem('searchSubService')

  return (
    <>
    <SimpleHeader />
    <div className="h-full">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-8">
        {
          Object.keys(services).map((service, index) => (
            <div key={`container-service${index}`} className="shadow-lg p-2">
              <p className="font-semibold cursor-pointer hover:bg-slate-100 duration-200" key={service} onClick={() => {
                localStorage.setItem("searchService", service)
                localStorage.removeItem('searchSubService')
              }}
              ><Link to="/SearchResults">{ service }</Link></p>
              <ul className="ml-4 list-disc" key={`ul${service}${index}`}>
                {
                  services[service].map((subservice, index) => (
                    <li key={subservice} className="cursor-pointer hover:bg-slate-100 duration-200" onClick={ () => {
                      localStorage.setItem("searchService", service)
                      localStorage.setItem('searchSubService', subservice)
                    }
                    }><Link to="/SearchResults"> { subservice }</Link></li>
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
