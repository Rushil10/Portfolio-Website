import React from 'react';
import './contact.scss';
import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';
import tick from '../../images/tick.svg';
import { FaSpinner } from 'react-icons/fa';
import {Spinner} from 'react-activity'
init("user_YURxBHiKDaqPRsgjhUIvN");

function Contact() {

    const [visible,setVisible] = React.useState(false);
    const [loading,setLoading] = React.useState(false);

    function sendEmail(e) {
        setLoading(true);
        e.preventDefault();
        console.log(e.target)
        emailjs.sendForm('service_tmyx21t','template_dirkou2', e.target, 'user_YURxBHiKDaqPRsgjhUIvN')
          .then((result) => {
              console.log(result.text);
              setVisible(true);
              setLoading(false);
              setTimeout(function () {
                  setVisible(false)
              },5000)
          }, (error) => {
              console.log(error.text);
          });
      }

    return(
        <div className="con_container">
            <div className="con_box">
                Contact Me
            </div>
            {
                visible &&
                <div className="tickcheck">
                    <img src={tick} style={{height:41,width:41}} />
                    <div className="ticktext">
                    Email Sent
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
                        'Send':
                        <div style={{paddingLeft:15.75,alignItems:'center',textAlign:'center',justifyContent:'center'}}>
                            <Spinner style={{}}/>
                        </div>
                    }
                </button>
            </form>
            {
                /*
                <form className="contact-form" onSubmit={sendEmail}>
      <input type="hidden" name="contact_number" />
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
                */
            }
        </div>
    )
}

export default Contact;