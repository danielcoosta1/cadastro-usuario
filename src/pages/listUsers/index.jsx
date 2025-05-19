import ButtonDefault from "../../components/Button";
import TopBackGroundDefault from "../../components/TopBackGround";
import { buscarUsuario } from "./buscarUsuario";
import { deletarUsuario } from "./deletarUsuario";

import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    buscarUsuario()
      .then((res) => {
        setUsuario(res);
        setCarregando(false);
      })
      .catch((err) => {
        console.error(err);
        setCarregando(false);
      });
  }, []);

  const handleDelete = async (id) => {
    await deletarUsuario(id);
    const novosUsuarios = await buscarUsuario();
    setUsuario(novosUsuarios);
  };

  return (
    <>
      <Main>
        <TopBackGroundDefault />
        <Container>
          <Tittle>Listagem de Usuário</Tittle>
          <ContainerLista>
            {carregando ? (
              <p>Carregando usuários...</p>
            ) : usuario.length === 0 ? (
              <p>Nenhum usuário cadastrado.</p>
            ) : (
              <Lista>
                {usuario.map((usuario) => (
                  <ListaItem key={usuario.id}>
                    <DivImagem>
                      <Avatar
                        src={`https://avatar.iran.liara.run/public/?username=${usuario.id}`}
                      />
                    </DivImagem>
                    <ContainerDescricao>
                      <h2>{usuario.name}</h2>
                      <p>{usuario.email}</p>
                      <p>{usuario.age}</p>
                    </ContainerDescricao>
                    <Trash
                      src={trash}
                      onClick={() => handleDelete(usuario.id)}
                    />
                  </ListaItem>
                ))}
              </Lista>
            )}
          </ContainerLista>

          <ButtonDefault
            type="button"
            style={{ width: "30%" }}
            onClick={() => navigate("/")}
          >
            Voltar
          </ButtonDefault>
        </Container>
      </Main>
    </>
  );
}

export default ListUsers;
