import React from 'react';

function Emoji(props) {
  return (
    <span role="img" aria-hidden={true}>
      {props.symbol}
    </span>
  );
}

export default Emoji;
