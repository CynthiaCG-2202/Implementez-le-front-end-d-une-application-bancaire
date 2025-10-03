import { useState, useEffect } from "react";
import useUpdateProfile from "../Hooks/useUpdateProfile";

function EditProfileForm({ user, token, onSave, onCancel }) {
  const [username, setUsername] = useState("");
  const { updateProfile, loading, error } = useUpdateProfile(token);

  useEffect(() => {
    if (user?.userName) setUsername(user.userName);
  }, [user]);

  const handleSave = async () => {
    if (!username) return;
    try {
      const updatedUser = await updateProfile({ userName: username });
      onSave(updatedUser);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="edit-form-container">
      <div className="form-row">
        <label>Username:</label>
        <input
          type="text"
          value={username || ""}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="form-row">
        <label>First Name:</label>
        <input type="text" value={user?.firstName || ""} disabled />
      </div>
      <div className="form-row">
        <label>Last Name:</label>
        <input type="text" value={user?.lastName || ""} disabled />
      </div>

      <div className="form-buttons">
        <button onClick={handleSave} disabled={loading}>
          {loading ? "Saving..." : "Save"}
        </button>
        <button onClick={onCancel} disabled={loading}>
          Cancel
        </button>
      </div>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
}

export default EditProfileForm;
