import React from "react";
import "./Footer.css";
import { Button } from "../Button/Button";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          I mean you could email me...
        </p>
        <p className="footer-subscription-text">
          Bit old-fashioned but perhaps you're a purist ;)
        </p>
        <div className="input-areas">
          <form>
            <input
              className="footer-input"
              name="email"
              type="email"
              placeholder="Your Email"
            />
            <input
              className="footer-input"
              name="message"
              type="message"
              placeholder="Your message here"
            />
            <Button buttonStyle="btn--outline">Send</Button>
          </form>
        </div>
      </section>
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>About Me</h2>
            <Link to="/projects">Projects</Link>
            <Link to="/my-stack">My Stack</Link>
            <Link to="/misc">Misc</Link>
          </div>
          <div class="footer-link-items">
            <h2>Reach out</h2>
            <Link to="/">Contact</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Social Media</h2>
            <Link to="https://www.linkedin.com/in/nathan-b-42549413a/">
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link to="/" className="social-logo">
              NATE_BROWNE_
            </Link>
          </div>
          <small class="website-rights">
            This site was built with React.js
          </small>
          <div class="social-icons">
            <Link
              class="social-icon-link facebook"
              to="https://www.linkedin.com/in/nathan-b-42549413a/"
              target="_blank"
              aria-label="Facebook"
            >
              <i class="fab fa-facebook-f" />
            </Link>
            <Link
              class="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i class="fab fa-instagram" />
            </Link>
            <Link
              class="social-icon-link youtube"
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <i class="fab fa-youtube" />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <i class="fab fa-twitter" />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i class="fab fa-linkedin" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
