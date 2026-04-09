import { useParams, Link } from "react-router-dom";

function JobDetails() {

  const job = {
    title: "Frontend Developer Intern",
    company: "TechSoft Pvt Ltd",
    location: "Ahmedabad",
    salary: "₹15,000 - ₹25,000 / month",
    type: "Internship",
    experience: "0 - 1 Year",
    skills: ["React", "JavaScript", "HTML", "CSS", "Git"],
    description:
      "We are looking for a passionate Frontend Developer Intern who can help us build modern web interfaces using React. The candidate should have a basic understanding of JavaScript and responsive design."
  };

  const { id } = useParams();

  return (
    <div className="container">

      <h1>Job Details</h1>

      <h2>Job ID: {id}</h2>

      <p><strong>Company:</strong> {job.company}</p>
        <p><strong>Location:</strong> {job.location}</p>
        <p><strong>Salary:</strong> {job.salary}</p>
        <p><strong>Job Type:</strong> {job.type}</p>
        <p><strong>Experience:</strong> {job.experience}</p>

        <h3>Required Skills</h3>
        <ul>
          {job.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>

        <h3>Job Description</h3>
        <p>{job.description}</p>


      <Link to={`/apply/${id}`}>
        <button>Apply Now</button>
      </Link>

    </div>
  );
}

export default JobDetails;