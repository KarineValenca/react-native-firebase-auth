import firebase from 'firebase'
import createDataContext from './createDataContext'

const authReducer = (state, action ) => {
    switch(action.type) {
        case 'signin':
            return { errorMessage: '' }
        case 'add_error':
            return { ...state, errorMessage: action.payload}
    }
}

//TODO: improve this method to use a signup method
const signin = (dispatch) => async (email, password) => {
    try{
        await firebase.auth().signInWithEmailAndPassword(email, password)
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                .catch(() => {
                    dispatch({ type: 'add_error', payload: "Authentication error" })
                })
            })
        dispatch({ type: 'signin'})
    } catch (err) {
        dispatch({ type: 'add_error', payload: "Authentication error" })
    }
}


export const {Provider, Context } = createDataContext(
    authReducer,
    { signin },
    { token: null, errorMessage: '' } 
)