import ReactDOM from 'react-dom'
import  React from 'react'

import Users from './components/users/jsx/users'

ReactDOM.render(<Users api={'https://jsonplaceholder.typicode.com/users'} /> ,document.querySelector('#example'));






































/*
import store from './reducers/reducer'
import action from './actions/action';
import action2 from './actions/action2';

store.dispatch(action('Hola 2'));

console.log(store.getState());

store.dispatch(action2);

console.log(store.getState()); */