// import React from 'react';
import { Component } from 'react';
import styled from 'styled-components';
import FeedbackOptions from './FeedbackOptions';
import Statistics from 'components/Fedback/Statistics';
import Section from './Section';

const Box = styled.div``;

class Fedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleStateClick = feedback => {
    this.setState(prevState => ({
      [feedback]: prevState[feedback] + 1,
    }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce(
      (previousValue, elem) => previousValue + elem
    );
  };

  countPositiveFeedbackPercentage = () => {
    if (this.state.good === 0) {
      return 0;
    }
    if (this.state.good > 0) {
      return Math.round((100 * this.state.good) / this.countTotalFeedback());
    }
  };

  render() {
    return (
      <Box>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.handleStateClick}
          />
        </Section>

        {this.countTotalFeedback() > 0 ? (
          <Section title="Statistics">
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          </Section>
        ) : (
          <p>There is no feedback</p>
        )}
      </Box>
    );
  }
}

export default Fedback;
