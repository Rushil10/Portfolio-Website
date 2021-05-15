import React from 'react';
import './contact.scss'

function Contact() {
    return(
        <div className="con_container">
            <div className="con_box">
                Contact Me
            </div>
            <form className="contact-form">
                <input type="hidden" name="contact_number" />
                <label className="con_label">Name</label>
                <div className="form_name">
                    <input className="input_name" type="text" name="user_name" />
                    <span className="name_span">@gmail.com</span>
                </div>
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Message</label>
                <textarea name="message" />
                <input type="submit" value="Send" />
            </form>
        </div>
    )
}

export default Contact;