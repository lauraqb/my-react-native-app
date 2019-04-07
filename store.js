import {createStore} from 'redux';
import reducer from './reducers/clues'
//{} es estado inicial
const store = createStore(reducer, {
    clue1 : false,
    clue2 : true 
})

export default store;