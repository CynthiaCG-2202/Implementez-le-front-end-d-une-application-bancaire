function Account() {
    return (
        <section className="account">
            <div className="account-content-wrapper">
                <h3 className="account-title">ArgentBank Test</h3>
                <p className="account-amount">00000$</p>
                <p className="account-amount-description">Available Balance</p>
            </div>
            <div className="account-content-wrapper cta">
                <button className="transaction-button">View Transactions</button>
            </div>
        </section>
    );
}


export default Account;