import { useEffect, useState } from "react";
import { SingIn } from "../utils/HTTPRequest";
import CloseIcon from "../assets/close.svg";


const LogIn = ({ display, closeLogInWindows, lognInState}) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePasswordChange = (Event) => setPassword(Event.target.value); 
  const formData = new FormData();
  formData.append('email', email);
  formData.append('password', password);

  const handleLogInClick = async () => {
    const result = await SingIn(formData);
    if (result) {
      console.log('log in result', result.data['user_id'])
      localStorage.setItem('email', email.split('@')[0]);
      localStorage.setItem('login', true);
      lognInState({
        logIn: true,
        userId: result.data['user_id'],
      })
      window.location.reload();
    } else {
      alert('login failed');
    }

  };

  return (
    <>
      <div
        className={`absolute bg-slate-50 text-slate-900 w-[18rem] h-[17rem] md:h-[18rem] md:w-[22rem] right-0 top-[3rem] md:top-[3.7rem] border-l border-b border-r rounded-bl-xl border-slate-400 ${display}`}
      >
        <div
          className="inline-block cursor-pointer m-1 text-white"
          onClick={closeLogInWindows}
        >
          <img src={CloseIcon} />
        </div>
        <div className="flex flex-col justify-center items-center ">
          <h1 className="text-3xl font-semibold font-serif mb-[1rem] underline">
            Log in
          </h1>
          <input type="email" className="input-style" placeholder="Email" value={email}
          onChange={handleEmailChange}/>
          <input
            type="password"
            className="input-style my-4"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
          <button
            className="bg-red-400 px-8 py-[0.4rem] rounded-xl text-slate-900 hover:bg-red-600 hover:font-semibold hover:outline hover:outline-black js-login-submit hover:text-white"
            onClick={handleLogInClick}
          >
            Log in
          </button>
        </div>
      </div>
    </>
  );
};

export default LogIn;
