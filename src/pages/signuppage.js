import { Helmet } from "react-helmet";
import SignUp from "../components/signup/signup";

const SignUpPage = () => {
  return (
    <>
      <Helmet>
        <title>Devconnector | Sign Up</title>
      </Helmet>
      <SignUp />
    </>
  );
};

export default SignUpPage;
