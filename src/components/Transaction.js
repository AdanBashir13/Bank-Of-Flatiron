import React from "react";
import Transaction from "./Transaction";

function TransactionsList(props) {
  return (
    <div>
      <h2>Transactions List</h2>
      <ul>
        {props.transactions.map((transaction, index) => (
          <Transaction transaction={transaction} />
        ))}
      </ul>
    </div>
  );
}

export default TransactionsList;
