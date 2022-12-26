import styled from "@emotion/styled";
import "./App.css";

function App() {
  return <Root>안녕하세요</Root>;
}

export default App;

const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  z-index: 2147483647;
`;
