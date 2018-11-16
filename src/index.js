// Code goes here
import React from 'react';
import ReactDOM from 'react-dom';

const title = React.createElement('h1', {}, 'First react code');
const para = React.createElement('p', {}, 'HTML paragraph');
const container = React.createElement('div', {}, [title, para]);
ReactDOM.render(container, document.getElementById('global'));

const list  = React.createElement('div', {},
              React.createElement('h1', {}, 'Second container'),
              React.createElement('ul', {},
            [
              React.createElement('li', {className:'brown'}, 'first'),
              React.createElement('li', {className:'white'}, 'second'),
              React.createElement('li', {className:'yellow'}, 'third')
            ]
          )
        );

ReactDOM.render(list, document.getElementById('global'));
