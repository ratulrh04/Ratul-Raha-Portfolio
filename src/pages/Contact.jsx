import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_0qcel2g",     // replace with your service ID
      "template_44mp7qi",    // replace with your template ID
      form.current,
      "qw1yHajotIVdMb6rF"   // replace with your public key
    )
    .then(
      () => {
        alert("Message sent successfully!");
      },
      () => {
        alert("Failed to send message!");
      }
    );

    e.target.reset();
  };

  return (
    <div>
      <section id="Contact">
        <div id="contract-section">
          <div className="container">
            <div className="row">
              <div className="col-me-12">
                <div className="contract-wrapper">

                  <h1><i>Contact</i></h1>

                  {/* FORM START */}
                  <form ref={form} onSubmit={sendEmail}>

                    <input
                      className="single-input"
                      type="text"
                      name="name"
                      placeholder="Enter Your Name"
                      required
                    />

                    <input
                      className="single-input"
                      type="email"
                      name="email"
                      placeholder="Enter Your Email"
                      required
                    />

                    <input
                      className="single-input"
                      type="text"
                      name="subject"
                      placeholder="Enter Your Subject"
                      required
                    />

                    <textarea
                      className="text-aria"
                      name="message"
                      rows={5}
                      placeholder="Write Your Message Here"
                      required
                    ></textarea>

                    <button type="submit" className="btn click-me">
                      Send Message
                    </button>

                  </form>
                  {/* FORM END */}

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;