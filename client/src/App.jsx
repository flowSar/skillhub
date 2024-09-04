import { useState, useEffect } from "react";
import CardsGrid from "./components/CardsGrid";
import Footer from "./components/Footer";
import ForClientSection from "./components/ForClientSection";
import ForTalentSection from "./components/ForTalentSection";
import Header from "./components/Header";
import LineBare from "./components/LineBar";
import PopularService from "./components/PopularService";
import SearchNav from "./components/SearchNav";
import { LoadLogInState } from "./utils/HTTPRequest";

function App() {

  const [isLogged, setLogged] = useState(false);
    useEffect(() => {
      // this function if for check if the user is log in by checking for a session is exist in the server 
      // we call LoadLogInStatet function that will send a request to the server with user_id to check if the user has a session on the server to 
      // keep him logged
      const LoadDataFromDb = async() => {
        if (localStorage.getItem('user_id')) {
          const data = {
            user_id: localStorage.getItem('user_id')
          };
          const result = await LoadLogInState(data);
          if (result) {
            setLogged(true);
          }

        } else {
          console.log('your not loged yet');
        }

      };
      // when the page is loaded we call this function to check if the user is log in 
      LoadDataFromDb();
    }, []); 

  return (
    <>
      <Header />
      <SearchNav />
      <LineBare title="Popular services" />
      <PopularService />
      <LineBare title="Popular service providers" />
      <CardsGrid isLogged={isLogged}/>
      <LineBare title={isLogged ? 'Popular Cleaning services': ''}/>
      <ForClientSection isLogged={isLogged}/>
      <LineBare title={isLogged ? 'Popular Electrical services': ''} />
      <ForTalentSection isLogged={isLogged}/>
      <Footer />
    </>
  );
}

export default App;
