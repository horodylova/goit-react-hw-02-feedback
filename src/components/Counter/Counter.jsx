import React from "react";
import PropTypes from "prop-types";
import { FcFeedback } from "react-icons/fc";
import { Container, List, Button, TitleFeedback, Result, StatisticsList } from "./Counter.styled";


export class Counter extends React.Component {
   
    state = {
        good: 0,
        neutral: 0,
        bad: 0
      };

      static propTypes = {
        good: PropTypes.number.isRequired,
        neutral: PropTypes.number.isRequired,
        bad: PropTypes.number.isRequired,
      };

  handleButtonClick = (feedbackType) => {
    this.setState((prevState) => {
      switch (feedbackType) {
        case 'Good':
          return { good: prevState.good + 1 };
        case 'Neutral':
          return { neutral: prevState.neutral + 1 };
        case 'Bad':
          return { bad: prevState.bad + 1 };
        default:
          return this.state; 
      }
    });
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    const totalFeedback = this.countTotalFeedback();
    return totalFeedback > 0
      ? Math.round((this.state.good / totalFeedback) * 100)
      : 0;
  };

  render() {

    const totalFeedback = this.countTotalFeedback();
    const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage();

    return (
      <Container>
        <FcFeedback />
        <TitleFeedback>
          Please leave feedback
        </TitleFeedback>
        <List>
          <Button onClick={() => this.handleButtonClick('Good')}>Good</Button>
          <Button onClick={() => this.handleButtonClick('Neutral')}>Neutral</Button>
          <Button onClick={() => this.handleButtonClick('Bad')}>Bad</Button>
        </List>
        <TitleFeedback>
          Statistics
        </TitleFeedback>
        <StatisticsList>
        <Result>Total: <span>{totalFeedback}</span></Result>
          <Result>Good: <span>{this.state.good}</span></Result>
          <Result>Neutral: <span>{this.state.neutral}</span></Result>
          <Result>Bad: <span>{this.state.bad}</span></Result>
          <Result>Positive Feedback: <span>{positiveFeedbackPercentage}%</span></Result>

        </StatisticsList>
      </Container>)
  }
}

