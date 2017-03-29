import store from '../reducers/reducer'
/**
 * Devuelve una acción de tipo ADD_NAME
 * @param  {String} name Texto del name
 * @return {Object} Objeto de acción
 */

const add_to_array = 'add_to_array';

const action = function (text){
    return {
        type: add_to_array, //Id de la accion
        payload: {
            text: text
        }
    }
};

export default action;