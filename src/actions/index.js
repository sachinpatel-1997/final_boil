import * as actionTypes from "./actionTypes";

// SignUp action creators

export const userSignupRequest = () => {
  return {
    type: actionTypes.USER_SIGNUP_REQUEST,
  };
};
export const userSignupSuccess = (user) => {
  return {
    type: actionTypes.USER_SIGNUP_SUCCESS,
    payload: user,
  };
};
export const userSignupFailure = (error) => {
  return {
    type: actionTypes.USER_SIGNUP_FAILURE,
    payload: error,
  };
};

// Login action creators

export const userLoginRequest = () => {
  return {
    type: actionTypes.USER_LOGIN_REQUEST,
  };
};
export const userLoginSuccess = (user) => {
  return {
    type: actionTypes.USER_LOGIN_SUCCESS,
    payload: user,
  };
};
export const userLoginFailure = (error) => {
  return {
    type: actionTypes.USER_LOGIN_FAILURE,
    payload: error,
  };
};

// loadUser action creators

export const loadUserRequest = () => {
  return {
    type: actionTypes.USER_RELOAD_REQUEST,
  };
};
export const loadUserSuccess = (token) => {
  return {
    type: actionTypes.USER_RELOAD_SUCCESS,
    payload: token,
  };
};
export const loadUserFailure = (error) => {
  return {
    type: actionTypes.USER_RELOAD_FAILURE,
    payload: error,
  };
};

// Logout action creators

export const userLogout = () => {
  return {
    type: actionTypes.USER_LOGOUT,
  };
};

// export const fetchUserBegin = () => ({
//   type: actionTypes.GET_USER_REQUEST
// });

// export const fetchUserSuccess = (results) => ({
//   type: actionTypes.GET_USER_SUCCESS,
//   // payload: [data]
//   results
// });

// export const fetchUserFailure = error => ({
//   type: actionTypes.GET_USER_FAILURE,
//   payload: { error }
// });


// export const deleteUserBegin = () => ({
//   type: actionTypes.DELETE_USER_BYID_REQUEST
// });

// export const deleteUserSuccess = (_id) => ({
//   type: actionTypes.DELETE_USER_BYID_SUCCESS,
//   payload: [ _id ]
// });

// export const deleteUserFailure = (response) => ({
//   type: actionTypes.DELETE_USER_BYID_FAILURE,
//   payload: response.data 
// });



// export const getUserBegin = () => ({
//   type: actionTypes.GET_USER_BYID_REQUEST
// });

// export const getUserSuccess = (res) => ({
//   type: actionTypes.GET_USER_BYID_SUCCESS,
//   payload: res.data
// });

// export const getUserFailure = (response) => ({
//   type: actionTypes.GET_USER_BYID_FAILURE,
//   payload: response?.data
// });

// export const fetchData = (data) => {
//   return {
//     type: actionTypes.FETCH_GITHUB_DATA,
//     data
//   }
// };

