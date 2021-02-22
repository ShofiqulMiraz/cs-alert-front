import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const AdminRoute = ({ component: Component, ...rest }) => {
  // getting user state from redux
  const { user } = useSelector((state) => state.userReducer);
  return (
    <Route
      {...rest}
      render={(props) =>
        user?.role === "admin" ? (
          <Component {...rest} {...props} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};
export default AdminRoute;
