import React from 'react';
import Emoji from './Emoji';
import MBToKB from './MBToKB';
import CmToInch from './CmToInch';

function App() {
  const [converter, setConverter] = React.useState('MBToKB');
  const changeConverter = (event) => {
    setConverter(event.target.value);
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
      {converter === 'MBToKB' ? <MBToKB /> : null} {/*따옴표로 감싸주는 것 기억하기!*/}
      {converter === 'CmToInch' ? <CmToInch /> : null}
    </div>
  );
}

export default App;
