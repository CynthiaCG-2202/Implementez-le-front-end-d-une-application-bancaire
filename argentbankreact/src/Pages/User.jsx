import { useSelector } from "react-redux";
import HeaderProfile from "../Components/HeaderProfile";
import Account from "../Components/Account";

function User() {
  const { user } = useSelector((state) => state.auth);
  const accounts = user?.accounts || [];

  return (
    <main className="main bg-dark">
      <HeaderProfile />
      {accounts.length > 0 ? (
        accounts.map((account, index) => <Account key={index} {...account} />)
      ) : (
        <Account/>
      )}
    </main>
  );
}

export default User;
