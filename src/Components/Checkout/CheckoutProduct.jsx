import React from "react";
import StarIcon from "@mui/icons-material/Star";
import "../Checkout/CheckoutProduct.css";
import { useStateValue } from "../../StateProvider/StateProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// pass props such as id, title, price, image, rating from Checkout.jsx
let CheckoutProduct = ({ id, price, image, rating, title }) => {
  let [{ basket }, dispatch] = useStateValue();

  // remove item from the basket --Note we use remove using its id
  let removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });

    // toast is a library to create notification when button is clicked
    toast("Product removed from cart", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <div className="checkoutProduct">
      <img src={image} alt={title} />

      <div className="checkoutProduct_info">
        <p className="checkoutProduct_title">{title}</p>

        <div className="checkoutProduct_price">
          <small>$</small>
          <p>{price}</p>
        </div>

        {/* loop through the rating number 5, with star icon as many times as that number */}
        <div className="checkoutProduct_rating">
          {Array(rating)
            .fill()
            .map((_) => {
              return (
                <p className="checkoutProduct_star">
                  <StarIcon />
                </p>
              );
            })}
        </div>

        {/* when removeFromBasket is clicked, tell the browser to remove the items using onclick function */}
        <button onClick={removeFromBasket} className="checkoutProduct_btn">
          Remove From Basket
        </button>
        <ToastContainer />
      </div>
    </div>
  );
};

export default CheckoutProduct;
