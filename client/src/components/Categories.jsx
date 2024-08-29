const Categories = ({ classes }) => {
  return (
    <>
      <div
        className={`${classes}  w-[6.7rem] left-[6.5rem] md:left-[8.6rem] top-[3rem] md:top-[3.7rem] font-normal font-serif h-[16rem] md:h-[20rem]`}
      >
        <div className="flex gap-6">
          <ul className="categories-list">
            <li>
              <a>cleaning</a>
            </li>
            <li>
              <a>deliverty</a>
            </li>
            <li>
              <a>cleaning</a>
            </li>
            <li>
              <a>cleaning</a>
            </li>
            <li>
              <a>cleaning</a>
            </li>
            <li>
              <a>cleaning</a>
            </li>
            <li>
              <a>cleaning</a>
            </li>
            <li>
              <a>cleaning</a>
            </li>
            <li>
              <a>cleaning</a>
            </li>
            <li>
              <a>cleaning</a>
            </li>
            <li>
              <a className="underline text-blue-700">View More</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Categories;
