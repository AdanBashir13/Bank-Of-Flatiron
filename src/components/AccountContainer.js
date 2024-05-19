import React, { useState } from "react";
import TransactionsList from "./TransactionsList";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  function addTransaction(transaction) {
    setTransactions([...transactions, transaction]);
  }

  function handleSearchChange(event) {
    setSearchTerm(event.target.value);
  }

  return (
    <div>
      <AddTransactionForm onAddTransaction={addTransaction} />
      <input
        type="text"
        placeholder="Search transactions..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <TransactionsList transactions={transactions} searchTerm={searchTerm} />
    </div>
  );
}

export default AccountContainer;
