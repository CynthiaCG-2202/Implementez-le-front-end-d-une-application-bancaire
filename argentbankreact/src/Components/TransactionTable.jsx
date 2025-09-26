import TransactionRow from "./TransactionRow";

function TransactionTable({ transactions }) {
  return (
    <table className="transaction-table">
      <thead>
        <tr>
          <th>Date</th>
          <th>Description</th>
          <th>Montant</th>
          <th>Balance</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((tx) => (
          <TransactionRow key={tx.id} transaction={tx} />
        ))}
      </tbody>
    </table>
  );
}

export default TransactionTable;
