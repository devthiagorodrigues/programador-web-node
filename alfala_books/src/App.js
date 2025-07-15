import './App.css';
import LogoHeader from './components/LogoHeader';
import OptionsHeader from './components/OptionsHeader';
import IconesHeader from './components/IconesHeader';

function App() {
  return (
    <div className="App">
      <header className="App-header"> 
        <LogoHeader />
        <OptionsHeader />
        <IconesHeader />

        
      </header>
    </div>
  );
}

export default App;