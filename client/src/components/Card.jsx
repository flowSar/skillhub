import { useEffect, useState } from "react";
import { LoadLogInState } from "../utils/HTTPRequest";

const Card = ({
  thumbnail,
  profile_img,
  name,
  description,
  rating,
  onClick,
}) => {
  const [isLogged, setLogged] = useState(false);
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
            setLogged(true);
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
      <div
        className="group relative bg-gray-200 mx-4 sm:mx-0 p-2 mt-2 mb-2 cursor-pointer border border-slate-900 rounded-lg"
        onClick={onClick}
      >
        <img src={thumbnail} className="lg:max-h-[13rem]"/>
        <div className=" flex items-center space-x-2 mt-1">
          <img
            src={profile_img}
            className="bg-black rounded-[50%] h-[2.5rem] w-[2.5rem]"
          />
          <div className="text-md font-medium">{name}</div>
        </div>
        <div className="text-center mt-2">
          <a className="">{description}</a>
          <div className="font-bold text-lg"> {rating} &#9733; </div>
        </div>
        {isLogged?
          <div className="absolute group-hover:block hidden inset-0 bg-slate-300 p-2">
          <div className=" flex flex-col justify-center items-center space-y-2 font-serif text-lg">
            <img src={profile_img} className="rounded-[50%] h-[4rem]"/>
            <p className="text-lg font-semibold underline">{name}</p>
            <p className="text-center">{description}</p>
            <p>09876543456</p>
            <p>brahim.flo@gmail.com</p>
            <p>ain chock Casalabanca</p>
          </div>
        </div>
        :
        ""
        }
      </div>
    </>
  );
};

export default Card;
