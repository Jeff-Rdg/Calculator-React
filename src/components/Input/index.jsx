import { InputContainer } from "./styles";

const Input = (props) => {
  return (
    <InputContainer>
      <input value={props.value} disabled />
    </InputContainer>
  );
};

export default Input;
