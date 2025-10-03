import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { usersuccess } from "../Redux/features/authSlice";
import { useNavigate } from "react-router-dom";
import EditProfileForm from "./EditProfile";
import useGetProfile from "../Hooks/useGetProfile";

function HeaderProfile() {
  const { user, token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { getProfile } = useGetProfile();

  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (!token) {
      navigate("/sign-in");
    } else {
      getProfile();
    }
  }, [token]);

  const handleSave = (updatedUser) => {
    dispatch(usersuccess({ user: updatedUser }));
    setIsEditing(false);
  };

  return (
    <div className="header">
      {!isEditing && (
        <h1>
          Welcome Back <br />
          {user?.userName || `${user?.firstName} ${user?.lastName}` || "Pseudo"}!
        </h1>
      )}

      {!isEditing && (
        <button className="edit-button" onClick={() => setIsEditing(true)}>
          Edit Profile
        </button>
      )}

      {isEditing && (
        <EditProfileForm
          user={user}
          token={token}
          onSave={handleSave}
          onCancel={() => setIsEditing(false)}
        />
      )}
    </div>
  );
}

export default HeaderProfile;
