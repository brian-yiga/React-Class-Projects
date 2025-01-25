import React, { useState } from "react";
import WelcomePage from "./components/WelcomePage";

const App = () => {
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleEmailChange = (e) => {
    setUserEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (userEmail && password) {
      setIsSubmitted(true);
    } else {
      alert("Please Fill in Both Fields");
    }
  };

  return (
    <div className="login">
      {!isSubmitted ? (
        <>
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Enter Your Email"
              id="email"
              value={userEmail}
              onChange={handleEmailChange}
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
            />
            <input type="submit" id="submitBtn" />
          </form>
        </>
      ) : (
        <WelcomePage name={userEmail.split("@")[0] || "User"} />
      )}
    </div>
  );
};

export default App;
