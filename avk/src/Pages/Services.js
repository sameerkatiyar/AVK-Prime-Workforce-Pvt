import React from "react";
import {
  FaUserTie,
  FaUsers,
  FaMoneyCheckAlt,
  FaHandshake,
} from "react-icons/fa";

function Services() {
  const services = [
    {
      id: 1,
      icon: <FaUserTie size={45} className="text-primary" />,
      title: "Permanent Recruitment",
      description:
        "Hire skilled professionals for long-term roles with a streamlined recruitment process.",
    },
    {
      id: 2,
      icon: <FaUsers size={45} className="text-success" />,
      title: "Temporary Staffing",
      description:
        "Flexible staffing solutions for short-term projects and seasonal business requirements.",
    },
    {
      id: 3,
      icon: <FaMoneyCheckAlt size={45} className="text-warning" />,
      title: "Payroll Management",
      description:
        "Accurate salary processing, tax management, and employee payroll administration.",
    },
    {
      id: 4,
      icon: <FaHandshake size={45} className="text-danger" />,
      title: "HR Consulting",
      description:
        "Professional HR consulting, policy development, and workforce management solutions.",
    },
  ];

  return (
    <div className="container py-5">

      {/* Header */}
      <div className="bg-primary text-white text-center rounded-4 p-5 shadow mb-5">
        <h1 className="fw-bold">Our Services</h1>
        <p className="mb-0">
          AVK Prime Workforce provides complete recruitment and HR solutions
          to help businesses build successful teams.
        </p>
      </div>

      <div className="row">

        {services.map((service) => (
          <div
            className="col-lg-3 col-md-6 mb-4 d-flex"
            key={service.id}
          >
            <div className="card service-card shadow border-0 w-100">

              <div className="card-body d-flex flex-column text-center">

                <div className="mb-3">
                  {service.icon}
                </div>

                <h4 className="fw-bold service-title">
                  {service.title}
                </h4>

                <p className="text-muted flex-grow-1">
                  {service.description}
                </p>

                <button className="btn btn-primary mt-auto">
                  Learn More
                </button>

              </div>

            </div>
          </div>
        ))}

      </div>

    </div>
  );
}

export default Services;