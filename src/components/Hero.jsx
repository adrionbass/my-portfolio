import styled from "styled-components";

export default (props) => {
  return <HeroStyle>{props.children}</HeroStyle>;
};
const HeroStyle = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
