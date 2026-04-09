import { useState } from "react";

function EmployerDashboard() {

  const [name, setName] = useState("Saumya Patel");
  const [email, setEmail] = useState("saumya@email.com");
  const [university, setUniversity] = useState("Marwadi University");
  const [location, setLocation] = useState("Rajkot");
  const [skills, setSkills] = useState("React, JavaScript, HTML, CSS");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Profile Updated Successfully!");
  };

  return (
    <div className="container">

      <h1>My Profile</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          value={name}
          placeholder="Full Name"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="text"
          value={university}
          placeholder="University"
          onChange={(e) => setUniversity(e.target.value)}
        />

        <input
          type="text"
          value={location}
          placeholder="Location"
          onChange={(e) => setLocation(e.target.value)}
        />

        <input
          type="text"
          value={skills}
          placeholder="Skills"
          onChange={(e) => setSkills(e.target.value)}
        />

        <button type="submit">Update Profile</button>

      </form>

    </div>
  );
}

export default EmployerDashboard;