import "./App.css";
import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faLinkedinIn,
  faGithub,
  faFacebook,
  faWhatsapp,
  faFontAwesome,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(
  fas,
  faTwitter,
  faLinkedinIn,
  faGithub,
  faFacebook,
  faWhatsapp,
  faFontAwesome
);

function App() {
  return (
    <div>
      <header>
        <a href="/" class="logo">
          Gigly Puff
        </a>
        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
        </nav>
      </header>
      <section className="home" id="home">
        <div className="home-content">
          <h3>Hello ! I'm</h3>
          <h1 className="name">Jiggly Puff</h1>
          <h3 className="title">Frontend Developer</h3>
          <p className="info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            soluta voluptas quisquam.
          </p>

          <div className="social-media">
            <a href="/" target="_blank">
              <FontAwesomeIcon icon="fa-brands fa-linkedin-in" />
              <FontAwesomeIcon icon="fa-brands fa-github" />
              <FontAwesomeIcon icon="fa-brands fa-facebook-f" />
              <FontAwesomeIcon icon="fa-brands fa-whatsapp" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
