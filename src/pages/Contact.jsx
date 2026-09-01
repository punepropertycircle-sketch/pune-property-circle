import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    property: "",
    enquiryType: "",
    visitDate: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const payload = {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,

        // Current form मधील interest ला property/enquiry म्हणून पाठवत आहोत
        property: formData.interest,
        enquiryType: formData.interest,

        visitDate: "",
        message: formData.message,
      };

      await fetch(
        "https://script.google.com/macros/s/AKfycbwZW_41lk0xX3AeV9-8AIvJRvV9MuVoXJsCAM6HYSBQFAhJXsG4GJtuVeHYlEuoeTLY4g/exec",
        {
          method: "POST",
          mode: "no-cors",
          body: JSON.stringify(payload),
        }
      );

      // Form submitted successfully
      setSubmitted(true);

      setFormData({
        name: "",
        phone: "",
        email: "",
        interest: "",
        message: "",
      });

    } catch (error) {
      console.error("Enquiry submission error:", error);

      alert(
        "Something went wrong. Please try again."
      );
    }
  };
  return (
    <main className="contact-page">

      {/* =========================================
          HERO
      ========================================= */}

      <section className="contact-hero">

        <div className="contact-hero-content">

          <p className="contact-label">
            GET IN TOUCH
          </p>

          <h1>
            Let's Find Your
            <span> Next Property.</span>
          </h1>

          <p className="contact-hero-description">
            Tell us what you're looking for and our team
            will help you take the next step with confidence.
          </p>

        </div>

      </section>


      {/* =========================================
          CONTACT SECTION
      ========================================= */}

      <section
        className="contact-section"
        id="enquire"
      >

        <div className="contact-container">


          {/* =====================================
              LEFT INFORMATION
          ===================================== */}

          <div className="contact-info">

            <p className="contact-label">
              CONTACT US
            </p>

            <h2>
              We're here to
              <span> help.</span>
            </h2>

            <p className="contact-description">
              Whether you're interested in a property,
              planning a site visit or simply want more
              information, send us an enquiry.
            </p>


            {/* Contact Details */}

            <div className="contact-details">

              <div className="contact-detail">

                <div className="contact-detail-icon">
                  ☎
                </div>

                <div>
                  <span>
                    Phone
                  </span>

                  <strong>
                    8380800500
                  </strong>
                </div>

              </div>


              <div className="contact-detail">

                <div className="contact-detail-icon">
                  ✉
                </div>

                <div>
                  <span>
                    Email
                  </span>

                  <strong>
                    punepropertycircle@gmail.com
                  </strong>
                </div>

              </div>


              <div className="contact-detail">

                <div className="contact-detail-icon">
                  📍
                </div>

                <div>
                  <span>
                    Nanded city
                  </span>

                  <strong>
                    Pune, Maharashtra
                  </strong>
                </div>

              </div>

            </div>


            {/* Small Trust Note */}

            <div className="contact-trust">

              <span className="trust-icon">
                ✓
              </span>

              <div>

                <strong>
                  Quick Response
                </strong>

                <p>
                  Our team will get back to you
                  as soon as possible.
                </p>

              </div>

            </div>

          </div>


          {/* =====================================
              FORM
          ===================================== */}

          <div className="contact-form-wrapper">

            {submitted ? (

              /* =================================
                 SUCCESS MESSAGE
              ================================= */

              <div className="contact-success">

                <div className="success-icon">
                  ✓
                </div>

                <p className="success-label">
                  ENQUIRY RECEIVED
                </p>

                <h3>
                  Thank You!
                </h3>

                <p>
                  Your enquiry has been received successfully.
                  Our team will contact you shortly.
                </p>

                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                >
                  Send Another Enquiry
                </button>

              </div>

            ) : (

              /* =================================
                 FORM
              ================================= */

              <form
                className="contact-form"
                onSubmit={handleSubmit}
              >

                <div className="form-heading">

                  <p>
                    PROPERTY ENQUIRY
                  </p>

                  <h3>
                    Tell us what you're looking for.
                  </h3>

                </div>


                {/* Name */}

                <div className="form-group">

                  <label htmlFor="name">
                    Full Name
                  </label>

                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                  />

                </div>


                {/* Phone + Email */}

                <div className="form-row">

                  <div className="form-group">

                    <label htmlFor="phone">
                      Phone Number
                    </label>

                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter phone number"
                      pattern="[0-9]{10}"
                      maxLength="10"
                      required
                    />

                  </div>


                  <div className="form-group">

                    <label htmlFor="email">
                      Email Address
                    </label>

                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter email address"
                    />

                  </div>

                </div>


                {/* Property */}

                <div className="form-group">

                  <label htmlFor="property">
                    Interested Property
                  </label>

                  <select
                    id="property"
                    name="property"
                    value={formData.property}
                    onChange={handleChange}
                    required
                  >

                    <option value="">
                      Select a property
                    </option>

                    <option value="2 BHK">
                      2 BHK
                    </option>

                    <option value="3 BHK">
                      3 BHK
                    </option>

                  </select>

                </div>


                {/* Enquiry Type */}

                <div className="form-group">

                  <label htmlFor="enquiryType">
                    Enquiry Type
                  </label>

                  <select
                    id="enquiryType"
                    name="enquiryType"
                    value={formData.enquiryType}
                    onChange={handleChange}
                    required
                  >

                    <option value="">
                      What can we help you with?
                    </option>

                    <option value="Project Information">
                      Project Information
                    </option>

                    <option value="Site Visit">
                      Site Visit
                    </option>

                    <option value="Price / Availability">
                      Price / Availability
                    </option>

                    <option value="General Enquiry">
                      General Enquiry
                    </option>

                  </select>

                </div>


                {/* Visit Date */}

                {formData.enquiryType === "Site Visit" && (

                  <div className="form-group">

                    <label htmlFor="visitDate">
                      Preferred Visit Date
                    </label>

                    <input
                      id="visitDate"
                      type="date"
                      name="visitDate"
                      value={formData.visitDate}
                      onChange={handleChange}
                      min={new Date().toISOString().split("T")[0]}
                    />

                  </div>

                )}


                {/* Message */}

                <div className="form-group">

                  <label htmlFor="message">
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us what you're looking for..."
                    rows="5"
                  />

                </div>


                {/* Submit */}

                <button
                  type="submit"
                  className="contact-submit"
                >

                  <span>
                    Send Enquiry
                  </span>

                  <span className="submit-arrow">
                    ↗
                  </span>

                </button>


                <p className="form-note">
                  By submitting this form, you agree to be
                  contacted regarding your enquiry.
                </p>

              </form>

            )}

          </div>

        </div>

      </section>


      {/* =========================================
          SITE VISIT CTA
      ========================================= */}

      <section className="site-visit-cta">

        <div>

          <p>
            PLAN YOUR VISIT
          </p>

          <h2>
            Want to see a property
            <br />
            in person?
          </h2>

        </div>

        <a href="#enquire">
          Book a Site Visit →
        </a>

      </section>

    </main>
  );
}

export default Contact;