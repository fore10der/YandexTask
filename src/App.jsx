import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root'
import store from './store'
import './App.sass'

ReactDOM.render(<Root store={store} />,document.querySelector(".root"));