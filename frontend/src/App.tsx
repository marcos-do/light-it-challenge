import React from 'react';
import routes from './routes/routes';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main>
        <Router>
          <Routes>
            {routes.map(({path, component}, index) => {
              return <Route key={index} path={path} element={component}></Route>
            })}
          </Routes>
        </Router>
      </main>
    </div>
  );
}

export default App;
