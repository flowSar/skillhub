import React, { useState } from "react";
import { Link } from "react-router-dom";

const SingUpCustomer = ({ display }) => {
  const [userNameInput, setUserNameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const handleUserNameChange = (event) => {
    setUserNameInput(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmailInput(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPasswordInput(event.target.value);
  };

  const handleSignUp = () => {
    console.log(`userName: ${userNameInput}`);
  };

  return (
    <>
      <div className={`border-2 border-slate-400 p-6 rounded-xl ${display}`}>
        <div className={`flex flex-col gap-4 items-center`}>
          <div>
            <p className="py-2">Username: </p>
            <input
              type="text"
              placeholder="Username"
              className="input-style w-[30rem]"
              value={userNameInput}
              onChange={handleUserNameChange}
            />
          </div>
          <div>
            <p className="py-2">Email: </p>
            <input
              type="email"
              placeholder="Email"
              className="input-style w-[30rem]"
              value={emailInput}
              onChange={handleEmailChange}
            />
          </div>
          <div>
            <p className="py-2">Pssword: </p>
            <input
              type="password"
              placeholder="password"
              className="input-style w-[30rem]"
              onChange={handlePasswordChange}
              value={passwordInput}
            />
          </div>
          <button className="button-style" onClick={handleSignUp}>
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
