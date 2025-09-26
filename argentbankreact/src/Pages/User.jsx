import HeaderProfile from "../Components/HeaderProfile";
import accountsData from "../Data/dataAccount";
import Account from "../Components/Account";

function User() {
  return (
    <main className="main bg-dark">
      <HeaderProfile/>
      {accountsData.map(acc => (
        <Account
          key={acc.id}
          id={acc.id}                
          title={acc.title}
          amount={acc.amount}
          description={acc.description}
        />
      ))}
    </main>
  );
}

export default User;


