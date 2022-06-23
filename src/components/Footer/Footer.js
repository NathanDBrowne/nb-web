import React from "react";
import "./Footer.css";
import { Button } from "../Button/Button";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          I guess you <em>could</em> email me...
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
              placeholder="Not Yet Functioning"
            />
            <input
              className="footer-input"
              name="message"
              type="message"
              placeholder="Not Yet Functioning"
            />
            <Button buttonStyle="btn--outline">Send</Button>
          </form>
        </div>
      </section>
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2 style={{ color: "#38de21" }}>About Me</h2>
            <Link to="/projects">Projects</Link>
            <Link to="/my-stack">My Stack</Link>
            <a
              href="https://github.com/NathanDBrowne"
              target="_blank"
              rel="noreferrer noopener"
            >
              GitHub
            </a>
          </div>
          <div class="footer-link-items">
            <h2 style={{ color: "#ff0055" }}>Reach out</h2>
            <Link to="/">Contact</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2 style={{ color: "#5555ff" }}>Social Media</h2>
            <a
              href="https://www.linkedin.com/in/nathan-b-42549413a/"
              target="_blank"
              rel="noreferrer noopener"
            >
              LinkedIn
            </a>
            <a
              href="https://t.me/FreeweightNate"
              target="_blank"
              rel="noreferrer noopener"
            >
              Telegram
            </a>
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
            <a
              className="social-icon-link github"
              href="https://github.com/NathanDBrowne"
              target="_blank"
              rel="noreferrer noopener"
            >
              <i class="fab fa-github" />
            </a>
            <a
              className="social-icon-link linkedin"
              href="https://www.linkedin.com/in/nathan-b-42549413a/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <i class="fab fa-linkedin" />
            </a>
            <a
              className="social-icon-link telegram"
              href="https://t.me/FreeweightNate"
              target="_blank"
              rel="noreferrer noopener"
            >
              <i class="fab fa-telegram" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
