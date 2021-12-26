import React from 'react';
import './contact.scss';
import emailjs from 'emailjs-com';
import { init } from 'emailjs-com';
import tick from '../../images/tick.svg';
import { FaSpinner } from 'react-icons/fa';
import { Spinner } from 'react-activity'
import phone from '../../images/phone.png'
init("user_YURxBHiKDaqPRsgjhUIvN");

function Contact() {

    const [visible, setVisible] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState('')

    function sendEmail(e) {
        setLoading(true);
        e.preventDefault();
        console.log(e.target.form_name)
        emailjs.sendForm('service_tmyx21t', 'template_dirkou2', e.target, 'user_YURxBHiKDaqPRsgjhUIvN')
            .then((result) => {
                console.log(result.text);
                setVisible(true);
                setLoading(false);
                setTimeout(function () {
                    setVisible(false)
                }, 5000)
            }, (error) => {
                console.log(error.text);
                setError(error.text)
                setLoading(false);
                setTimeout(function () {
                    setError('')
                }, 5000)
            });
    }

    return (
        <div className="con_container">
            <div className="con_box">
                Contact Me
            </div>
            <div className="contactDetails">
                <img src={phone} style={{ height: 29, width: 29, marginRight: 9 }} />
                +91 - 8169846575
            </div>
            {
                visible &&
                <div className="tickcheck">
                    <img src={tick} style={{ height: 41, width: 41 }} />
                    <div className="ticktext">
                        Email Sent
                    </div>
                </div>
            }
            {
                error.length > 0 &&
                <div className="tickcheck">
                    <img src={tick} style={{ height: 41, width: 41 }} />
                    <div className="ticktext">
                        error
                    </div>
                </div>
            }
            <form className="contact-form" onSubmit={sendEmail}>
                <div className="form_name">
                    <input className="input_name" type="text" name="user_name" />
                    <span className="name_span">Name</span>
                </div>
                <div className="form_email">
                    <input className="input_email" type="email" name="user_email" />
                    <span className="email_span">Email</span>
                </div>
                <div className="form_message">
                    <textarea placeholder="message" className="input_message" name="message" />
                </div>
                <button type="submit" className="form_button">
                    {
                        !loading ?
                            'Send' :
                            <div style={{ paddingLeft: 15.75, alignItems: 'center', textAlign: 'center', justifyContent: 'center' }}>
                                <Spinner style={{}} />
                            </div>
                    }
                </button>
            </form>
        </div>
    )
}

export default Contact;