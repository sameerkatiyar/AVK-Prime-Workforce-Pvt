import { useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

function Contact() {
  const [data, setData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const changeHandler = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    alert("Message Sent Successfully!");

    setData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold">Contact Us</h1>
        <p className="text-muted">
          We'd love to hear from you. Send us your query anytime.
        </p>
      </div>

      <div className="row g-4">
        {/* Contact Information */}
        <div className="col-lg-5">
          <div className="card shadow border-0 h-100">
            <div className="card-body p-4">
              <h3 className="mb-4 text-primary">Get In Touch</h3>

              <div className="mb-4">
                <FaMapMarkerAlt className="text-danger me-3" size={20} />
                <span>Kanpur, Uttar Pradesh, India</span>
              </div>

              <div className="mb-4">
                <FaPhoneAlt className="text-success me-3" size={20} />
                <a
                  href="tel:+919876543210"
                  className="text-decoration-none"
                >
                  +91 9876543210
                </a>
              </div>

              <div className="mb-4">
                <FaEnvelope className="text-warning me-3" size={20} />
                <a
                  href="mailto:info@primeworkforce.com"
                  className="text-decoration-none"
                >
                  info@primeworkforce.com
                </a>
              </div>

              <div>
                <FaClock className="text-info me-3" size={20} />
                <span>Mon - Sat : 9:00 AM - 6:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="col-lg-7">
          <div className="card shadow border-0">
            <div className="card-body p-4">
              <h3 className="mb-4 text-primary">Send Message</h3>

              <form onSubmit={submitHandler}>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <input
                      type="text"
                      name="name"
                      value={data.name}
                      onChange={changeHandler}
                      className="form-control"
                      placeholder="Full Name"
                      required
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <input
                      type="email"
                      name="email"
                      value={data.email}
                      onChange={changeHandler}
                      className="form-control"
                      placeholder="Email Address"
                      required
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <input
                    type="text"
                    name="subject"
                    value={data.subject}
                    onChange={changeHandler}
                    className="form-control"
                    placeholder="Subject"
                    required
                  />
                </div>

                <div className="mb-3">
                  <textarea
                    name="message"
                    rows="6"
                    value={data.message}
                    onChange={changeHandler}
                    className="form-control"
                    placeholder="Write your message..."
                    required
                  />
                </div>

                <button className="btn btn-primary px-4">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;