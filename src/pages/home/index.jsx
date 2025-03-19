import {
  Main,
  DivImagem,
  Img,
  Form,
  Tittle,
  ListaInputs,
  DivLinha1,
  DivLinha2,
  Input,
  ListaItem,
  Label,
  Button,
} from "./styles.js";

import UsersImage from "../../assets/users.png";

function Home() {
  return (
    <>
      <Main>
        <DivImagem>
          <Img src={UsersImage} alt="Imagem de fundo - usuários" />
        </DivImagem>
        <Form>
          <Tittle>Cadastro de Usuário</Tittle>
          <ListaInputs>
            <DivLinha1>
              <ListaItem>
                <Label for="nome">
                  {" "}
                  Nome do usuário <span>*</span>
                </Label>
                <Input
                  type="text"
                  id="nome"
                  placeholder="Nome do usuário"
                ></Input>
              </ListaItem>
              <ListaItem>
                <Label for="idade">
                  {" "}
                  Idade<span>*</span>
                </Label>
                <Input
                  type="number"
                  id="idade"
                  placeholder="Idadade do usuário"
                ></Input>
              </ListaItem>
            </DivLinha1>
            <DivLinha2>
              <ListaItem>
                <Label for="email">
                  {" "}
                  Digite seu e-mail <span>*</span>
                </Label>
                <Input
                  type="email"
                  id="email"
                  placeholder="E-mail do usuário"
                ></Input>
              </ListaItem>
            </DivLinha2>
          </ListaInputs>
          <Button type="submit">Cadastrar</Button>
        </Form>
      </Main>
    </>
  );
}

export default Home;
