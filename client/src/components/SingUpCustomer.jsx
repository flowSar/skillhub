import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SignUp } from "../utils/HTTPRequest";

const SingUpCustomer = ({ display }) => {
  const [userNameInput, setUserNameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [errorDisplay, setErrorDisplay] = useState('hidden');
  const [genderInput, setGenderInput] = useState('');
  const handleUserNameChange = (event) => setUserNameInput(event.target.value);

  const handleEmailChange = (event) => setEmailInput(event.target.value);
  const handlePasswordChange = (event) => setPasswordInput(event.target.value);
  const [isSignedUp , setIsSignedUp] = useState(false);

  const handleGenderChange = (event) => setGenderInput(event.target.value);

  const formData = new FormData()
  formData.append('user_name', userNameInput);
  formData.append('email', emailInput);
  formData.append('password', passwordInput);
  formData.append('gender', genderInput);

  const navigate = useNavigate();

  const handleSignUp = async () => {
    setIsSignedUp(true);
    if (userNameInput === '' || emailInput === '' || passwordInput === '' || genderInput === '') {
      alert('(missing info) please be sure to insert all necessary information');
      setIsSignedUp(false);
    } else {
      const result = await SignUp(formData, 'customer');
      if (!result) {
        setErrorDisplay('block');
        alert('sign up failed, try again');
        setIsSignedUp(false);
      } else {
        setUserNameInput('');
        setEmailInput('');
        setPasswordInput('');
        setGenderInput('');
        navigate('/');
        setIsSignedUp(false);
      }
    }
  };

  return (
    <>
      <div className={`border-2 border-slate-400 p-6 rounded-xl ${display}`}>
        <div className={`flex flex-col gap-4 items-center`}>
          <p className={`text-red-500 p-0 m-0 ${errorDisplay}`}>sign up failed this email is already exist try Log In</p>
          <div>
            <p className="py-2">Username: </p>
            <input
              type="text"
              placeholder="Username"
              className="input-style w-[20rem] md:w-[26rem] lg:w-[30rem]"
              value={userNameInput}
              onChange={handleUserNameChange}
            />
          </div>
          <div>
            <p className="py-2">Email: </p>
            <input
              type="email"
              placeholder="Email"
              className="input-style w-[20rem] md:w-[26rem] lg:w-[30rem]"
              value={emailInput}
              onChange={handleEmailChange}
            />
          </div>
          <div>
            <p className="py-2">Pssword: </p>
            <input
              type="password"
              placeholder="password"
              className="input-style w-[20rem] md:w-[26rem] lg:w-[30rem]"
              onChange={handlePasswordChange}
              value={passwordInput}
            />
          </div>
          <div>
            <select id="sex" className="md:w-[10rem] h-[2.5rem] p-2 text-center" onChange={handleGenderChange}>
                  <option>Gender</option>
                  <option>Male</option>
                  <option>Female</option>
            </select>
          </div>
          <button className="button-style" 
          onClick={handleSignUp}
          disabled={isSignedUp}
          >
            Sign up
          </button>
          <p>
            Already Have an account{" "}
            <span className="text-green-700 underline text-lg font-semibold">
              <Link to="/">Log In</Link>
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default SingUpCustomer;
