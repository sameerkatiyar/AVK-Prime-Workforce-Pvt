import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-dark text-light mt-5">
      <div className="container py-5">
        <div className="row">
          {/* Company Info */}
          <div className="col-md-4 mb-4">
            <h4 className="text-warning">AVK Prime Workforce</h4>
            <p>
              Prime Workforce is a recruitment and workforce management platform
              that helps businesses hire talented professionals and supports job
              seekers in finding the right career opportunities.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-2 mb-4">
            <h5 className="text-warning">Quick Links</h5>

            <ul className="list-unstyled">
              <li>
                <Link to="/" className="text-light text-decoration-none">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/about" className="text-light text-decoration-none">
                  About
                </Link>
              </li>

              <li>
                <Link
                  to="/services"
                  className="text-light text-decoration-none"
                >
                  Services
                </Link>
              </li>

              <li>
                <Link to="/jobs" className="text-light text-decoration-none">
                  Jobs
                </Link>
              </li>

              <li>
                <Link to="/contact" className="text-light text-decoration-none">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-md-3 mb-4">
            <h5 className="text-warning">Our Services</h5>

            <ul className="list-unstyled">
              <li>✔ Recruitment</li>
              <li>✔ HR Management</li>
              <li>✔ Payroll Services</li>
              <li>✔ Employee Management</li>
              <li>✔ Career Guidance</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-md-3 mb-4">
            <h5 className="text-warning">Contact Us</h5>

            <p>
              <FaMapMarkerAlt className="me-2" />
              Kanpur, Uttar Pradesh
            </p>

            <p>
              <FaPhoneAlt className="me-2" />
              <a
                href="tel:+918887581373"
                className="text-light text-decoration-none"
              >
                +91 8887581373
              </a>
            </p>

            <p>
              <FaEnvelope className="me-2" />
              <a
                href="mailto:sameerkatiyar2019@gmail.com"
                className="text-light text-decoration-none"
              >
                sameerkatiyar2019@gmail.com
              </a>
            </p>

            <div className="mt-3">
              <a href="#" className="text-light me-3">
                <FaFacebookF />
              </a>

              <a href="#" className="text-light me-3">
                <FaTwitter />
              </a>

              <a href="https://www.linkedin.com" className="text-light me-3">
                <FaLinkedinIn />
              </a>

              <a href="https://www.instagram.com/accounts/login/?hl=en" className="text-light">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-secondary text-center py-3">
        <p className="mb-0">© {year} AVK Prime Workforce | All Rights Reserved.</p>

        <small>Developed with React JS, Node.js, Express & MongoDB</small>
      </div>
    </footer>
  );
};

export default Footer;
