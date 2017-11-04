import {createStore, applyMiddleware} from 'redux'
import rootReucer from '../reducers'
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'

export default function configureStore(initalState){
    return createStore(
        rootReucer,
        initalState,
        applyMiddleware(reduxImmutableStateInvariant())
    )
}