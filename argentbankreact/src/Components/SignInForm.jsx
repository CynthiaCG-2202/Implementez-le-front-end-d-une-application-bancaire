import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../Redux/features/authSlice";

function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    try {
      // 1️⃣ Login pour récupérer le token
      const response = await fetch("http://localhost:3001/api/v1/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) throw new Error("Identifiants incorrects");
      const data = await response.json();
      const token = data.body.token;

      // Stocker le token
      if (rememberMe) localStorage.setItem("token", token);
      else sessionStorage.setItem("token", token);

      // 2️⃣ Récupérer les infos de l’utilisateur
      const profileResponse = await fetch("http://localhost:3001/api/v1/user/profile", {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!profileResponse.ok) throw new Error("Impossible de récupérer le profil");
      const profileData = await profileResponse.json();

      // Mettre à jour Redux
      dispatch(loginSuccess({ token, user: profileData.body }));

      navigate("/user");
    } catch (error) {
      console.error("Erreur API :", error);
      setErrorMessage(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="sign-in-form">
      <div className="input-wrapper">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="input-wrapper">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <div className="input-remember">
        <input
          type="checkbox"
          id="remember-me"
          checked={rememberMe}
          onChange={(e) => setRememberMe(e.target.checked)}
        />
        <label htmlFor="remember-me">Remember me</label>
      </div>

      <button type="submit" className="sign-in-button">
        Sign In
      </button>

      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
    </form>
  );
}

export default SignInForm;
