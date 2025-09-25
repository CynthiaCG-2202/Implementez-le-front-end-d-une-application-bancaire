
import { useSelector } from "react-redux";

function HeaderProfile() {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="header">
      <h1>
        Welcome Back
        <br />
        {user?.firstName && user?.lastName ? `${user.firstName} ${user.lastName}` : "Pseudo"} !
      </h1>
      <button className="edit-button">Edit Name</button>
    </div>
  );
}

export default HeaderProfile;
