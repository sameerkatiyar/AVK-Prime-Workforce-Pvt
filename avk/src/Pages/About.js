import React from "react";

const About = () => {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold text-primary">About AVK Prime Workforce</h1>
        <p className="lead text-muted">
          Connecting talented professionals with leading organizations.
        </p>
      </div>

      <div className="row align-items-center">
        {/* Left Side */}
        <div className="col-lg-6">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
            alt="Prime Workforce Team"
            className="img-fluid rounded shadow"
          />
        </div>

        {/* Right Side */}
        <div className="col-lg-6 mt-4 mt-lg-0">
          <h2 className="fw-bold">Who We Are</h2>
          <p>
            Prime Workforce is a modern workforce management and recruitment
            platform dedicated to connecting skilled professionals with
            reputable companies. Our goal is to simplify hiring and provide
            businesses with the right talent while helping job seekers find
            meaningful career opportunities.
          </p>

          <p>
            We use modern web technologies to provide secure, efficient, and
            user-friendly recruitment solutions for employers and candidates.
          </p>

          <button className="btn btn-primary mt-3">
            Learn More
          </button>
        </div>
      </div>

      <hr className="my-5" />

      <div className="row text-center">
        <div className="col-md-4 mb-4">
          <div className="card shadow h-100">
            <div className="card-body">
              <h3 className="text-primary">Our Mission</h3>
              <p>
                To bridge the gap between employers and job seekers through
                innovative workforce management solutions.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card shadow h-100">
            <div className="card-body">
              <h3 className="text-success">Our Vision</h3>
              <p>
                To become a trusted global platform for recruitment,
                employee management, and career growth.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card shadow h-100">
            <div className="card-body">
              <h3 className="text-warning">Our Values</h3>
              <p>
                Integrity, Innovation, Excellence, Transparency, and Customer
                Satisfaction are the core values that drive our organization.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5 text-center">
        <h2 className="fw-bold">Why Choose AVK Prime Workforce?</h2>
        <div className="row mt-4">
          <div className="col-md-3">
            <h4 className="text-primary">500+</h4>
            <p>Companies Served</p>
          </div>

          <div className="col-md-3">
            <h4 className="text-success">10,000+</h4>
            <p>Job Seekers</p>
          </div>

          <div className="col-md-3">
            <h4 className="text-warning">1,500+</h4>
            <p>Jobs Posted</p>
          </div>

          <div className="col-md-3">
            <h4 className="text-danger">98%</h4>
            <p>Client Satisfaction</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;