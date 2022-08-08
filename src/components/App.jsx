import { GlobalStyle } from 'components/GlobaleStyle';
import Fedback from './Fedback';

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
      <Fedback />
    </div>
  );
};
