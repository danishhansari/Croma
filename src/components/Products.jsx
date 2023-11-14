import { NavLink } from "react-router-dom";

const Products = (currElem) => {
  const { title, price, image, category, id } = currElem;

  return (
    <NavLink to={`/singleproduct/${id}`}>
    <div className="mx-auto mt-11 w-36 md:w-80 transform overflow-hidden rounded-lg bg-white shadow-md duration-300 hover:scale-105 hover:shadow-lg">
      <img
        className="h-48 mx-auto object-cover object-center"
        src={image}
        alt={title}
      />
      <div className="p-4">
        <h2 className="mb-2 text-lg font-medium text-gray-900">{title}</h2>
        <p className="mb-2 text-base text-gray-700">{category} </p>
        <div className="flex items-center">
          <p className="mr-2 text-lg font-semibold text-gray-900">${price}</p>
          <p className="text-base  font-medium text-gray-500 line-through">
            {(price % 3).toFixed(2)}
          </p>
          <p className="ml-auto text-base font-medium text-green-500">
            30% off
          </p>
        </div>
      </div>
    </div>
    </NavLink>
  );
};

export default Products;
