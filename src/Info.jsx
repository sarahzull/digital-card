import React from "react";
import myImage from "./photo.png";
import "./Info.css";

export default function Info() {
  return (
    <div className="Info">
      <img src={myImage} alt="Ash Moreno" className="--info-image" />
      <h1>Laura Smith</h1>
      <h2>Frontend Developer</h2>
      <p>
        <a
          href="https://www.sarahzull.tech"
          target="_blank"
          rel="noreferrer"
          className="--info-portfolio"
        >
          sarahzull.tech
        </a>
      </p>
      <div className="--info-buttons">
        <button className="--info-email">
          <a href="mailto:hello@sarahzull.tech">
            <i class="fa-solid fa-envelope"></i> Email
          </a>
        </button>
        <button className="--info-linkedin">
          <a
            href="https://www.linkedin.com/in/sarahzull/"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fa-brands fa-linkedin"></i> LinkedIn
          </a>
        </button>
      </div>
    </div>
  );
}