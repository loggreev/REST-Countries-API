import './App.css';
import DetailView from './components/DetailView';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  // give body darkMode
  return (
    <div className="App">
      <Header />
      {/* <Home /> */}
      <DetailView />
    </div>
  );
}

export default App;
