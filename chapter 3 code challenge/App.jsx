import React from 'react';
import './App.css';
import Emoji from './Emoji';
import MbToKB from './MBToKB';
import CmToInch from './CmToInch';

function App() {
  const changeConverter = (e) => {
    console.log(e);
  };
  return (
    <div>
      <h1>Unit Converter</h1>
      <select onChange={changeConverter}>
        <option value="MBToKB">
          MB
          <Emoji symbol="↔️" />
          KB
        </option>
        <option value="CmToInch">
          cm
          <Emoji symbol="↔️" />
          inch
        </option>
      </select>
    </div>
  );
}

export default App;
