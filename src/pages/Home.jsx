import { useState } from "react";
import JobCard from "../components/JobCard";
import JobFilter from "../components/JobFilter";

function Home() {

  const [search, setSearch] = useState("");

  const jobs = [
    {
      id: 1,
      title: "Frontend Intern",
      company: "TechSoft",
      location: "Ahmedabad"
    },
    {
      id: 2,
      title: "React Developer",
      company: "Innovate Pvt Ltd",
      location: "Remote"
    },
    {
      id: 3,
      title: "Backend Intern",
      company: "CodeWorks",
      location: "Bangalore"
    }
  ];

  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">

      <h1>Available Jobs</h1>

      <JobFilter setSearch={setSearch} />

      {filteredJobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
      

    </div>
  );
}

export default Home;