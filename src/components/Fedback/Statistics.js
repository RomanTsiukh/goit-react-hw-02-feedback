import React from 'react';

const Statistics = ({
  good,
  neutral,
  bad,
  totalFeedback,
  positiveFeedbackPercentage,
}) => (
  <>
    <div>Good:{good}</div>
    <div>Neutral:{neutral}</div>
    <div>Bad:{bad}</div>
    <div>Total:{totalFeedback}</div>
    <div>Positive fedback:{positiveFeedbackPercentage}%</div>
  </>
);

export default Statistics;
