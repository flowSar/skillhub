import { useState } from "react";
import CardsGrid from "./components/CardsGrid";
import Footer from "./components/Footer";
import ForClientSection from "./components/ForClientSection";
import ForTalentSection from "./components/ForTalentSection";
import Header from "./components/Header";
import LineBare from "./components/LineBar";
import PopularService from "./components/PopularService";
import SearchNav from "./components/SearchNav";

function App() {
  return (
    <>
      <Header />
      <SearchNav />
      <LineBare title="Popular services" />
      <PopularService />
      <LineBare title="Popular service providers" />
      <CardsGrid />
      <LineBare title="" />
      <ForClientSection />
      <LineBare title="" />
      <ForTalentSection />
      {/* <TestimonialsSection /> */}
      <Footer />
    </>
  );
}

export default App;
