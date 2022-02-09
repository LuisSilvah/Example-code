import { ROUTES } from "../_constants"; // Precisaremos das rotas

const goTo = (path, params) => {
  // criaremos nosso redirect para dar um replace no path do browser
  window.location.replace(
    decodeURIComponent((path || ROUTES.HOME) + (params ? params : "")) //usaremos um componente codificado de um Identificador Uniforme de Recursos
  );
};

export const flowService = {
  goTo
};
