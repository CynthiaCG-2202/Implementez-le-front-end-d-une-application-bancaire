import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { usersuccess, logout } from "../Redux/features/authSlice";
import { useNavigate } from "react-router-dom";
import EditProfileForm from "./EditProfile";

function HeaderProfile() {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isEditing, setIsEditing] = useState(false);

  const token = localStorage.getItem("token") || sessionStorage.getItem("token");

  // Récupérer le profil à l'ouverture
  useEffect(() => {
    if (!token) return;
    fetch("http://localhost:3001/api/v1/user/profile", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(async (res) => {
        if (!res.ok) throw new Error("Impossible de récupérer le profil");
        const data = await res.json();
        dispatch(usersuccess({ user: data.body }));
      })
      .catch((err) => console.error(err));
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
