import React from "react";
import { Route } from "react-router-dom";

/*  Helpers */
import { deepMerge } from "../_helpers";

/*  Function */
import renderMergedProps from "./renderMergedProps";

const PublicRoute = ({ component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(routeProps) => {
        // Usamos o deepMerge somente para mesclar os 2 objetos "routeProps, rest"
        return renderMergedProps(component, deepMerge(routeProps, rest));
      }}
    />
  );
};

export default PublicRoute;
