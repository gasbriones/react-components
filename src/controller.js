//import ReactDOM from 'react-dom'
//import  React from 'react'
//import Color from './components/ejemplo-3';

//ReactDOM.render(<Color colors={['Rojo', 'blanco']} />, document.querySelector('#example'));

import store from './reducers/reducer'
import action from './actions/action';
import action2 from './actions/action2';

store.dispatch(action('Hola 2'));

console.log(store.getState());

store.dispatch(action2);

console.log(store.getState());