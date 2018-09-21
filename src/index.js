import React from 'react';
import ReactDOM from 'react-dom'

const list =
    React.createElement('div', {},
      React.createElement('h1', {}, 'My First React Code'),
      React.createElement('p', {}, 'Writing some more HTML. Cool stuff!'),
      React.createElement('ul', {}, [
        React.createElement('li', {className: 'brown'}, 'Chocalte'),
        React.createElement('li', {className: 'blue'}, 'Vanilla'),
        React.createElement('li', {}, 'Banana'),
      ])
  );



ReactDOM.render(
  list,
  document.getElementById('global')
)
