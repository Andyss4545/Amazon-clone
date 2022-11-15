import React from "react";
import { useStateValue } from "../../StateProvider/StateProvider";
import "../Checkout/Checkout.css";
import CheckoutProduct from "../Checkout/CheckoutProduct";
import SubTotal from "./SubTotal";

let Checkout = () => {
  // import the basket and useSateValue from stateprovider
  const [{ basket }] = useStateValue();
  const [{ user }] = useStateValue();
  console.log(basket);
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_ad"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2022/GiftGuides/Fuji_holiday_header_desktop_3000x250.jpg"
          alt=""
        />

        {/* tell the browser to display your shopping basket is empty otherwise display your empty basket */}
        {basket?.length === 0 ? (
          <div>
            <h2>Your Shopping Basket is empty</h2>
            <p>
              You have no items in your basket. To buy one, click on "ADD TO
              BASKET" next to the item
            </p>
          </div>
        ) : (
          <div>
            <h3>Hello, {user?.email}</h3>
            <h2 className="checkout_title">Your Shopping Basket</h2>

            {/** List out all of the checkout products */}
            {basket?.map((item) => {
              return (
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              );
            })}
          </div>
        )}
      </div>

      {/* tell the browser to displaay our SubToal when the item in the basket is more than 0 */}

      {basket.length > 0 && (
        <div className="checkout_right">
          <SubTotal />
        </div>
      )}
    </div>
  );
};

export default Checkout;
