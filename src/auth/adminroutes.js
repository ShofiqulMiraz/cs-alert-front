import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const AdminRoute = ({ children, ...rest }) => {
  // getting user state from redux
  const { user } = useSelector((state) => state.userReducer);
  return (
    <Route
      {...rest}
      render={() => (user?.role === "admin" ? children : <Redirect to="/" />)}
    />
  );
};
export default AdminRoute;
