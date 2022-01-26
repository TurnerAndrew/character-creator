import './styles/global.css';
import Routes from './Routes';
import Header from './components/ui/Header'
import './styles/app.css'

function App() {
  return (
    <div className="App">
      <Header/>
      {Routes}
    </div>
  );
}

export default App;

