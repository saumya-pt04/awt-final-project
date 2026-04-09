import axios from "axios";

const handleSubmit = async (e) => {
  e.preventDefault();

  const res = await fetch("http://localhost:5000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ username: email, password })
  });

  const data = await res.json();

  if (data.token) {
    localStorage.setItem("token", data.token); // store JWT
    navigate("/home");
  } else {
    alert("Login failed");
  }
};
const token = localStorage.getItem("token");

fetch("http://localhost:5000/profile", {
  headers: {
    Authorization: `Bearer ${token}`
  }
});

export default API;