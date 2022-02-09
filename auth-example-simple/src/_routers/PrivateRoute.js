import React from "react";

// import { authenticationService } from "@/_services";
import { Redirect, Route, RouteProps } from "react-router-dom";

/*  Constants */
import { ROUTES } from "../_constants";

/*  Routes */
import PublicRoute from "./PublicRoute";

const PrivateRoute = (props) => {
  const { isAutenticated } = props; // Desestruturamos pra receber somente o que eu preciso

  return (
    <>
      {/* Abaixo, verifico se está logado e se o path chamado é o de login usando includes(), se for eu mando as infos pra rota pública */}
      {isAutenticated && <PublicRoute {...props} />}

      {/* Se não estiver logado eu mando o usuário para login */}
      {!isAutenticated && <Redirect to={ROUTES.LOGIN} />}
    </>
  );
};

export default PrivateRoute;

