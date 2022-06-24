import React from 'react';
import './App.css';
import uPhone from './unitOnPhone.png';

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
