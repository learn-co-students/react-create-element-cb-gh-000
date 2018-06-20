// Code goes here
import React from 'react';
import ReactDOM from 'react-dom';

const title = React.createElement('h1', {}, 'My First React Code');
const container = React.createElement('div',{},title);

ReactDOM.render(
  title,
  document.getElementById('global')
);
