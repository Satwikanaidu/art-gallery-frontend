import React, { useState } from "react";

const Checkout = () => {
  const [form, setForm] = useState({
    name: "",
    address: "",
    paymentMethod: "credit-card",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Order Submitted", form);
    alert("Order successfully placed!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Checkout</h1>
      <label>Name:</label>
      <input
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
        required
      />
      <label>Address:</label>
      <textarea
        name="address"
        value={form.address}
        onChange={handleChange}
        required
      ></textarea>
      <label>Payment Method:</label>
      <select
        name="paymentMethod"
        value={form.paymentMethod}
        onChange={handleChange}
      >
        <option value="credit-card">Credit Card</option>
        <option value="paypal">PayPal</option>
      </select>
      <button type="submit">Place Order</button>
    </form>
  );
};

export default Checkout;
