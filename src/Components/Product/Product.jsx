import React from "react";
import "../Product/Product.css";
import StarIcon from "@mui/icons-material/Star";
import { useStateValue } from "../../StateProvider/StateProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// id, title, price, rating image are all props from products components in Home.jsx
function Product({ id, title, price, rating, image }) {
  let [{ basket }, dispatch] = useStateValue();

  // dispatch or send items  to the basket in reducer
  let addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        price: price,
        rating: rating,
        image: image,
      },
    });

    toast.success(" Product added to card", {
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
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <div className="product_price">
          <small>$</small>
          <p>{price}</p>
        </div>

        {/* loop through the rating number 5, with star icon as many times as that number */}
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_) => {
              return (
                <p className="product_star">
                  <StarIcon />
                </p>
              );
            })}
        </div>
      </div>

      {/* Add image to img src with props*/}
      <img src={image} alt={title} />

      {/* call the addToBasket function with onclick on the button */}
      <button onClick={addToBasket}>Add to basket</button>
      <ToastContainer />
    </div>
  );
}

export default Product;
