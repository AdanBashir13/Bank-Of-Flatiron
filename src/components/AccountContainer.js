import React, { useEffect, useState } from "react";
import TransactionsList from "./TransactionsList";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  async function fetchData(){
    const response = await fetch("http://localhost:8001/transactions");
    const transactions = await response.json();
    setTransactions(transactions);
    console.log(transactions);

  }

  function addTransaction(transaction) {
    setTransactions([...transactions, transaction]);
  }

  function handleSearchChange(event) {
    setSearchTerm(event.target.value);
  }

  useEffect(() => {fetchData()}, [])

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