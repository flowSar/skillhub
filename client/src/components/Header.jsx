import { useEffect, useState } from "react";
import Categories from "./Categories";
import LogIn from "./LogIn";
import { Link } from "react-router-dom";
import { LoadLogInState } from "../utils/HTTPRequest";
import { LogOut } from "../utils/HTTPRequest";

const Header = () => {
  const [displayProfile, setDisplayProfile] = useState('hidden');
  const [logInDisplayState, setlogInDisplayState] = useState(false);
  const [uid, setUid] = useState('');

  // track login state true  is log in and false is not logged
  const [logInState, setLogInState] = useState(false);

  // this function to display the log in component when we click on the log in button
  const displayLognIn = () => {
    if (logInDisplayState == true) {
      setlogInDisplayState(false);
    } else {
      setlogInDisplayState(true);
    }
  };

  // becuase th log in component is seperate from the header component we use this function to check if the user is log in 
  // and if his login we get his info like uid and store it in the local storage so we can use it later fo session
  const getLogInState = (data) => {
    console.log('get login state activated', data.logIn);
    if (data.logIn === true) {
      setLogInState(true);
      setUid(data.userId)
      localStorage.setItem('user_id', data.userId);
    }
  };

  // this function is resposible for log out by calling LogOut function that will send request to the server to remove the session (cokies session)
  // and remove the user id from localstorage which will lead to display log in and sign up button .
  const handleLogOut = async () => {
    const data = {
      user_id: localStorage.getItem('user_id')
    };
    const result = await LogOut(data);
    if (result) {
      setLogInState(false);
      localStorage.removeItem('user_id');
    }
    // load the page after log out
    window.location.reload();
  };

  // this function if for check if the user is log in by checking for a session is exist in the server 
  // we call LoadLogInStatet function that will send a request to the server with user_id to check if the user has a session on the server to 
  // keep him logged
  const lodPage = async() => {
    if (localStorage.getItem('user_id')) {
      const data = {
        user_id: localStorage.getItem('user_id')
      };
      const result = await LoadLogInState(data);
      if (result) {
        setLogInState(true);
      } else {
        setLogInState(false);
      }
    } else {
      console.log('your not loged yet');
    }

  };
  // when the page is loaded we call this function to check if the user is log in 
  lodPage();

  const handleProfileClick = () => {
    // this function for handling click on the profileimage and display the pop up menu 
    if(displayProfile == 'hidden') {
      setDisplayProfile('block');
    } else {
      setDisplayProfile('hidden');
    }

  };

  return (
    <>
      <header className="fixed right-0 left-0 xl:right-[10rem] xl:left-[10rem] top-0  z-40 flex items-center  pl-2 justify-between border-b-2 border-black h-[50px] md:h-[60px] text-sm md:text-lg first-letter bg-[#bebece] text-white font-semibold">
        <div className="flex items-center cursor-pointer">
          <div className="relative w-[6rem] md:w-[8rem] bg-red-400">
            {" "}
            SkillHub Logo
          </div>
          <div className=" group hover:bg-[#60606e] px-2 py-[1rem]" href="">
            Categories
            <Categories classes="absolute bg-gray-100 text-black hidden group-hover:block" />
          </div>
          <Link className=" hover:bg-[#60606e] px-2 py-[1rem]" to="/about">
            about
          </Link>
          <Link className=" hover:bg-[#60606e] px-2 py-[1rem]" to="/contact">
            Contact us
          </Link>
        </div>
        {logInState ? 
            <div className="">
            <div className="relative space-x-2 items-center" onClick={handleProfileClick}>
                <img className="h-[2.8rem] mr-2 md:mr-4 cursor-pointer" src="https://avatar.iran.liara.run/public/boy"/>

              <div className={`absolute flex flex-col items-center bg-[#bebece] w-[8rem] h-[6rem] right-0 top-[3.3rem] space-y-2 p-2 ${displayProfile}`}>
                <Link to="/profile" className="hover:underline hover:decoration-4 hover:decoration-green-700">profile</Link>
                <button className="cursor-pointer hover:underline hover:underline-2 hover:decoration-4 hover:decoration-green-700" onClick={handleLogOut}>Log out</button>
              </div>
            </div>
          </div>
        : 
        <div className={`space-x-1 mr-2`}>
        <Link
          to="/sign"
          className="hover:bg-[#2b2b5a] px-1 py-2 md:px-4 md:py-[0.6rem] hover:border-2"
        >
        Sign Up
        </Link>
        <div
          className=" hover:bg-[#2b2b5a] hover:border-2 px-2 py-2 md:px-4 md:py-2 inline-block  cursor-pointer"
          onClick={displayLognIn}
        >
          Log in
        </div>
        <LogIn
          display={logInDisplayState ? "block" : "hidden"}
          closeLogInWindows={displayLognIn}
          lognInState={getLogInState}
        />
        </div>
      }


      </header>
    </>
  );
};

export default Header;
