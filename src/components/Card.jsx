import React, { useState } from "react";

const Card = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [message, setMessage] = useState("");

  const validateCardNumber = (number) => {
    const cardRegex = /^\d{4}-\d{4}-\d{4}-\d{4}$/;
    return cardRegex.test(number);
  };

  const validateExpiryDate = (date) => {
    const today = new Date();
    const inputDate = new Date(date);
    return !isNaN(inputDate) && inputDate >= today;
  };
  
  const handlePayment = (e) => {
    e.preventDefault();
    
    if (cardNumber && expiryDate && cvv) {
      if (!validateCardNumber(cardNumber)) {
        setMessage("Invalid card number");
        return;
      }

      if (!validateExpiryDate(expiryDate)) {
        setMessage("Invalid date");
        return;
      }
      setMessage("Payment Successful!");
    } else {
      setMessage("Please fill out all fields.");
    }
    

  };


  return (
    <div className="card-container">
      <h2>Payment Form</h2>
      <form onSubmit={handlePayment}>
        <div>
          <label>Card Number:</label>
          <input
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            placeholder="1234-5678-9101-1121"
          />
        </div>
        <div>
          <label>Expiry Date:</label>
          <input
            type="date"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            placeholder="MM/YY"
          />
        </div>
        <div>
          <label>CVV:</label>
          <input
            type="number"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            placeholder="123"
          />
        </div>
        <button type="submit">Pay</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Card;
