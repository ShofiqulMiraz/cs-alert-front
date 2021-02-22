import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ component: Component, ...rest }) => {
  // getting user state from redux
  const { isloggedin } = useSelector((state) => state.userReducer);
  return (
    <Route
      {...rest}
      render={(props) =>
        isloggedin ? (
          <Component {...rest} {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};
export default PrivateRoute;
