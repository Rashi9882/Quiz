import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

function tick() {
  const element = (
    <div>
      <h1>Hello Rashi!</h1>
      <h2>It is {new Date().toLocaleTimeString()}</h2>
    </div>
  );

ReactDOM.render(
  element,
  document.getElementById('root')
);
}


setInterval(tick,1000);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
