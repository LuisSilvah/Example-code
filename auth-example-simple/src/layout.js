import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";

const Layout = (props) => {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    // Disparo um gatilho para verificar se o token existe no meu localStorage
    const isAuth = localStorage.getItem("@isAutenticate");

    if (isAuth) {
      // Se existir eu seto como autenticado
      setIsAuth(true);
    }
  }, []);

  return (
    <>
      {/*  somente exibo a navbar se realmente o usuário estiver logado */}
      {isAuth && <Navbar />}
      <div>{props.children}</div>
    </>
  );
};

export default Layout;
