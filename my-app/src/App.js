import './App.css';
import './css/style.css';

import ViewCat from './chat/pages/view';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
          <ul className="App-Menu">
            <li>
              <Link to="/chat">Mon chat</Link>
            </li>
           
          </ul>
          <div>
            <Routes>
              <Route exact path='/chat' element={
                <ViewCat />
              } />
              
            </Routes>
          </div>
      </div>
    </Router>
  );
}

export default App;
