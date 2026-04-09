import { Link } from "react-router-dom";

function JobCard({ job }) {

  return (
    <div className="job-card">

      <h3>{job.title}</h3>

      <p><b>Company:</b> {job.company}</p>
      <p><b>Location:</b> {job.location}</p>

      <Link to={`/job/${job.id}`}>
        <button>View Details</button>
      </Link>

    </div>
  );
}

export default JobCard;