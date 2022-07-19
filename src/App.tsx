import React from 'react';
import './App.css';
import uPhone from './unitOnPhone.png';
import { Route } from 'react-router-dom';
import AppLink from './components/appLink'


function App() {
  return (
    <div className="App">
        <Route path="/ok">
          <AppLink></AppLink>
        </Route>
      <Route path="/kk">
      <body>
        <div className="promo-header">
          <div className="promo-text">
            <div className="promo-text-center">
              <div className="promo-text-c">
                <h1>Unit Budget</h1>
                Budgeting for success
              </div>
            </div>
          </div>
          <div className="promo-image-container">
            <img src={uPhone} className="promo-image" />
          </div>
        </div>
      </body>
      </Route>
    </div>
  );
}

export default App;
