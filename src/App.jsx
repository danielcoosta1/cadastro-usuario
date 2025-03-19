import {
  Main,
  DivImagem,
  Form,
  Tittle,
  ListaInputs,
  Input,
  ListaItem,
  Label,
  Span,
  Button,
} from "./assets/styles.js";

function Home() {
  return (
    <>
      <Main>
        <DivImagem>
          <img />
        </DivImagem>
        <Form>
          <Tittle>Cadastro de Usuário</Tittle>
          <ListaInputs>
            <div>
              <ListaItem>
                <Label for="nome">
                  {" "}
                  Nome do usuário <Span>*</Span>{" "}
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
                  Idade <Span>*</Span>
                </Label>
                <Input
                  type="number"
                  id="idade"
                  placeholder="Idadade do usuário"
                ></Input>
              </ListaItem>
            </div>
            <div>
              <ListaItem>
                <Label for="email">
                  {" "}
                  Digite seu e-mail <Span>*</Span>
                </Label>
                <Input
                  type="email"
                  id="email"
                  placeholder="E-mail do usuário"
                ></Input>
              </ListaItem>
            </div>
          </ListaInputs>
          <Button type="submit">Cadastrar</Button>
        </Form>
      </Main>
    </>
  );
}

export default Home;
