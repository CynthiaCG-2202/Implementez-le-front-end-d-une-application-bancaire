import { useNavigate } from "react-router-dom";

function Account({ id, title, amount, description }) {
  const navigate = useNavigate();

  const handleViewTransactions = () => {
    navigate(`/transactions/${id}`);
  };

  return (
    <section className="account">
      <h2 className="sr-only">Accounts</h2>
      <div className="account-content-wrapper">
        <h3 className="account-title">{title}</h3>
        <p className="account-amount">{amount}</p>
        <p className="account-amount-description">{description}</p>
      </div>
      <div className="account-content-wrapper cta">
        <button
          type="button"
          className="transaction-button"
          onClick={handleViewTransactions}
        >
          View transactions
        </button>
      </div>
    </section>
  );
}

export default Account;
