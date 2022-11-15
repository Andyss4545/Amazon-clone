import React from "react";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../../StateProvider/StateProvider";
import { getBasketTotal } from "../../StateProvider/Reducer";
import "../Checkout/SubTotal.css";
import { useNavigate } from "react-router-dom";

function SubTotal() {
  const navigate = useNavigate();

  const [{ basket }] = useStateValue();
  return (
    <div className="subtotal">
      {/* //  react currency format to format currencies and update its value */}
      <CurrencyFormat
        renderText={(value) => {
          return (
            <div>
              <p>
                SubTotal({basket?.length} item) : <strong>{value}</strong>
              </p>

              <small className="subtotal_gift">
                <input type="checkbox" />
                This order contains a gift
              </small>
            </div>
          );
        }}
        decimalScale={2}
        // import getBasket from the reducer as a function and pass basket into it
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      {/* navigate the proceed to the payment page to the browser  */}
      <button onClick={(e) => navigate("/payment", { replace: true })}>
        Procced to Checkout
      </button>
    </div>
  );
}

export default SubTotal;
