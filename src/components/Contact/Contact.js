import { contact } from '../../portfolio'

import './Contact.css'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


const Contact = () => {
  if (!contact.email) return null

  return (
    <section className="section contact center" id="contact">
      <h2 className="section__title">Contact</h2>
      {/* <a href={`mailto:${contact.email}`}>
        <span type="button" className="btn btn--outline">
          {contact.email}
        </span>
      </a> */}

      <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=hemendrasharma2019@gmail.com" target="_blank" >Hemendrasharma2019@gmail.com</a>

      <p>8319881606</p>
      <div className="social">
        <a href="https://www.linkedin.com/in/hemendra-sharma-15725a194/">
          <img
            src="https://www.vectorlogo.zone/logos/linkedin/linkedin-icon.svg"
            className="social-list"
          />
        </a>
        <a href="https://www.instagram.com/hemendra__04?r=nametag">
          <img
            src="https://www.vectorlogo.zone/logos/instagram/instagram-icon.svg"
            className="social-list"
          />
        </a>
        <a href="https://github.com/CodeNinja04">
          <img
            src="https://www.vectorlogo.zone/logos/github/github-icon.svg"
            className="social-list"
          />
        </a>
      </div>
    </section>
  );
}

export default Contact
