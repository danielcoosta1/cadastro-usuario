import ButtonDefault from "../../components/Button";
import TopBackGroundDefault from "../../components/TopBackGround";
import { buscarUsuario } from "./buscarUsuario";

import { useEffect, useState } from "react";



function ListUsers() {
  const [usuario, setUsuario] = useState([]);

  useEffect(() => {
    buscarUsuario().then(setUsuario).catch(console.error);
  }, []);

  return (
    <>
      <TopBackGroundDefault />
      <h1>Listagem de Usuário</h1>
      <ul>
        {usuario.map((usuario) => (
          <li key={usuario.id}>
            <strong>{usuario.name}</strong> - {usuario.age} anos (
            {usuario.email})
          </li>
        ))}
      </ul>
      <ButtonDefault>Voltar</ButtonDefault>
    </>
  );
}

export default ListUsers;
