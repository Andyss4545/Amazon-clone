import React from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "../../StateProvider/StateProvider";
import "../Checkout/Payment.css";
import CheckoutProduct from "./CheckoutProduct";

const Payment = () => {
  const [{ basket }] = useStateValue();
  const [{ user }] = useStateValue();
  return (
    <div className="payment_container">
      <h1>
        Checkout (<Link to={"/checkout"}>{basket?.length} items</Link>)
      </h1>
      {/** Payment section - delivery address */}
      <div className="payment_section">
        <div className="payment_title">
          <h3>Delivery Address</h3>
        </div>

        <div className="payment_address">
          <p>{user?.email}</p>
          <p>123 Chris Wally</p>
          <p>Los Angeles</p>
        </div>
      </div>
      {/** Payment section - Review Items */}
      <div className="payment_section">
        <div className="payment_title">
          <h3>Review Items and delivery</h3>
        </div>
        <div className="payment_items">
          {basket.map((item) => {
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
      </div>
      {/** Payment section - Payment method */}

      <div className="payment_section">
        <div className="payment_details">
          <h3>Payment Method</h3>
        </div>
      </div>
    </div>
  );
};

export default Payment;
