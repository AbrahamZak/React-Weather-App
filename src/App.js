import React from 'react';

import './App.css';
import WeatherEngine from "./components/WeatherEngine";

function App() {

  return (
    <div className="App">
      <div className="WeatherBox">
     <WeatherEngine location='Albany, US'/>
     <WeatherEngine location='Chicago, US'/>
     <WeatherEngine location='Houston, US'/>
     </div>
    </div>
  );
}

export default App;
