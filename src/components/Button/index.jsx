import { Button } from "./styles";

function ButtonDefault({children,theme,...props}) {
  return (
    
      <Button{...props} theme={theme}>{children}</Button>
    
  );
}

export default ButtonDefault;
