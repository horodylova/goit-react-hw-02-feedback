import React from "react";
import PropTypes from "prop-types";

import { FcFeedback } from "react-icons/fc";
import { Container, List } from "./App.styled";
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import StatisticsComponent from './StatisticsComponent';

class App extends React.Component {
  static propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleButtonClick = (feedbackType) => {
    this.setState((prevState) => {
      switch (feedbackType) {
        case 'good':
          return { good: prevState.good + 1 };
        case 'neutral':
          return { neutral: prevState.neutral + 1 };
        case 'bad':
          return { bad: prevState.bad + 1 };
        default:
          return prevState;
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
  
      const feedbackOptions = ['Good', 'Neutral', 'Bad'];

    return (
      <Container>
        <FcFeedback />
        <Section title="Please leave feedback">
          <List>
            <FeedbackOptions
              options={feedbackOptions}
              onLeaveFeedback={this.handleButtonClick}
            />
          </List>
        </Section>

        <Section title="Statistics">
          <StatisticsComponent
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            totalFeedback={this.countTotalFeedback()}
            positiveFeedbackPercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </Container>
    );
  }
}

export default App;



