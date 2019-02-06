// Code goes here
import React from 'react';
import ReactDOM from 'react-dom';
const title = React.createElement('h1', {}, 'First react code, non');
const paragraph = React.createElement('p', {}, 'This is a paragraph!');
const container = React.createElement('div', {}, [title, paragraph]);

ReactDOM.render(container, document.getElementById('global'));
