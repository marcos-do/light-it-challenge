import React from 'react';
import routes from './routes/routes';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
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
