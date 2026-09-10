import React from 'react';
import './contact.css';

export default function ContactUs() {
  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <h1>CONTACT US</h1>
          <p>We're here to help. Reach out to us for any queries or customized heating solutions.</p>
        </div>
      </section>

      <section className="contact-content-section section">
        <div className="container">
          <div className="contact-grid">

            {/* Contact Information */}
            <div className="contact-info-panel">
              <h2>Get in Touch</h2>
              <p className="contact-subtext">
                Whether you have a question about our products, pricing, or need a custom solution, our team is ready to answer all your questions.
              </p>

              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fa-solid fa-location-dot"></i>
                  </div>
                  <div className="contact-text">
                    <h3>Our Address</h3>
                    <p>Plot No. E-34, WTC Trade Center,
                      SP Waluj Road, Ranjangaon Shenapunji, Waluj MIDC,
                      Chhatrapati Sambhaji Nagar, Maharashtra 431136, India
                    </p>

                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fa-solid fa-phone"></i>
                  </div>
                  <div className="contact-text">
                    <h3>Phone</h3>
                    <p>+91 9096258317<br />+91 8956412020</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fa-regular fa-envelope"></i>
                  </div>
                  <div className="contact-text">
                    <h3>Email</h3>
                    <p><a href="mailto:sales@shreeindustrialheater.com">sales@shreeindustrialheater.com</a></p>
                  </div>
                </div>
              </div>

              <div className="contact-social">
                <h3>Follow Us</h3>
                <div className="social-links">
                  <a href="#" className="social-icon" aria-label="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
                  <a href="#" className="social-icon" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
                  <a href="#" className="social-icon" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-panel">
              <h2>Send a Message</h2>
              <form action="mailto:sales@shreeindustrialheater.com" method="post" encType="text/plain" className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input type="text" id="name" name="Name" required placeholder="Your good name.." />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Your Email Address</label>
                  <input type="email" id="email" name="Email" required placeholder="email@example.com" />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <select id="subject" name="Subject" required defaultValue="Heater Related">
                    <option value="Heater Related">Heater Inquiry</option>
                    <option value="Supply & Services">Supply & Services / AMC Inquiry</option>
                    <option value="Other Supply Related">Other Supply Products</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="Message" rows={5} required placeholder="Write your message here..."></textarea>
                </div>

                <button type="submit" className="submit-btn">
                  Send Message <i className="fa-regular fa-paper-plane"></i>
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
