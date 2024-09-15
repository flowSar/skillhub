import { useEffect, useState } from "react";
import LogIn from "./LogIn";
import { Link } from "react-router-dom";
import { LoadLogInState } from "../utils/HTTPRequest";
import { LogOut } from "../utils/HTTPRequest";
import Logo from "../assets/logo-2.webp"

import profileImg from "../assets/user-pro.png"

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
      localStorage.removeItem('login');
      localStorage.removeItem('email')
    }
    // load the page after log out
    window.location.reload();
  };

  

  const handleProfileClick = () => {
    // this function for handling click on the profileimage and display the pop up menu 
    if(displayProfile == 'hidden') {
      setDisplayProfile('block');
    } else {
      setDisplayProfile('hidden');
    }

  };

  useEffect(() => {
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
  }, []);

  return (
    <>
      <header className="fixed right-0 left-0 xl:right-[10rem] xl:left-[10rem] top-0  z-40 flex items-center  pl-2 justify-between border-b-2 border-black h-[50px] md:h-[60px] text-sm md:text-lg first-letter bg-[#ffffff] text-slate-800 font-semibold shadow-lg">
        <div className="w-[6rem] md:w-[8rem]">
          <a href="/">
            <img src={Logo} className="h-[2.8rem] w-full object-cover"/>
          </a>
          </div>
        <div className="flex items-center cursor-pointer">
          <div className=" group hover:bg-[#e2e2eb] rounded-lg px-2 py-2 duration-300" href="">
            <Link to="/Categories">Categories</Link>
          </div>
          <Link className=" hover:bg-[#e2e2eb] rounded-lg px-4 py-2 duration-300"
          to={
            {
              pathname: '/about',
              state: {name: 'brahim'}
            }
          }
          >
            about
          </Link>
          <Link className=" hover:bg-[#e2e2eb]  px-2 py-2 duration-300 rounded-lg" to="/contact">
            Contact us
          </Link>
        </div>
            {logInState ? 
              <div className="">
                <div className="relative space-x-2 items-center" onClick={handleProfileClick}>
                    <img className="h-[2.8rem] mr-2 md:mr-4 cursor-pointer" src={profileImg}/>

                  <div className={`absolute flex flex-col items-center bg-[#f7f7f7] left-[-3rem] right-0 top-[3.35rem] p-2 rounded-l-md ${displayProfile} shadow-lg`}>
                    <Link to="/profile" className="cursor-pointer hover:bg-slate-100 px-[0.6rem] py-2 w-full h-full border-b-2">profile</Link>
                    <button className="cursor-pointer hover:bg-slate-100 w-full h-full px-[0.6rem] py-2 border-t-2" onClick={handleLogOut}>Log out</button>
                  </div>
                </div>
              </div>
            : 
            <div className={`space-x-1 mr-2`}>
            <Link
              to="/sign"
              className="hover:bg-[#e2e2eb]  px-1 py-2 md:px-4 md:py-[0.6rem] hover:border-2 duration-300"
            >
            Sign Up
            </Link>
            <div
              className=" hover:bg-[#e2e2eb] hover:border-2 px-2 py-2 md:px-4 md:py-2 inline-block  cursor-pointer duration-300"
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
