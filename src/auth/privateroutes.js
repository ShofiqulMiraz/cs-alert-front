import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ children, ...rest }) => {
  // getting user state from redux
  const { isloggedin } = useSelector((state) => state.userReducer);
  return (
    <Route
      {...rest}
      render={() => (isloggedin ? children : <Redirect to="/login" />)}
    />
  );
};
export default PrivateRoute;
