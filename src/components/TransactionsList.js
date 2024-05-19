import React from "react";
import Transaction from "./Transaction";

function TransactionsList({ transactions, searchTerm }) {
  const filteredTransactions = transactions.filter(transaction =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Transactions List</h2>
      <ul>
        {filteredTransactions.map((transaction, index) => (
          <Transaction key={index} transaction={transaction} />
        ))}
      </ul>
    </div>
  );
}

export default TransactionsList;
