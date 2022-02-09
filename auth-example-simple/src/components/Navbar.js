import React from "react";

import { Link } from "react-router-dom";
import { ROUTES } from "../_constants";

/* Flow de serviços*/
import { flowService } from "../_helpers/flow";

const NavBar = () => {
  const handleLogout = () => {
    localStorage.removeItem("@isAutenticate"); // removo o token do localStorage
    flowService.goTo(ROUTES.LOGIN); // redireciono para a pagina de login
  };

  return (
    <>

      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="navbar-nav">
          <Link to={ROUTES.HOME} className="nav-item nav-link">Home</Link>
          <Link to={ROUTES.ABOUT} className="nav-item nav-link">About</Link>
          <Link to={ROUTES.CONTACT} className="nav-item nav-link">Contact</Link>
          <Link onClick={handleLogout} className="nav-item nav-link">Logout</Link>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
