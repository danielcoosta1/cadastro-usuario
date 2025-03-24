import ButtonDefault from "../../components/Button";
import TopBackGroundDefault from "../../components/TopBackGround";
import { buscarUsuario } from "./buscarUsuario";

import { useEffect, useState } from "react";

import {
  Main,
  Container,
  ContainerLista,
  Avatar,
  DivImagem,
  Trash,
  Lista,
  ListaItem,
  ContainerDescricao,
} from "./styles";

import trash from "../../assets/trash.svg";
import { Tittle } from "../home/styles";

function ListUsers() {
  const [usuario, setUsuario] = useState([]);

  useEffect(() => {
    buscarUsuario().then(setUsuario).catch(console.error);
  }, []);

  return (
    <>
      <Main>
        <TopBackGroundDefault />
        <Container>
          <Tittle>Listagem de Usuário</Tittle>
          <ContainerLista>
            <Lista>
              {usuario.map((usuario) => (
                <ListaItem key={usuario.id}>
                  <DivImagem>
                    <Avatar
                      src={`https://avatar.iran.liara.run/public/?username=[${usuario.id}]`}
                    />
                  </DivImagem>
                  <ContainerDescricao>
                    <h2>{usuario.name}</h2>
                    <p>{usuario.email}</p>
                    <p>{usuario.age}</p>
                  </ContainerDescricao>
                  <Trash src={trash} />
                </ListaItem>
              ))}
            </Lista>
          </ContainerLista>
          <ButtonDefault>Voltar</ButtonDefault>
        </Container>
      </Main>
    </>
  );
}

export default ListUsers;
