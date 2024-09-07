import React, { useEffect, useState } from "react";
import SimpleHeader from "../components/SimpleHeader";
import { Link } from "react-router-dom";
import andoidImg from "../assets/android.png"
import connectImg from "../assets/connect.png"
import browserThrough from "../assets/browserThrough-1.webp"
import chooseUsImage from "../assets/chooseUsImage.webp"
import Footer from "../components/Footer";



const About = () => {

  return (
    <>
      <SimpleHeader />
    
    <div className="flex flex-col gap-4 pt-[6rem] px-[2rem] md:px-[10rem]">
      <h2 className="text-xl font-semibold">Our Mission</h2>
      <img src={connectImg}/>
      <p className="">At SkillHub, our mission is to connect customers with the best service providers in their local area. Whether it's cleaning, plumbing, painting, or any other household service, we make the process simple, fast, and reliable.</p>

      <h2 className="text-xl font-semibold">What We Do</h2>
      <img src={browserThrough} className="h-[18rem] w-auto object-contain"/>
      <p>We provide a platform where customers can easily find service providers by browsing through various categories like home improvement, carpentry, pest control, and more. With SkillHub, service providers can showcase their expertise and grow their business, while customers can read reviews and book services with just a few clicks.</p>

      <h2 className="text-xl font-semibold">Why Choose Us?</h2>
      <img src={chooseUsImage} className="h-[18rem] w-auto object-contain"/>
      <p>At SkillHub, we do not verify service providers ourselves. Instead, we evaluate them based on customer feedback regarding the services they provide. Our goal is to save you time and effort by connecting you with experts who have been reviewed and recommended by other users.</p>

      <Link to="/Categories" className="btn-scale bg-slate-500 p-3 w-[14.8rem] text-white font-semibold text-xl">Explore Our Services &#129034;</Link>

      <section className="">
        <h2 className="text-xl font-semibold">Meet Our Team</h2>
        <div className="flex gap-4 items-center font-semibold p-2">
          <img src={andoidImg} alt="Team Photo" className="h-[4rem] rounded-[50%]"/>
          <p>Brahim sarouri</p>
        </div>
        <p className="p-2">Our team is dedicated to bringing the best services to your doorstep.</p>
      </section>
    </div>
    
      <Footer />
    </>
  );
};

export default About;
