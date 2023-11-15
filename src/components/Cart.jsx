const Cart = ({ image, price, title }) => {
  return (
    <>
      <img src={image} />
      <h3>{title}</h3>
      <p>{price}</p>
    </>
  );
};

export default Cart;
