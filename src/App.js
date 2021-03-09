import React, { useEffect, Suspense } from "react";
import NavBar from "./components/nav/nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoadingSpinner from "./components/loadingspinner/loadingspinner";
import { Login, Logout } from "./redux/actions/user";
import { useDispatch } from "react-redux";
import SearchPage from "./pages/searchpage/searchpage";
import PrivateRoute from "./auth/privateroutes";
import AdminRoute from "./auth/adminroutes";
import { HelmetProvider } from "react-helmet-async";

const ForgotPassword = React.lazy(() =>
  import("./pages/forgotpassword/forgotpassword")
);
const ResetPassword = React.lazy(() =>
  import("./pages/resetpassword/resetpassword")
);
const NotFound = React.lazy(() => import("./pages/notfound/notfound"));
const SingleScamRequest = React.lazy(() =>
  import("./pages/singlescamrequest/singlescamrequest")
);
const ScamRequests = React.lazy(() =>
  import("./pages/scamrequests/scamrequests")
);
const LoginComponent = React.lazy(() => import("./components/login/login"));
const HomePage = React.lazy(() => import("./pages/homepage/homepage"));
const AllScammerPage = React.lazy(() =>
  import("./pages/allscammerpage/allscammerpage")
);
const NewestScamsPage = React.lazy(() =>
  import("./pages/newestscamspage/newestscamspage")
);
const TopScamPage = React.lazy(() => import("./pages/topscampage/topscampage"));
const ReportScamPage = React.lazy(() =>
  import("./pages/reportscampage/reportscampage")
);
const VerificationPage = React.lazy(() =>
  import("./pages/verificationpage/verificationpage")
);
const SingleScamDetailsPage = React.lazy(() =>
  import("./pages/singlescamdetailspage/singlescamdetailspage")
);
const SignUpComponent = React.lazy(() => import("./components/signup/signup"));
const PostNewScamPage = React.lazy(() =>
  import("./pages/postnewscampage/postnewscampage")
);

function App() {
  // continuously checking user auth state
  const dispatch = useDispatch();
  useEffect(() => {
    const user = JSON.parse(window.localStorage.getItem("user"));
    const token = window.localStorage.getItem("jwt");

    if (user && token) {
      dispatch(Login(user, token));
    } else {
      dispatch(Logout());
    }
  }, []);
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <HelmetProvider>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/allscammers" component={AllScammerPage} />
            <Route path="/newestscams" component={NewestScamsPage} />
            <Route path="/topscams" component={TopScamPage} />
            <PrivateRoute path="/reportscam" component={ReportScamPage} />
            <Route path="/verification" component={VerificationPage} />
            <Route path="/signup" component={SignUpComponent} />
            <Route path="/login" component={LoginComponent} />
            <Route path="/forgotpassword" component={ForgotPassword} />
            <Route path="/resetpassword/:token" component={ResetPassword} />
            <Route path="/scams/:id" component={SingleScamDetailsPage} />
            <Route path="/search/:term" component={SearchPage} />
            <AdminRoute path="/scamrequests" component={ScamRequests} />
            <AdminRoute path="/scamrequest/:id" component={SingleScamRequest} />
            <AdminRoute path="/postnewscam" component={PostNewScamPage} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </HelmetProvider>
    </Suspense>
  );
}

export default App;
