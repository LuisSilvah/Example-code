import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { ROUTES } from "../_constants";
import { flowService } from "../_helpers/flow";

export const Login = () => {
  const [isAuth, setIsAuth] = useState(false);

  const [{ username, password }] = useState({
    // Nosso Mock
    username: "test",
    password: "pass"
  });
  const [formState, setFormState] = useState({
    // valor que será populado com input do usuário
    username: "",
    password: ""
  });
  const [hasError, setHasError] = useState(false); // se os valores forem diferentes entre mock e o do user ele seta como true

  useEffect(() => {
    const isAuth = localStorage.getItem("@isAutenticate"); // verificamos se existe o token

    if (isAuth) {
      // se existir passamos como true
      setIsAuth(true);
    }
  }, []);

  const handleChange = (event) => {
    // Nosso evento para capturar os inputs
    const { name, value } = event.target; // Desestruturamos os valores name e value

    setFormState({
      ...formState,
      [name]: value // passamos name como chave (tem que ser igual ao declarado no useState()) e atribuimos o value para cada um deles
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Evitamos que o evento do botão se propague em outros locais
    if (username !== formState.username || password !== formState.password) {
      // validamos se as informações não  batem
      setHasError(true); // ai mostramos o erro

      return;
    }
    localStorage.setItem("@isAutenticate", "logado"); // Deu certo, vamos setar nosso token
    flowService.goTo(ROUTES.HOME); // Mandaremos para a nossa Home
  };

  return (
    <>
      {isAuth ? ( // Se estiver logado, ele sera redirecionado para a Home, não faria sentido aparecer a tela de login novamente =D
        <Redirect to={ROUTES.HOME} />
      ) : (
        <>
          <div className="jumbotron">
            <div className="container">
              <div className="row">
                <div className="col-md-6 offset-md-3">

                  <h2>Login</h2>
                  <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                      onChange={handleChange} name="username" type="text"  className="form-control" />
                    {/* <ErrorMessage name="username" component="div" className="invalid-feedback" /> */}
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                      onChange={handleChange} name="password" type="password"  className="form-control"/>
                    {/* <ErrorMessage name="password" component="div" className="invalid-feedback" /> */}
                  </div>
                  <div className="form-group">
                    <button onClick={handleSubmit} type="submit" className="btn btn-primary">
                      {handleSubmit ?
                        (<>Login</>):
                        (<img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                        ) 
                      }
                    </button>
                  </div>
                  {hasError &&
                    <div className={'alert alert-danger'}>Login or pass invalid</div>
                  }
                </div></div>
            </div>
          </div>

        </>
      )}
    </>
  );
};
