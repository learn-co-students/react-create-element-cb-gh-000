// Code goes here
import React from 'react';
import ReactDOM from 'react-dom';

const title = React.createElement('h1',{},'My first React Code');
ReactDOM.render(
  title,
  document.getElementById('global')
);
const paragraph = React.createElement('p', {} , 'Writing some more HTML. Cool stuff' );
const container = React.createElement('div', {} , [title , paragraph]);
ReactDOM.render(container , document.getElementById('global')

);

const list = React.createElement('div',{},React.createElement('h1',{},'My favorite ice cream flavors')
, React.createElement('ul',{} ,

[
  React.createElement('li',{class :'while'},'Chocolate'),

  React.createElement('li',{class:'white'},'Banana'),

React.createElement('li',{class:'yellow'},'Vanilla')
]
)
);
ReactDOM.render(
  list,
  document.getElementById('global')
);
