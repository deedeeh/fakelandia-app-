import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Router from './components/Router';

function App() {
  return (
    <div className="App">
      <h1>Fakelandia justice department</h1>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
