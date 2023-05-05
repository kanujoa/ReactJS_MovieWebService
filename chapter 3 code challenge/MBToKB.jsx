import React from 'react';

function MBToKB() {
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
        <label>MB</label>
        <input
          type="number"
          placeholder="MB"
          maxLength={15}
          disabled={disable}
          onChange={getValue}
          value={disable ? amount * 1024 : amount}
        />
      </div>
      <div>
        <label>GB</label>
        <input
          type="number"
          placeholder="GB"
          maxLength={15}
          disabled={!disable}
          onChange={getValue}
          value={disable ? amount : amount / 1024}
        />
      </div>
      <button onClick={flipDisable}>{disable ? 'MB ➡️ GB' : 'GB ➡️ MB'}</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default MBToKB;
