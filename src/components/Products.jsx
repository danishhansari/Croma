const Products = (currElem) => {
  console.log("djlks");
  const { title, price, image, category } = currElem;
  return (
    //   <div className="w-44">
    //     <figure>
    //       <img src={image} className="w-28 mx-auto" alt={title} />
    //       <figcaption className="text-gray-400">{category}</figcaption>
    //     </figure>
    //     <div className="card-data">
    //       <h3>{title}</h3>
    //       <p className="">${price}</p>
    //     </div>
    //   </div>

    <div className="mx-auto mt-11 w-80 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
      <img
        className="h-48 mx-auto object-cover object-center"
        src={image}
        alt={title}
      />
      <div className="p-4">
        <h2 className="mb-2 text-lg font-medium dark:text-white text-gray-900">
          {title}
        </h2>
        <p className="mb-2 text-base dark:text-gray-300 text-gray-700">
          {category}{" "}
        </p>
        <div className="flex items-center">
          <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">
            ${price}
          </p>
          <p className="text-base  font-medium text-gray-500 line-through dark:text-gray-300">
            {(price % 3).toFixed(2)}
          </p>
          <p className="ml-auto text-base font-medium text-green-500">
            30% off
          </p>
        </div>
      </div>
    </div>
  );
};

export default Products;
