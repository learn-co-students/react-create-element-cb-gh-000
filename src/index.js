import React from 'react'
import ReactDOM from 'react-dom'

const title = React.createElement('h1', {}, 'This is the welcome page in React')
const container = React.createElement('div', {}, title);


ReactDOM.render(container, document.getElementById('global'))
