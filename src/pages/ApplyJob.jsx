import { useState } from "react";

function ApplyJob() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [university, setUniversity] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Application Submitted Successfully!");
  };

  return (
    <div className="container">

      <h1>Apply for Job</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Full Name"
          onChange={(e) => setFullName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="text"
          placeholder="Job Title"
          onChange={(e) => setJobTitle(e.target.value)}
        />

        <input
          type="text"
          placeholder="University"
          onChange={(e) => setUniversity(e.target.value)}
        />

        <input
          type="file"
          onChange={(e) => setResume(e.target.files[0])}
        />

        <button type="submit">Submit Application</button>

      </form>
      

    </div>
  );
}
const applyJob = async (jobId) => {
  const token = localStorage.getItem("token");

  const res = await fetch("http://localhost:5000/apply", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({ jobId })
  });

  const data = await res.json();
  alert(data.message);
};

export default ApplyJob;






