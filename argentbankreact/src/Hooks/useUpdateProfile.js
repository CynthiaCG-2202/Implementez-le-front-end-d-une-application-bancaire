import { useState } from "react";

const useUpdateProfile = (token) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const updateProfile = async (userData) => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch("http://localhost:3001/api/v1/user/profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) throw new Error("Impossible de modifier le profil");
      const data = await response.json();
      return data.body;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { updateProfile, loading, error };
};

export default useUpdateProfile;
