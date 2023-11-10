// import { NavLink } from "react-router-dom";
import { BsChevronRight } from "react-icons/bs";
import { NavLink } from "react-router-dom";
const About = () => {
  return (
    <>
      <div className="flex items-center m-8 mt-28">
        <NavLink to="/" className="text-2xl hover:text-blue-500">
          Croma
        </NavLink>
        <BsChevronRight size={30} />
        <p className="text-2xl hover:text-blue-500">About Croma</p>
      </div>

      <div className="p-2 md:w-[80%] mx-auto flex flex-col md:flex-row gap-[2rem]">
        <img
          src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1605294473/Croma%20Assets/CMS/A4%20Cover%20image52_jpg8991554994206.jpg?tr=w-240 240w,https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1605294473/Croma%20Assets/CMS/A4%20Cover%20image52_jpg8991554994206.jpg?tr=w-360 360w,https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1605294473/Croma%20Assets/CMS/A4%20Cover%20image52_jpg8991554994206.jpg?tr=w-720 720w,https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1605294473/Croma%20Assets/CMS/A4%20Cover%20image52_jpg8991554994206.jpg?tr=w-1440 1440w"
          alt="undefined"
          className="w-full"
        />
        <div className="about w-full mt-4 text-lg md:text-2xl">
          <p>
            Launched in 2006, Croma was the first one-of-its kind large format
            specialist retail store that catered to all multi-brand digital
            gadgets and home electronic needs in India. Over a decade since its
            inception, Croma has almost become synonymous for all electronics
            needs, with its tech-savvy staff, product range, Staged presence and
            the will to help customers.
          </p>
          <p className="mt-4">
            With this intent to delight customers all along, Croma launched its
            own label products in 2008. Brand Croma stands for – Life, More
            Beautiful; the promise is based not just on the beauty in the way
            they look but also the value they offer to a customer’s life. The
            range is a perfect fit, for those who desire a completely
            feature-packed and quality product.
          </p>
        </div>
      </div>

      <div className="p-2 md:w-[80%] mx-auto mt-8 text-lg md:text-2xl">
        <h2 className="text-xl md:text-3xl underline text-center my-4">About TATA Group</h2>
        <p>
          The Tata Group, a global enterprise, was founded in 1868 by Sir
          Jamsetji Tata. The group, with its headquarters in Mumbai, encompasses
          30 primary business sectors across 10 verticals. With operations in
          over 100 countries across continents, Tata Group is determined to
          serve with the mission “'to improve the quality of life of the
          communities we serve globally, through long-term stakeholder value
          creation based on Leadership with Trust”. Standing strong to its
          mission, the Tata Group has not just established but also financed
          various institutions for researches, education & cultural enrichment.
        </p>
        <p className="mt-2">
          Each company under the Brand Tata operates under the expertise of its
          own board of directors. With a collective employee strength of over
          7,20,000, the group has around 28 publicly-listed companies. Some
          major companies under the group are Indian Hotels, Infinti Retail,
          Tata Advanced Systems, Tata Capital, Tata Chemicals, Tata
          Communications, Tata Consultancy Services, Tata Consumer Products,
          Tata Motors, Tata Power, Tata Steel, Titan, and Trent Hypermarket.
        </p>
      </div>
    </>
  );
};

export default About;
