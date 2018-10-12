import React from 'react'
import ReactDOM from 'react-dom'

const title = React.createElement('h1', {}, 'Test!');
const paragraph = React.createElement('p', {}, 'Testing paragraphs');
const container = React.createElement('div', {}, [title, paragraph]);

ReactDOM.render(container, document.getElementById('global'));
