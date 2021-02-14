import { Helmet } from "react-helmet";
import Login from "../components/login/login";

const LoginPage = () => {
  return (
    <>
      <Helmet>
        <title>Devconnector | Log In</title>
      </Helmet>
      <Login />
    </>
  );
};

export default LoginPage;
