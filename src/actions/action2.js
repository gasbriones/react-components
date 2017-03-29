import store from '../reducers/reducer'
/**
 * Devuelve una acción de tipo ADD_NAME
 * @param  {String} name Texto del name
 * @return {Object} Objeto de acción
 */

const add_one_more = 'add_one_more';

const action = {
    type: add_one_more, //Id de la accion
    payload: {
        text:'mundo'
    }
};
export default action;