import { NavLink } from "react-router-dom";
import { IoStar } from "react-icons/io5";
import { useContext } from "react";
import { CartContext } from "../components/Context/CartProvider";

const ProductCard = (product) => {
  const { addToCart } = useContext(CartContext);
  const { id, image, title, price, rating } = product?.product;

  return (
    <div className='product-card'>
      <figure>
        <img src={image} alt="Product" />
      </figure>
      <div className="content">
        <h3 className="product-title">{title}</h3>
        <div className="price_rating">
          <span className="price">{price}$</span>
          <span className="rating"><IoStar /> {rating?.rate}</span>
        </div>
        <div className="button-group">
          <button onClick={() => addToCart(product)}>Add To Cart</button>
          <NavLink to={`/product/${id}`}>Details</NavLink>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;