import React, { useState } from "react";
import TransactionsList from "./TransactionsList";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
  const [transactions, setTransactions] = useState([]);

  function addTransaction(transaction) {
    transactions.push(transaction); // Modifies the original array
    setTransactions(transactions); // Update the state with the modified array
  }

  return (
    <div>
      <AddTransactionForm onAddTransaction={addTransaction} />
      <TransactionsList transactions={transactions} />
    </div>
  );
}

export default AccountContainer;
