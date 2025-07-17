import Header from './components/HeaderBeta';
import styled from 'styled-components';

const AppDiv = styled.div `
    margin: 0;
    padding: 0;
    box-sizing: border-box;
`

function App() {
  return (
    <AppDiv>
      <Header />
    </AppDiv>
  );
}

export default App;
