import React from 'react';
import ReactDOM from 'react-dom'

const title = React.createElement('h1', {}, 'my first react');
const paragraph = React.createElement('p', {}, 'writin some more html');
const container = React.createElement('div', {}, [title, paragraph]);


ReactDOM.render(
  container,
  document.getElementById('global')
);
