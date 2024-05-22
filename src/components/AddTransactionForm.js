import React, { useState } from "react";

function AddTransactionForm(props) {
  const [formData, setFormData] = useState({
    date: "",
    description: "",
    category: "",
    amount: ""
  });

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.onAddTransaction(formData); // Ensure the transaction data is passed correctly
    setFormData({
      date: "",
      description: "",
      category: "",
      amount: ""
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="date" name="date" value={formData.date} onChange={handleChange} />
        <input type="text" name="description" placeholder="Description" value={formData.description} onChange={handleChange} />
        <input type="text" name="category" placeholder="Category" value={formData.category} onChange={handleChange} />
        <input type="number" name="amount" placeholder="Amount" step="0.01" value={formData.amount} onChange={handleChange} />
        <button type="submit">Add Transaction</button>
      </form>
    </div>
  );
}

export default AddTransactionForm;