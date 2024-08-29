const TestimonialsSection = () => {
  return (
    <>
      <div
        className="flex flex-col justify-center items-center bg-[#f7f7f8] h-[20rem] mt-[1rem] mb-[1rem] gap-6"
        id="Singup"
      >
        <p className="text-4xl md:text-6xl text-slate-700 font-bold">
          Be your own Boss
        </p>
        <p className="text-2xl md:text-4xl font-semibold text-slate-700">
          Sing Up For free
        </p>
        <div className="flex flex-col gap-2">
          <input
            type="email"
            placeholder="Enter your Email"
            className="p-2 border border-slate-400"
          />
          <input
            type="password"
            placeholder="Enter your Password"
            className="p-2 border border-slate-400"
          />
          <button className="p-2 bg-red-400 rounded-lg text-white font-bold text-lg">
            Sing up
          </button>
        </div>
      </div>
    </>
  );
};

export default TestimonialsSection;
