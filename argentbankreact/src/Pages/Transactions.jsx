import { useParams } from "react-router-dom";
import accountsData from "../Data/dataAccount";
import TransactionTable from "../Components/TransactionTable";

const transactionTemplate = {
  date: "27-02-20",
  description: "Golden Sun Bakery",
  amount: 8.0,
  balance: 298.0,
  details: {
    type: "Electronic",
    category: "food",
    note: "lorem ipsum"
  }
};

const transactions = Array(5)
  .fill(transactionTemplate)
  .map((tx, index) => ({ ...tx, id: index + 1 }));

function Transactions() {
  const { id } = useParams();
  const account = accountsData.find(acc => acc.id === id);

  return (
    <main className="account-page">
      <div className="account-header">
        <h2>{account.title}</h2>
        <p className="account-amount-page">{account.amount}</p>
        <p className="account-amount-page-description">{account.description}</p>
      </div>
      <TransactionTable transactions={transactions} />
    </main>
  );
}

export default Transactions;
