import React from 'react';

function CmToInch() {
  const [disable, setDisable] = React.useState(false);
  const flipDisable = () => {
    setDisable((cur) => !cur);
    reset();
  };
  const [amount, setAmount] = React.useState(0);
  const getValue = (e) => {
    setAmount(e.target.value);
  };
  const reset = () => {
    setAmount(0);
  };
  return (
    <div>
      <div>
        <label>Cm</label>
        <input
          type="number"
          placeholder="Cm"
          maxLength={15}
          disabled={disable}
          onChange={getValue}
          value={disable ? amount * 2.54 : amount}
        />
      </div>
      <div>
        <label>Inch</label>
        <input
          type="number"
          placeholder="Inch"
          maxLength={15}
          disabled={!disable}
          onChange={getValue}
          value={disable ? amount : amount / 2.54}
        />
      </div>
      <button onClick={flipDisable}>{disable ? 'Cm ➡️ Inch' : 'Inch ➡️ Cm'}</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default CmToInch;
