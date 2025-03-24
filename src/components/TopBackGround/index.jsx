import { TopBackGround, Img } from "./styles";

import UsersImage from "../../assets/users.png";

function TopBackGroundDefault() {
  return (
      <TopBackGround><Img src={UsersImage} alt="Imagem de fundo - usuários" /></TopBackGround>
    
  );
}

export default TopBackGroundDefault;