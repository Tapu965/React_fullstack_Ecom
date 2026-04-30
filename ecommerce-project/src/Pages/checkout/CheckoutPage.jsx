
import axios from "axios";
import { useState, useEffect } from "react";
import "./checkout-header.css";
import "./CheckoutPage.css";

import { OrderSummary } from "./OrderSummary";
import { PaymentSymmary } from "./PaymentSummary";
export function CheckoutPage({ cart }) {
  const [deliveryOption, setDeliveryOptions] = useState([]);
  const [paymentSummary, setPaymentSummary] = useState(null);
  useEffect(() => {
    axios
      .get("/api/delivery-options?expand=estimatedDeliveryTime")
      .then((Response) => {
        setDeliveryOptions(Response.data);
      });
    axios.get("/api/payment-summary").then((Response) => {
      setPaymentSummary(Response.data);
    });
  }, []);

  return (
    <>
      <title>Checkout</title>
      <div className="checkout-header">
        <div className="header-content">
          <div className="checkout-header-left-section">
            <a href="/">
              <img className="logo" src="images/logo.png" />
              <img className="mobile-logo" src="images/mobile-logo.png" />
            </a>
          </div>

          <div className="checkout-header-middle-section">
            Checkout (
            <a className="return-to-home-link" href="/">
              3 items
            </a>
            )
          </div>

          <div className="checkout-header-right-section">
            <img src="images/icons/checkout-lock-icon.png" />
          </div>
        </div>
      </div>

      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
         <OrderSummary cart={cart} deliveryOption={deliveryOption} />

          <PaymentSymmary PaymentSymmary={paymentSummary} />
        </div>
      </div>
    </>
  );
}
