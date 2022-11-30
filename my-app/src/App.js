import logo from './logo.svg';
import './App.css';
import Example from './demo/Example';
import Welcome from './demo/Welcome';
import Demo from './demo/Demo';
import './css/style.css';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Demo />
          <ul className="App-Menu">
            <li>
              <Link to="/">Example</Link>
            </li>
            <li>
              <Link to="/about">Welcome</Link>
            </li>
          </ul>
          <p>
            <Routes>
              <Route exact path='/' element={<Example />} />
              <Route exact path='/about' 
                element={<>
                  <Welcome name="Geoffrey" />
                  <Welcome name="Luana" />
                </>}
              />
            </Routes>
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </Router>
  );
}

export default App;
