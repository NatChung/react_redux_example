import {createStore, applyMiddleware} from 'redux'
import rootReucer from '../reducers'
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'
import thunk from 'redux-thunk'

export default function configureStore(initalState){
    return createStore(
        rootReucer,
        initalState,
        applyMiddleware(thunk, reduxImmutableStateInvariant())
    )
}