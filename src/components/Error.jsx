import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <>
      <div className="max-w-[750px] h-[50vh] mx-auto relative my-8 py-4">
        <h2 className="text-center text-8xl mt-16 ">404</h2>
        <h3 className="text-center text-4xl">UH OH! You're lost.</h3>
        <p className="text-center text-xl  md:text-2xl mx-auto ">
          Looks like this page went on vacation.
        </p>
        <NavLink
          to="/"
          className="bg-gray-800 text-white md:text-2xl py-2 md:py-4 px-2 rounded block text-center my-4 mx-4"
        >
          GO BACK TO HOME
        </NavLink>
      </div>
    </>
  );
};

export default Error;
