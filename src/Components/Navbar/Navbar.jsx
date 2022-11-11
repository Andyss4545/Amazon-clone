import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "../Navbar/Navbar.css";
import { useStateValue } from "../../StateProvider/StateProvider";

function Navbar() {
  // import the current state of the basket from stateprovider.jsx
  let [{ basket }] = useStateValue();
  console.log(basket);
  return (
    <div className="nav">
      {/* wrap logo in the router Link tag*/}
      <Link to={"/"}>
        <img
          className="nav_logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>

      {/* search box */}
      <div className="nav_search">
        <input type="text" />
        <button className="nav_searchbtn">
          <SearchIcon />
        </button>
      </div>

      <div className="nav_info">
        {/* {1 links} */}
        <Link className="nav_link" to={"/login"}>
          <small className="nav_topline1">Hello Tope</small>
          <p className="nav_topline2">Sign In</p>
        </Link>

        {/* {2 links} */}
        <Link className="nav_link" to={"/login"}>
          <small className="nav_topline1">Returns</small>
          <p className="nav_topline2">Orders</p>
        </Link>

        {/* {3 links} */}
        <Link className="nav_link" to={"/"}>
          <small className="nav_topline1">Your</small>
          <p className="nav_topline2">Prime</p>
        </Link>
        {/* 4th Link */}
        <Link className="nav_link nav_checkout" to={"/checkout"}>
          {/* Shopping basket */}

          {/* show the Number of items in the basket */}
          <ShoppingCartIcon className="nav_shopping" />
          <span>{basket?.length}</span>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
