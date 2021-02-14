import React, { useState, useEffect, Suspense } from "react";

import NavBar from "./components/nav/nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoadingSpinner from "./components/loadingspinner/loadingspinner";
import { Login, Logout } from "./redux/actions/user";
import { useDispatch } from "react-redux";
const HomePage = React.lazy(() => import("./pages/homepage"));
const AllScammerPage = React.lazy(() => import("./pages/allscammerpage"));
const NewestScamsPage = React.lazy(() => import("./pages/newestscamspage"));
const TopScamPage = React.lazy(() => import("./pages/topscampage"));
const ReportScamPage = React.lazy(() => import("./pages/reportscampage"));
const VerificationPage = React.lazy(() => import("./pages/verificationpage"));
const SingleScamDetailsPage = React.lazy(() =>
  import("./pages/singlescamdetailspage")
);
const SignUpPage = React.lazy(() => import("./pages/signuppage"));
const LoginPage = React.lazy(() => import("./pages/loginpage"));

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
            <Route path="/reportscam" component={ReportScamPage} />
            {/* <ProtectedRoute path="/reportscam" component={ReportScamPage} /> */}
            <Route path="/verification" component={VerificationPage} />
            <Route path="/signup" component={SignUpPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/scams/:id" component={SingleScamDetailsPage} />
          </Switch>
        </Router>
      </Suspense>
    </>
  );
}

export default App;
