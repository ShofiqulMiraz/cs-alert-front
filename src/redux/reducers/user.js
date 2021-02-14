const INITIAL_STATE = {
  isloggedin: false,
  user: null,
  token: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "LOGIN": {
      return {
        ...state,
        isloggedin: true,
        user: action.user,
        token: action.token,
      };
    }

    case "SIGNUP": {
      return {
        ...state,
        isloggedin: true,
        user: action.user,
        token: action.token,
      };
    }

    case "LOGOUT": {
      return {
        ...state,
        isloggedin: false,
        user: null,
        token: null,
      };
    }

    default: {
      return {
        ...state,
      };
    }
  }
};

export default userReducer;
