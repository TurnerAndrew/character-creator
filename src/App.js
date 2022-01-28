import './styles/global.css';
import Routes from './Routes';
import Header from './components/ui/Header'
import Stats from './components/features/Stats'
import './styles/app.css'

function App() {
  return (
    <div className="App">
      <Header/>
      <Stats/>
      {Routes}
    </div>
  );
}

export default App;

