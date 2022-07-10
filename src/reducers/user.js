import {
    CREATE_USER_REQUEST,
    CREATE_USER_SUCCESS,
    CREATE_USER_FAILURE,
    GET_USER_REQUEST,
    GET_USER_SUCCESS,
    GET_USER_FAILURE,
    GET_USER_BYID_REQUEST,
    GET_USER_BYID_SUCCESS,
    GET_USER_BYID_FAILURE,
    UPDATE_USER_BYID_REQUEST,
    UPDATE_USER_BYID_SUCCESS,
    UPDATE_USER_BYID_FAILURE,
    DELETE_USER_BYID_REQUEST,
    DELETE_USER_BYID_SUCCESS,
    DELETE_USER_BYID_FAILURE,
  } from "../actions/action-types";
  const initialState = {
    loading: false,
     result: "",
    results: [],
    error: "",
  };
  export function users(state = initialState, action) {
    switch (action.type) {
      case CREATE_USER_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case CREATE_USER_SUCCESS:
        return {
          ...state,
          loading: false,
        };
      case CREATE_USER_FAILURE:
        return {
          ...state,
          loading: false,
        };
  
      case GET_USER_REQUEST:
        return {
          ...state,
        };
      case GET_USER_SUCCESS:
        // {
        //     const results = action.payload?.response;
        //     console.log(results,"sa")
        // return {
        //     ...state,
        //     loading: false,
        //     isLoggedIn: !!localStorage.getItem("token"),
        //     // results: action.payload?.response,
        //     results: [
        //      {
        //       id: results.id,
        //       name: results.name,
        //       email: results.email,
        //       role: results.role,
              
        //       }],
        //   };
        // }
    
        // return {
        //   ...state,
          // results: [action.payload.results, ...state.results],
          return { results: action.payload.results, ...state.results}
          // ...state,
          // results: [action.payload?.response, ...state.results],
        // };
      case GET_USER_FAILURE:
        return {
          ...state,
          error: action.payoad,
        };
  
      case GET_USER_BYID_REQUEST:
        return {
          ...state,
        };
      case GET_USER_BYID_SUCCESS:
        return {
          ...state,
          results: action.payload?.response,
        };
      case GET_USER_BYID_FAILURE:
        return {
          ...state,
          error: action.payload,
        };
  
      case UPDATE_USER_BYID_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case UPDATE_USER_BYID_SUCCESS:
        return {
          ...state,
          loading: false,
        };
      case UPDATE_USER_BYID_FAILURE:
        return {
          ...state,
          loading: false,
        };
  
      case DELETE_USER_BYID_REQUEST:
        return {
          ...state,
          results: state.results.map((res) =>
            res._id === action.payload ? { ...res, loading: true } : res
          ),
          loading: true,
        };
      case DELETE_USER_BYID_SUCCESS:
        return {
          ...state,
          results: state.results.filter((res) => res._id !== action.payload),
          loading: false,
        };
      case DELETE_USER_BYID_FAILURE:
        return {
          ...state,
          error: action.payload,
          loading: false,
        };
  
      default:
        return state;
    }
  }