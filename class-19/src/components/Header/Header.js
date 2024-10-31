import { Link } from "react-router-dom";
import "./header.css";
import { IoCartOutline } from "react-icons/io5";
import { useContext } from "react";
import { CartContext } from "../Context/CartProvider";


const Header = () => {
  const {cart} = useContext(CartContext);
  
  return (
    <header>
      <Link to={"/"} className="logo">Store</Link>
      <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"/products"}>Products</Link>
      </nav>
      <Link to={"/cart"} className="quick-cart">
        <span><IoCartOutline /></span>
        <span className="count">{cart.length}</span>
      </Link>
    </header>
  );
};

export default Header;