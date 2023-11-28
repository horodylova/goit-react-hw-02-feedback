import React from "react";
import PropTypes from "prop-types";
import { TitleFeedback  } from"./Section.styled";

const Section = ({ title, children }) => (
    <section>
    <TitleFeedback>{title}</TitleFeedback>
    {children}
  </section>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;
 