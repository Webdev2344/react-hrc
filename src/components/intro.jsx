import React from "react";

const Intro = ({ title, subtitle, intro_img }) => (
  <div className="intro_screen text-center">
    <div className="container">
      <h1 className="text-white mt-3 into-title">{title}</h1>
      <h2 className="text-white">{subtitle}</h2>
      <div className="intro_img">
        <img src={intro_img} alt="intro_img" className="img-fluid" />
      </div>
      <a href="/bet" class="button button-white">
        Login
      </a>
    </div>
  </div>
);
export default Intro;
