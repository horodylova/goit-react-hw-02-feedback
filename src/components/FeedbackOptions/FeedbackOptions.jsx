import React from "react";
import PropTypes from "prop-types";
import { Button } from "./FeedbackOptions.styled";

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <ul>
    {options.map((option) => (
      <li key={option}>
        <Button  onClick={() => onLeaveFeedback(option)}>{option}</Button >
      </li>
    ))}
  </ul>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;


