import { GlobalStyle } from 'components/GlobaleStyle';
import Feedback from './Feedback';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
      }}
    >
      <GlobalStyle />
      <Feedback />
    </div>
  );
};
