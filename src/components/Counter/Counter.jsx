import React from "react";
import { FcFeedback } from "react-icons/fc";
import { Container, List, Button, TitleFeedback, Result, StatisticsList } from "./Counter.styled";


export class Counter extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          good: 0,
          neutral: 0,
          bad: 0,
        };
      }

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
          return null; 
      }
    });
  };

  render() {
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
          <Result>Good: <span className='counterResult'>{this.state.good}</span></Result>
          <Result>Neutral: <span className='counterResult'>{this.state.neutral}</span></Result>
          <Result>Bad: <span className='counterResult'>{this.state.bad}</span></Result>
        </StatisticsList>
      </Container>)
  }
}

