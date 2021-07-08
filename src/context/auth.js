import React, { useReducer, createContext } from 'react';
import jwtDecode from 'jwt-decode';

//The AuthContext is used for our component to access our context
//AuthProvide is used to wrap all our application so that it will have access to this provider or to the function in the context 

const initialState = {
    user: null
}


if(localStorage.getItem('jwtToken')){
    //To check if the token is expired
    const decodedToken  = jwtDecode(localStorage.getItem('jwtToken'))


    if(decodedToken.exp * 1000 < Date.now()){
        localStorage.removeItem('jwtToken')
    }else {
        initialState.user = decodedToken
    }

}



const AuthContext = createContext({
    user: null,
    login: (userData) => {},
    logout: () => {}
})

function authReducer(state, action) {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                user:action.payload
            }
        case 'LOGOUT':
            return {
                ...state,
                user: null
            }
    
        default:
            return state
    }
    
}

function AuthProvider(props){
    const[state, dispatch]  = useReducer(authReducer, initialState);
    console.log(state)

    function login(userData){
        localStorage.setItem('jwtToken', userData.token)
        dispatch({
            type: 'LOGIN',
            payload:userData
        })
    }

    function logout(){
        localStorage.removeItem('jwtToken');
        dispatch({
            type:'LOGOUT'
        })
    }

    return (
        <AuthContext.Provider 
            value={{ user: state.user, login, logout}}
            {...props}
            />
    )
}

export { AuthContext, AuthProvider}