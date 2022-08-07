import styled from 'styled-components';
import PropTypes from 'prop-types';

const List = styled.ul`
  margin-bottom: 20px;
  display: flex;
  gap: 1rem;
`;

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <List>
      {Object.keys(options).map(key => (
        <li key={key}>
          <button type="button" onClick={() => onLeaveFeedback(key)}>
            {key.charAt(0).toUpperCase() + key.slice(1)}
          </button>
        </li>
      ))}
    </List>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.exact({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
