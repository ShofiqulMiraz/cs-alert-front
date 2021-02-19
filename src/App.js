import React, { useEffect, Suspense } from "react";

import NavBar from "./components/nav/nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoadingSpinner from "./components/loadingspinner/loadingspinner";
import { Login, Logout } from "./redux/actions/user";
import { useDispatch } from "react-redux";
import SearchPage from "./pages/searchpage";
import PrivateRoute from "./auth/privateroutes";
import AdminRoute from "./auth/adminroutes";
const ScamRequests = React.lazy(() => import("./pages/scamrequests"));
const LoginComponent = React.lazy(() => import("./components/login/login"));
const HomePage = React.lazy(() => import("./pages/homepage"));
const AllScammerPage = React.lazy(() => import("./pages/allscammerpage"));
const NewestScamsPage = React.lazy(() => import("./pages/newestscamspage"));
const TopScamPage = React.lazy(() => import("./pages/topscampage"));
const ReportScamPage = React.lazy(() => import("./pages/reportscampage"));
const VerificationPage = React.lazy(() => import("./pages/verificationpage"));
const SingleScamDetailsPage = React.lazy(() =>
  import("./pages/singlescamdetailspage")
);
const SignUpComponent = React.lazy(() => import("./components/signup/signup"));

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
    <>
      <Suspense fallback={<LoadingSpinner />}>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/allscammers" component={AllScammerPage} />
            <Route path="/newestscams" component={NewestScamsPage} />
            <Route path="/topscams" component={TopScamPage} />
            <PrivateRoute path="/reportscam">
              <ReportScamPage />
            </PrivateRoute>
            <AdminRoute path="/scamrequests">
              <ScamRequests />
            </AdminRoute>
            <Route path="/verification" component={VerificationPage} />
            <Route path="/signup" component={SignUpComponent} />
            <Route path="/login" component={LoginComponent} />
            <Route path="/scams/:id" component={SingleScamDetailsPage} />
            <Route path="/search/:term" component={SearchPage} />
          </Switch>
        </Router>
      </Suspense>
    </>
  );
}

export default App;
