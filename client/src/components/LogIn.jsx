import { useEffect, useState } from "react";
import { SingIn } from "../utils/HTTPRequest";


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

      lognInState({
        logIn: true,
        userId: result.data['user_id'],
      })
    } else {
      alert('login failed');
    }

  };

  return (
    <>
      <div
        className={`absolute bg-slate-300 text-slate-900 w-[18rem] h-[17rem] md:h-[20rem] md:w-[24rem] right-0 top-[3rem] md:top-[3.7rem] rounded-xl border-2 border-slate-800 ${display}`}
      >
        <div
          className="bg-black inline-block px-[0.35rem] md:px-[0.55rem] rounded-[50%] cursor-pointer m-1 text-white"
          onClick={closeLogInWindows}
        >
          X
        </div>
        <div className="flex flex-col justify-center items-center p-4">
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
            className="bg-red-400 px-10 py-2 rounded-xl hover:bg-red-600 hover:font-semibold hover:outline hover:outline-black js-login-submit"
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
