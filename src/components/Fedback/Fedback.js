import React from 'react';
import styled from 'styled-components';
import Buttons from './BtnBox';
import Statistics from 'components/Fedback/Statistics';

const Title = styled.p`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 20px;
`;

class Fedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  clickBtnGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  clickBtnNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };

  clickBtnBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce(
      (previousValue, elem) => previousValue + elem
    );
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((100 * this.state.good) / this.countTotalFeedback());
  };

  render() {
    const totalFeedback = this.countTotalFeedback();
    const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage();
    return (
      <div>
        <Title>Please leave feedback</Title>
        <Buttons
          onGood={this.clickBtnGood}
          onNeutral={this.clickBtnNeutral}
          onBad={this.clickBtnBad}
        />

        <Title>Statistics</Title>
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={totalFeedback}
          positivePercentage={positiveFeedbackPercentage}
        />
        {/* <div>Good:{this.state.good}</div>
        <div>Neutral:{this.state.neutral}</div>
        <div>Bad:{this.state.bad}</div> */}
        {/* <div>Total:{totalFeedback}</div>
        <div>Positive fedback:{goodFedback}%</div> */}
      </div>
    );
  }
}

export default Fedback;
