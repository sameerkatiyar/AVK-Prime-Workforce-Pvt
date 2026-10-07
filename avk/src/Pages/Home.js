import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary text-white py-5">
        <div className="container">
          <div className="row align-items-center">

            <div className="col-md-6">
              <h1 className="display-4 fw-bold">
                Welcome to AVK Prime Workforce
              </h1>

              <p className="lead mt-3">
                Connecting talented professionals with leading companies.
                We provide reliable recruitment, workforce management, and
                HR solutions for businesses of all sizes.
              </p>

              <Link to="/jobs" className="btn btn-warning btn-lg me-3">
                Find Jobs
              </Link>

              <Link to="/contact" className="btn btn-outline-light btn-lg">
                Contact Us
              </Link>
            </div>

            <div className="col-md-6 text-center mt-4 mt-md-0">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=700"
                alt="Prime Workforce"
                className="img-fluid rounded shadow"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Services */}
      <section className="container py-5">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Our Services</h2>
          <p className="text-muted">
            We provide complete workforce management solutions.
          </p>
        </div>

        <div className="row">

          <div className="col-md-4 mb-4">
            <div className="card shadow h-100 text-center">
              <div className="card-body">
                <h3>Recruitment</h3>
                <p>
                  Helping companies hire skilled professionals across
                  multiple industries.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card shadow h-100 text-center">
              <div className="card-body">
                <h3>HR Management</h3>
                <p>
                  Employee records, attendance, payroll, and HR support
                  in one place.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card shadow h-100 text-center">
              <div className="card-body">
                <h3>Career Support</h3>
                <p>
                  Helping job seekers discover opportunities and grow
                  their careers.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Statistics */}
      <section className="bg-light py-5">
        <div className="container">
          <div className="row text-center">

            <div className="col-md-3">
              <h2 className="text-primary fw-bold">500+</h2>
              <p>Companies</p>
            </div>

            <div className="col-md-3">
              <h2 className="text-success fw-bold">10,000+</h2>
              <p>Job Seekers</p>
            </div>

            <div className="col-md-3">
              <h2 className="text-warning fw-bold">1,500+</h2>
              <p>Jobs Posted</p>
            </div>

            <div className="col-md-3">
              <h2 className="text-danger fw-bold">98%</h2>
              <p>Client Satisfaction</p>
            </div>

          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="container py-5">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Why Choose AVK Prime Workforce?</h2>
        </div>

        <div className="row">

          <div className="col-md-4 mb-4">
            <div className="card shadow h-100">
              <div className="card-body text-center">
                <h4>Experienced Team</h4>
                <p>
                  Dedicated HR and recruitment experts delivering
                  quality workforce solutions.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card shadow h-100">
              <div className="card-body text-center">
                <h4>Trusted Platform</h4>
                <p>
                  Secure and reliable recruitment services for
                  employers and job seekers.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card shadow h-100">
              <div className="card-body text-center">
                <h4>24/7 Support</h4>
                <p>
                  Our support team is always available to help
                  candidates and employers.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Call To Action */}
      <section className="bg-primary text-white py-5 text-center">
        <div className="container">
          <h2>Start Your Career Journey Today</h2>
          <p className="mb-4">
            Join Prime Workforce and discover the right opportunities for your future.
          </p>

          <Link to="/register" className="btn btn-warning btn-lg">
            Register Now
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;