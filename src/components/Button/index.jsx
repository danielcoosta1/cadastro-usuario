import { Button } from "./styles";

function ButtonDefault({children,...props}) {
  return (
      <Button{...props}>{children}</Button>
    
  );
}

export default ButtonDefault;
