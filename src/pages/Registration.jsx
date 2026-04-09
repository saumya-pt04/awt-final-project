import { useState } from "react";

function Register() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Login Successful!");
  };

  return (
    <div className="container">

      <h1>Register</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="fname"
          placeholder="First Name"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="lname"
          placeholder="Last Name"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <input
          type="password"
          placeholder="Confirm Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Register</button>

      </form>
      <p>Already have an account? <a href="/login">Login</a></p>

    </div>
  );
}

export default Register;