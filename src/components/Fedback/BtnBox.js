import React from 'react';
import styled from 'styled-components';

const BtnContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  gap: 1rem;
`;

const Buttons = ({ onGood, onNeutral, onBad }) => (
  <BtnContainer>
    <button type="button" onClick={onGood}>
      Good
    </button>
    <button type="button" onClick={onNeutral}>
      Neutral
    </button>
    <button type="button" onClick={onBad}>
      Bad
    </button>
  </BtnContainer>
);

export default Buttons;
