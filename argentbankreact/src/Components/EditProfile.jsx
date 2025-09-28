import { useState } from "react";

function EditProfileForm({ user, token, onSave, onCancel }) {
  const [username, setUsername] = useState(user?.username || "");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSave = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch("http://localhost:3001/api/v1/user/profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ username }),
      });

      if (!response.ok) throw new Error("Impossible de modifier le profil");
      const updatedUser = await response.json();
      onSave(updatedUser.body);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="edit-form-container">
      <div className="form-row">
        <label>Username:</label>
        <input
          type="text"
          value={username}
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

      {error && <p className="error-message">{error}</p>}

      <div className="form-buttons">
        <button className="save-button" onClick={handleSave} disabled={loading}>
          {loading ? "Saving..." : "Save"}
        </button>
        <button className="cancel-button" onClick={onCancel} disabled={loading}>
          Cancel
        </button>
      </div>
    </div>
  );
}

export default EditProfileForm;
