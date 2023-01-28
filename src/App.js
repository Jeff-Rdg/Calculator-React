import { Container, Content, Row, Column } from "./styles";
import Input from "./components/Input";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  const [currentNumber, setCurrentNumber] = useState("0");
  const [firstNumber, setFirstNumber] = useState("0");
  const [operation, setOperation] = useState("");

  const handleAddNumber = (number) => {
    setCurrentNumber((prev) => `${prev === "0" ? "" : prev}${number}`);
  };

  const handleClear = () => {
    setCurrentNumber("0");
    setFirstNumber("0");
    setOperation("");
  };

  const handleSumNumbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("+");
    } else {
      const result = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(result));
      setOperation("");
    }
  };

  const handleMinusNumbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("-");
    } else {
      const result = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(result));
      setOperation("");
    }
  };

  const handleMultiNumbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("*");
    } else {
      const result = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(result));
      setOperation("");
    }
  };

  const handleDividerNumbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("/");
    } else {
      const result = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(result));
      setOperation("");
    }
  };

  const handleEquals = () => {
    if (firstNumber !== "0" && operation !== "" && currentNumber !== "0") {
      switch (operation) {
        case "+":
          handleSumNumbers();
          break;
        case "-":
          handleMinusNumbers();
          break;
        case "*":
          handleMultiNumbers();
          break;
        case "/":
          handleDividerNumbers();
          break;
        default:
          break;
      }
    }
  };

  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Row>
          <Button type="C" OnClick={handleClear} />
          <Button type="/" OnClick={handleDividerNumbers} />
        </Row>
        <Row>
          <Button type="7" OnClick={() => handleAddNumber("7")} />
          <Button type="8" OnClick={() => handleAddNumber("8")} />
          <Button type="9" OnClick={() => handleAddNumber("9")} />
          <Button type="*" OnClick={handleMultiNumbers} />
        </Row>
        <Row>
          <Button type="4" OnClick={() => handleAddNumber("4")} />
          <Button type="5" OnClick={() => handleAddNumber("5")} />
          <Button type="6" OnClick={() => handleAddNumber("6")} />
          <Button type="+" OnClick={handleSumNumbers} />
        </Row>
        <Row>
          <Button type="1" OnClick={() => handleAddNumber("1")} />
          <Button type="2" OnClick={() => handleAddNumber("2")} />
          <Button type="3" OnClick={() => handleAddNumber("3")} />
          <Button type="-" OnClick={handleMinusNumbers} />
        </Row>
        <Row>
          <Button type="+/-" OnClick={() => handleAddNumber("+/-")} />
          <Button type="0" OnClick={() => handleAddNumber("0")} />
          <Button type="," OnClick={() => handleAddNumber(".")} />
          <Button type="=" OnClick={handleEquals} />
        </Row>
      </Content>
    </Container>
  );
}

export default App;
