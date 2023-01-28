import { ButtonContainer } from "./styles";

const Button = (props) => {
  return (
    <ButtonContainer onClick={props.OnClick}>{props.type}</ButtonContainer>
  );
};

export default Button;
