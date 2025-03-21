import { TopBackGround } from "./styles";

function TopBackGroundDefault({children,...props}) {
  return (
      <TopBackGround{...props}>{children}</TopBackGround>
    
  );
}

export default TopBackGroundDefault;