import React, { useEffect, useState } from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import Layout from "./layout";
import { Home, About, Contact, Login } from "./pages";
import { ROUTES } from "./_constants";

/* Import Custom Routes */
import PublicRoute from "./_routers/PublicRoute";
import PrivateRoute from "./_routers/PrivateRoute";

const Router = () => {
  const [isAutenticating, setAutnticating] = useState(true); // variavel para verificar se esta sendo autenticado
  const [childProps, setChildProps] = useState({ isAutenticated: false }); // Onde vamos colocar as infos de logado ou não, podemos passar infos de usuário também

  useEffect(() => {
    // Esse metodo hook será nosso gatilho pra verificarmos se está logado ou não
    const isAuth = localStorage.getItem("@isAutenticate");

    if (isAuth === "logado") {
      // Se estiver logado vamos setar nossa flag "isAutenticated" para true
      setChildProps({ isAutenticated: true });
    }
    setAutnticating(false);
  }, []);

  return (
    <>
      {!isAutenticating && ( // Precisamos verificar se o BrowserRouter tem ou não acesso por meio dessa váriavel
        <BrowserRouter>
          <Switch>
            <Layout>
              <PublicRoute // Passamos somente o login como rota pública
                {...childProps} // enviamos tambem esse objeto pra saber se ta com permissão ou não
                path={ROUTES.LOGIN}
                component={Login}
                exact
              />

              <PrivateRoute // Faremos o mesmo com as rotas privadas
                {...childProps}
                path={ROUTES.HOME}
                component={Home}
                exact
              />
              <PrivateRoute
                {...childProps}
                path={ROUTES.ABOUT}
                component={About}
                exact
              />
              <PrivateRoute
                {...childProps}
                path={ROUTES.CONTACT}
                component={Contact}
                exact
              />
            </Layout>
          </Switch>
        </BrowserRouter>
      )}
    </>
  );
};

export default Router;
