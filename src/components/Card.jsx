import styled from "styled-components";

export default (props) => {
  return (
    <Row>
      {props.children}
    </Row>
  );
};

const Row = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;

  .img-perf {
    width: 230px;
    height: auto;
    border-radius: 50%;
    background-color: azure;
  }

  @media (max-width: 760px) {
    flex-direction: column;
  }
`;
