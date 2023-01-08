import React, {useReducer, createContext} from 'react';
import jwtDecode from 'jwt-decode';

const initialState = {
  user: null
}

if (localStorage.getItem('jwtDecode')) {
  const decodedToken = jwtDecode(localStorage.getItem('jwtDecode'));
  const decodedUserData = JSON.parse(localStorage.getItem('userData'));

  if (decodedToken.exp * 1000 < Date.now()) {
    localStorage.removeItem('jwtDecode')
    localStorage.removeItem('userData')
  } else {
    initialState.user = decodedUserData;
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
        user: action.payload
      };
    case 'LOGOUT':
      return {
        ...state,
        user: null
      };
    default:
      return state;
  }
}

function AuthProvider(props) {
  const [state, dispatch] = useReducer(authReducer, initialState);

  function login(userData) {
    localStorage.setItem('jwtDecode', userData.token);
    localStorage.setItem('userData', JSON.stringify(userData.result));
    dispatch({
      type: 'LOGIN',
      payload: userData.result
    })
  }

  function logout() {
    localStorage.removeItem('jwtDecode');
    localStorage.removeItem('userData');
    dispatch({
      type: 'LOGOUT'
    })
  }

  return (
    <AuthContext.Provider value={{user: state.user, login, logout}} {...props} />
  )
}

export {AuthContext, AuthProvider}