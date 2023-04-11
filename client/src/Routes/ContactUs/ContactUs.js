import React from "react";
import './ContactUs.css'
import email from '../../assets/email.jpeg';
import location from '../../assets/map.jpeg';
import phone from '../../assets/phone.jpeg';
import fb from '../../assets/fb.png';
import inst from '../../assets/inst.png';
import li from '../../assets/li.png';
import tw from '../../assets/tw.png';

const ContactUs = () => {
    const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});
  return (
    <div>
        <div className="containerr">
      <span className="big-circle"></span>
      <img src="img/shape.png" className="square" alt="" />
      <div className="form">
        <div className="contact-info">
          <h3 className="title">Let's get in touch</h3>
          <p className="text">
          Get in touch with us for any questions, comments, or just to say hello! Fill out the form on our website or call. Connect with us on social media by following our social media handles. We're dedicated to helping you achieve your wellness goals and look forward to hearing from you!
          </p>

          <div className="info">
            <div className="information">
              <img className="iconn" src={location} alt='img'/>
              <p>Near gagan chownk, Street no-4, Rajpura, Punjab.</p>
            </div>
            <div className="information">
              <img className="iconn" src={email} alt='img'/>
              <p>gurunanakcares@gmail.com</p>
            </div>
            <div className="information">
              <img className="iconn" src={phone} alt='img'/>
              <p>9867541203</p>
            </div>
          </div>

          <div className="social-media">
            <p>Connect with us :</p>
            <div className="social-icons">
              <a href="#">
                <img className="iconn" src={fb} alt='img'/>
              </a>
              <a href="#">
              <img className="iconn" src={tw} alt='img'/>
              </a>
              <a href="#">
              <img className="iconn" src={inst} alt='img'/>
              </a>
              <a href="#">
                <i className="fab fa-linkedin-in"></i>
                <img className="iconn" src={li} alt='img'/>
              </a>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <span className="circle one"></span>
          <span className="circle two"></span>

          <form action="index.html" autocomplete="off">
            <h3 className="title">Contact us</h3>
            <div className="input-container">
              <input type="text" name="name" className="input" />
              <label for="">Username</label>
              <span>Username</span>
            </div>
            <div className="input-container">
              <input type="email" name="email" className="input" />
              <label for="">Email</label>
              <span>Email</span>
            </div>
            <div className="input-container">
              <input type="tel" name="phone" className="input" />
              <label for="">Phone</label>
              <span>Phone</span>
            </div>
            <div className="input-container textarea">
              <textarea name="message" className="input"></textarea>
              <label for="">Message</label>
              <span>Message</span>
            </div>
            <input type="submit" value="Send" className="btnn" />
          </form>
        </div>
      </div>
    </div>
    </div>
  )
}

export default ContactUs