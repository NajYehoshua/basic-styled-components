import styled from "styled-components";
import { useState } from "react";

//! Basic styled components
const Wrapper = styled.section`
  padding: 4rem;
  background: papayawhip;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  text-align: center;
  color: palevioletred;
  letter-spacing: 1.5px;
  text-transform: uppercase;
`;

//! Adapting style based on props
const Button = styled.button`
  background: ${({ primary }) => (primary ? "palevioletred" : "white")};
  color: ${({ primary }) => (primary ? "white" : "palevioletred")};

  cursor: pointer;
  font-size: 1rem;
  margin: 1rem;
  padding: 12px 18px;
  border: 2px solid palevioletred;
  border-radius: 3px;
  transition: transform 200ms ease-in-out;

  //! Nesting pseudoelements, and pseudoselectors
  &:hover {
    transform: scale(1.1);
  }
`;

//! Adapting style and extending styles
const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;

const SkyButton = styled(Button)`
  color: blue;
  border-color: blue;
  text-decoration: none;
`;

const DangerButton = styled(Button)`
  color: red;
  border-color: red;
`;

const App = () => {
  //! component state
  let [counter, setCounter] = useState(0);

  //! increment handler
  const onClickIncrement = (e) => {
    e.preventDefault();

    setCounter((counter += 1));
  };

  //! decrement handler
  const onClickDecrement = (e) => {
    e.preventDefault();

    setCounter((counter -= 1));
  };

  return (
    <>
      <Wrapper>
        <Title>Hello World</Title>
        <p>Counter: {counter < 0 ? "Negative" : counter}</p>
      </Wrapper>

      <Button onClick={onClickIncrement}>Increment</Button>
      <Button onClick={onClickDecrement} primary>
        Decrement
      </Button>

      <TomatoButton>Tomato</TomatoButton>
      <SkyButton as="a" href="https://www.google.com/" target="_blank">
        Sky
      </SkyButton>
      <DangerButton>Danger</DangerButton>
    </>
  );
};

export default App;
