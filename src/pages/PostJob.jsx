import { useState } from "react";

function PostJob() {

  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Job Posted Successfully!");
  };

  return (
    <div className="container">

      <h1>Post a Job</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Job Title"
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="text"
          placeholder="Company"
          onChange={(e) => setCompany(e.target.value)}
        />

        <input
          type="text"
          placeholder="Location"
          onChange={(e) => setLocation(e.target.value)}
        />

        <button type="submit">Post Job</button>

      </form>

    </div>
  );
}

export default PostJob;