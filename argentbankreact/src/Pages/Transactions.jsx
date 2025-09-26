import { useParams } from "react-router-dom";
import accountsData from "../Data/dataAccount"; // ou depuis Redux

function Transactions() {
  const { id } = useParams();
  const account = accountsData.find(acc => acc.id === id);

  if (!account) return <p>Compte non trouvé</p>;

  return (
    <main>
      <div className="account-header">
        <h2>{account.title}</h2>
        <p className="account-amount">{account.amount}</p>
        <p className="account-amount-description">{account.description}</p>
      </div>
      {/* Liste des transactions collapsibles ici */}
    </main>
  );
}

export default Transactions;