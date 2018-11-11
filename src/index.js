// Code goes here
import React from 'react';
import ReactDOM from 'react-dom';

const container = React.createElement('div', {},
  React.createElement('h1', {}, 'Makanan Khas Makassar'),
  React.createElement('ul', {}, [
    React.createElement('li', {}, 'Coto'),
    React.createElement('li', {}, 'Jalangkote'),
    React.createElement('li', {}, 'Konro')
  ])
);

ReactDOM.render(
  container,
  document.getElementById('global')
);
