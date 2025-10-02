import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { usersuccess, logout } from "../Redux/features/authSlice";
import { useNavigate } from "react-router-dom";
import EditProfileForm from "./EditProfile";
import useGetProfile from "../Hooks/useGetProfile";

function HeaderProfile() {
  const { user, token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {getProfile} = useGetProfile();

  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (!token){
      navigate("/sign-in")
    } else {getProfile()}
  }, [dispatch, token]);

  const handleSave = (updatedUser) => {
    dispatch(usersuccess({ user: updatedUser }));
    setIsEditing(false);
  };

  return (
    <div className="header">
      <h1>
        Welcome Back
        <br />
        {user?.username ? user.username : user?.firstName || "Pseudo"} !
      </h1>

      <div className="header-buttons">
        {!isEditing && (
          <button className="edit-button" onClick={() => setIsEditing(true)}>
            Edit Profile
          </button>
        )}
      </div>

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
