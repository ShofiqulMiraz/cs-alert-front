import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./nav.scss";
import { Link, NavLink } from "react-router-dom";
import { Logout } from "../../redux/actions/user";

const NavBar = () => {
  // getting user state from redux
  const { user, isloggedin } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  // handling logout action
  const handleLogout = () => {
    dispatch(Logout());
  };

  // checking if nav toggle is clicked
  const [navclicked, setNavclicked] = useState(false);
  const navclickHandler = () => {
    setNavclicked(!navclicked);
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-top navbar-light bg-light">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            CryptoScamAlert
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={navclickHandler}
          >
            {navclicked ? (
              <i className="fas fa-times"></i>
            ) : (
              <i className="fas fa-bars"></i>
            )}
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink to="/allscammers" className="nav-link">
                  All Scammers
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/newestscams" className="nav-link">
                  Newest Scams
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/topscams" className="nav-link">
                  Top Scams
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/reportscam" className="nav-link report-scam">
                  Report Scams
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/verification"
                  className="nav-link verification-nav"
                >
                  Check Before Invest
                </NavLink>
              </li>
              {isloggedin ? (
                <>
                  <button
                    className="btn logout-btn d-flex"
                    onClick={handleLogout}
                  >
                    {" "}
                    Logout{" "}
                  </button>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <NavLink to="/login" className="nav-link">
                      Login
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/signup" className="nav-link">
                      Signup
                    </NavLink>
                  </li>
                </>
              )}
              {user?.role === "admin" && (
                <>
                  <li className="nav-item">
                    <NavLink to="/scamrequests" className="nav-link">
                      Scam Requests
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/postnewscam" className="nav-link">
                      Post New Scam
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
