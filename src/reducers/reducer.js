import {createStore} from 'redux';

/**
 * Esto es un reducer, una función pura con el formato (state, action) => newState.
 * Describe como una acción transforma el estado en el nuevo estado.
 *
 * La forma del estado depende de tí: puede ser un primitivo, un array, un objeto, o incluso una estructura de datos de Immutable.js. La única parte importante es que no debes modificar el objeto del estado, en vez de eso devolver una nuevo objeto si el estado cambió.
 *
 * En este ejemplo, usamos `switch` y strings, pero puedes usar cualquier forma que desees si tiene sentido para tu proyecto.
 */


function reducer(state = [], action) {
    switch (action.type) {
        case 'add_to_array':
            return [action.payload.text];
        case 'add_one_more':
            return [...state, action.payload.text]
        default:
            return state;
    }
}

// Creamos un store de Redux almacenando el estado de la aplicación.
// Su API es { subscribe, dispatch, getState }.
let store = createStore(reducer);

export default store;

