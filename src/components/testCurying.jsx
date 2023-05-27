import { useState } from "react";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleInputChange = (setter) => (event) => {
    setter(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Logika logowania użytkownika
    console.log("Username:", username);
    console.log("Password:", password);
    // Dodatkowe operacje...
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={handleInputChange(setUsername)}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={handleInputChange(setPassword)}
        />
      </label>
      <br />
      <button type="submit">Log in</button>
    </form>
  );
};

export default LoginForm;
