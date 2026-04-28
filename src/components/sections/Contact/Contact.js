import React, { useState } from 'react';
import emailjs, { init } from 'emailjs-com';
import { FaGithub, FaLinkedinIn, FaEnvelope, FaCheckCircle } from 'react-icons/fa';
import { personal } from '../../../data/personal';
import './Contact.css';

init(personal.emailjs.userId);

function Contact() {
  const [status, setStatus]   = useState('idle'); // idle | loading | success | error
  const [form, setForm]       = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');

    emailjs
      .sendForm(
        personal.emailjs.serviceId,
        personal.emailjs.templateId,
        e.target,
        personal.emailjs.userId
      )
      .then(() => {
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      })
      .catch(() => {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 4000);
      });
  };

  return (
    <div className="contact-page">
      <div className="contact-wrap">

        <div className="contact-left fade-up delay-1">
          <h1 className="section-title">
            Let's <span className="accent">Connect</span>
          </h1>
          <p className="contact-bio">
            Have a project in mind, a question, or just want to say hi?
            My inbox is always open.
          </p>

          <div className="contact-links">
            <a href={`mailto:${personal.social.email}`} className="contact-link">
              <FaEnvelope />
              <span>{personal.social.email}</span>
            </a>
            <a href={personal.social.github} target="_blank" rel="noreferrer" className="contact-link">
              <FaGithub />
              <span>github.com/Rushil10</span>
            </a>
            <a href={personal.social.linkedin} target="_blank" rel="noreferrer" className="contact-link">
              <FaLinkedinIn />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        <div className="contact-right fade-up delay-2">
          {status === 'success' ? (
            <div className="contact-success">
              <FaCheckCircle className="success-icon" />
              <h3>Message sent!</h3>
              <p>Thanks for reaching out. I'll get back to you soon.</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    id="name"
                    type="text"
                    name="user_name"
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    name="user_email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="What's on your mind?"
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>

              {status === 'error' && (
                <p className="form-error">Something went wrong. Please try again.</p>
              )}

              <button
                type="submit"
                className={`form-submit${status === 'loading' ? ' loading' : ''}`}
                disabled={status === 'loading'}
              >
                {status === 'loading' ? 'Sending…' : 'Send Message'}
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}

export default Contact;
