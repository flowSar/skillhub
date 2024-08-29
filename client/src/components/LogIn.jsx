const LogIn = ({ display, closeLogInWindows }) => {
  const handleClick = () => {
    console.log("log in");
  };

  return (
    <>
      <div
        className={`absolute bg-slate-300 text-slate-900 w-[21rem] h-[22rem] md:h-[25rem] md:w-[28rem] right-0 top-[3rem] md:top-[3.7rem] rounded-xl border-2 border-slate-800 ${display}`}
      >
        <div
          className="bg-black inline-block px-[0.35rem] md:px-[0.55rem] rounded-[50%] cursor-pointer m-1 text-white"
          onClick={closeLogInWindows}
        >
          X
        </div>
        <div className="flex flex-col justify-center items-center p-4">
          <h1 className="text-5xl font-semibold font-serif mb-[4rem] underline">
            Log in
          </h1>
          <input type="email" className="input-style" placeholder="Email" />
          <input
            type="password"
            className="input-style my-4"
            placeholder="Password"
          />
          <button
            className="bg-red-400 px-10 py-2 rounded-xl hover:bg-red-600 hover:font-semibold hover:outline hover:outline-black js-login-submit"
            onClick={handleClick}
          >
            Log in
          </button>
        </div>
      </div>
    </>
  );
};

export default LogIn;
