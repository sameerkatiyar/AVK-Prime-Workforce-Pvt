import React from "react";
import {
  FaBuilding,
  FaMapMarkerAlt,
  FaBriefcase,
  FaMoneyBillWave,
} from "react-icons/fa";

function Jobs() {
  const jobs = [
    {
      id: 1,
      title: "Software Developer",
      company: "ABC Pvt Ltd",
      location: "Noida",
      type: "Full Time",
      salary: "₹8 LPA",
    },
    {
      id: 2,
      title: "Web Designer",
      company: "XYZ Pvt Ltd",
      location: "Kanpur",
      type: "Hybrid",
      salary: "₹5 LPA",
    },
    {
      id: 3,
      title: "HR Executive",
      company: "Prime Workforce",
      location: "Lucknow",
      type: "Full Time",
      salary: "₹4 LPA",
    },
  ];

  return (
    <div className="container py-5">

      {/* Header */}
      <div className="bg-primary text-white rounded-4 shadow p-5 mb-5 text-center">
        <h1 className="fw-bold">Available Jobs</h1>
        <p className="mb-0">
          Find your dream job and apply today.
        </p>
      </div>

      <div className="row">

        {jobs.map((job) => (
          <div className="col-lg-4 col-md-6 mb-4" key={job.id}>
            <div className="card shadow border-0 h-100 job-card">

              <div className="card-body">

                <span className="badge bg-success mb-3">
                  {job.type}
                </span>

                <h4 className="fw-bold">
                  {job.title}
                </h4>

                <p className="text-muted mb-2">
                  <FaBuilding className="me-2 text-primary" />
                  {job.company}
                </p>

                <p className="text-muted mb-2">
                  <FaMapMarkerAlt className="me-2 text-danger" />
                  {job.location}
                </p>

                <p className="text-muted mb-4">
                  <FaMoneyBillWave className="me-2 text-success" />
                  {job.salary}
                </p>

                <button className="btn btn-primary w-100">
                  <FaBriefcase className="me-2" />
                  Apply Now
                </button>

              </div>

            </div>
          </div>
        ))}

      </div>

    </div>
  );
}

export default Jobs;