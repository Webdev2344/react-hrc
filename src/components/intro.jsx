import React from "react";

const Intro = ({ title }) => <h1>{title}</h1>;
Intro.defaultProps = {
  title: "Its A Deafult Title"
};
export default Intro;
