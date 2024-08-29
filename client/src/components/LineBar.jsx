const LineBare = ({ title }) => {
  return (
    <>
      <div className="flex items-center">
        <p className="bg-[#363131] border-black flex-1 h-2 rounded-md"></p>
        <p
          className={`mx-2 text-lg font-medium ${title === "" ? "hidden" : ""}`}
        >
          {title}
        </p>
        <p
          className={`bg-[#363131] border border-black h-2 rounded-md ${
            title === "" ? "hidden" : "flex-1"
          }`}
        ></p>
      </div>
    </>
  );
};

export default LineBare;
