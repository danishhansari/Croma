import {
  usefulLinks,
  productsLinks,
  franchiseOpportunity,
  groomingPersonal,
} from "../data/data";
const Footer = () => {
  return (
    <div className="bg-gray-900 text-white py-8 mt-22">
      <div className="flex p-2 md:w-[80%] mx-auto justify-between flex-wrap gap-8">


        <div className="flex flex-col">
          <h2 className="text-xl md:text-3xl underline mb-2">Products Links</h2>
          {productsLinks.map((curr, index) => {
            return (
              <p key={index} className="text-md md:text-xl mb-1">
                {curr}
              </p>
            );
          })}
        </div>

        <div className="flex flex-col">
          <h2 className="text-xl md:text-3xl underline mb-2">Franchise Opportunity</h2>
          {franchiseOpportunity.map((curr, index) => {
            return (
              <p key={index} className="text-md md:text-xl mb-1">
                {curr}
              </p>
            );
          })}
        </div>

        <div className="flex flex-col">
          <h2 className="text-xl md:text-3xl underline mb-2">Useful Links</h2>
          {usefulLinks.map((curr, index) => {
            return (
              <p key={index} className="text-md md:text-xl mb-1">
                {curr}
              </p>
            );
          })}
        </div>

        <div className="flex flex-col">
          <h2 className="text-xl md:text-3xl underline mb-2">Grooming & Personal Care</h2>
          {groomingPersonal.map((curr, index) => {
            return (
              <p key={index} className="text-md md:text-xl mb-1">
                {curr}
              </p>
            );
          })}
        </div>


      </div>

      <div className="text-center mt-4 tracking-wider">
       &copy; Copyright {new Date().getFullYear()} Croma. All rights reserved
      </div>
    </div>
  );
};

export default Footer;
