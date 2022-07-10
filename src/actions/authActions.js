import api from "../services/api";
import { toast } from "react-toastify";
import * as actions from "./index";
import jwtDecode from "jwt-decode";
 

// export function getUserById(id) {
//   return (dispatch) => {
//     dispatch(actions.getUserBegin());
//     api
//       .get(`/v1/users/${id}`)
//       .then(function (res) {
//         console.log("res =>", res.data);
//         dispatch(actions.getUserSuccess(res));
//       })
//       .catch(function (error) {
//         const { response } = error;
//         console.log("err", response);
//         if (response !== undefined) {
//           dispatch(actions.getUserFailure(response));
//         }
//       });
//   };
// }


// export function deleteUserById(_id) {
//   return (dispatch) => {
//     dispatch(actions.deleteUserBegin());
//     api
//       .delete(`/v1/users/${_id}`)
//       .then(function (res) {
//         console.log("res =>", res.data);
//         dispatch(actions.deleteUserSuccess(_id));
//       })
//       .catch(function (error) {
//         const { response } = error;
//         console.log("err", response);
//         if (response !== undefined) {
//           dispatch(actions.deleteUserFailure(response));
//           alert(response.data?.message);
//         }
//       });
//   };
// }

// export function getUsers() {
//   return (dispatch) => {
//     dispatch(actions.fetchUserBegin());
//     api
//       .get('/v1/users')
//       .then(function (res) {
      
//         console.log("res =>", res.data);
//         dispatch(actions.fetchUserSuccess(res.data));
//       })
//       .catch(function (error) {
//         const { response } = error;
//         console.log("err", response);
//         if (response !== undefined) {
//           dispatch(actions.fetchUserFailure(response));
//         }
//       });
//   };
// }

  //  export const getUsers = () => {
  //   return (dispatch) => {
  //     dispatch(actions.fetchUserBegin());
  //     api
  //       .get(`v1/users`)
  //       .then(function (res) {
  //         console.log(res)
  //         dispatch(actions.fetchUserSuccess(res));
          
  //       })
  //       .catch((error) => {
  //         const errorMessage = error.message;
  //         dispatch(actions.fetchUserFailure(errorMessage));
  //         console.log(error);
  //         toast.error(error.message, {
  //           position: toast.POSITION.TOP_RIGHT,
  //         });
  //       });
  //   };
  // };
  
  // export const addUser = (user) => {
  //   return (dispatch) => {
  //     setTimeout(() => {
  //       dispatch(addUserAsync(user)); //we call the dispatch function inside another dispatch with help of redux thunk
  //     }, 5000);
  //   };
  // };

//  export const addUser = (user) => {
//   return (dispatch) => {
    
//     return api.post('/v1/users',user)
      
//       .then(response => {
//         localStorage.setItem("token", response.data.tokens.access.token);
//         dispatch(actions.addUserAsync(response))
//       })
//       .catch(error => {
//         throw(error);
//       });
//   };
// };



export const signUp = (user) => {
  return (dispatch) => {
    dispatch(actions.userSignupRequest());
    api
      .post(`v1/auth/register`, user)
      .then((token) => {
        localStorage.setItem("token", token.data.tokens.access.token);
        dispatch(actions.userSignupSuccess(token));
       
        
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(actions.userSignupFailure(errorMessage));
        console.log(error);
        toast.error(error.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
      });
  };
};




// export const loadUser = (refreshToken) => {
//   return dispatch => {
//     dispatch(actions.loadUserRequest());
//       api.post('/v1/auth/refresh-tokens', refreshToken)
//           .then(token => {
//             console.log(refreshToken)
//            localStorage.setItem("token", token.data.access.token);

//           //  const { sub: userId } = jwtDecode(token.data.access.token);
//           //         console.log(userId);
//                     // const loadUserDetails = (userId) => {
//                     //   api.get('/v1/users'`${userId}`).then((user) => {
//                     //     console.log(user.data);
//                     //     dispatch(actions.loadUserSuccess(user.data));
//                     //   });
//                     // };
//                     // loadUserDetails(userId);
//           });
//   }
// }
// export const loadUser = (refreshToken) => {
//   return (dispatch) => {
//     dispatch(actions.loadUserRequest());
//     api
//       .post(`/v1/auth/refresh-tokens`, refreshToken)
//       .then((token) => {
//         console.log(refreshToken)
//         localStorage.setItem("token", token.data.access.token);
//         // localStorage.setItem("refreshToken", token.data.refresh.token);
//         const { sub: userId } = jwtDecode(token.data.access.token);
//         console.log(userId);
//         const loadUserDetails = (userId) => {
//           api.get(`/v1/users/${userId}`).then((user) => {
//             console.log(user.data);
//             dispatch(actions.loadUserSuccess(user.data));
//           });
//         };
//         loadUserDetails(userId);
//       })
//       .catch((error) => {
//         const errorMessage = error.message;
//         dispatch(actions.loadUserFailure(errorMessage));
//         toast.error(error.errorMessage, {
//           position: toast.POSITION.TOP_RIGHT,
//         });
//       });
//   };
// };



export const loadUser = (refreshToken) => {
  return (dispatch) => {
    dispatch(actions.loadUserRequest());
    api
      .post(`/v1/auth/refresh-tokens`, refreshToken)
      .then((token) => {
        console.log(refreshToken)
        localStorage.setItem("token", token.data.access.token);
         localStorage.setItem(`refreshToken`, token.data.refresh.token);
         const { sub: userId } = jwtDecode(token.data.access.token);
                 console.log(userId);
                 const loadUserDetails = (userId) => {
                   api.get(`/v1/users/${userId}`).then((user) => {
                     console.log(user.data);
                     dispatch(actions.loadUserSuccess(user.data));
                   });
                 };
                 loadUserDetails(userId);
       
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(actions.loadUserFailure(errorMessage));
        toast.error(error.errorMessage, {
          position: toast.POSITION.TOP_RIGHT,
        });
      });
  };
};


// export const fetchUsers = () => {
//   return dispatch => {
//     dispatch(actions.fetchUsersRequest);
//     api
//       .get("/v1/users")
//       .then(response => {
//         const users = response.data;
//         console.log(users);
//         dispatch(actions.fetchUsersSucess(users));
//       })
//       .catch(error => {
//         const errorMsg = error.message;
//         dispatch(actions.fetchUsersFailure(errorMsg));
//       });
//   };
// };









export const signIn = (user) => {
  return (dispatch) => {
    dispatch(actions.userLoginRequest());
    api
      .post(`v1/auth/login`, user)
      .then((token) => {
        // console.log(token)
        localStorage.setItem("token", token.data.tokens.access.token);
        dispatch(actions.userLoginSuccess(token));
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(actions.userLoginFailure(errorMessage));
        console.log(error);
        toast.error(error.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
      });
  };
};




export const logOut = () => {
  localStorage.removeItem("token");
  // localStorage.removeItem("refreshToken");
  localStorage.removeItem("redux");
  return (dispatch) => {
    dispatch(actions.userLogout());
  };
};
