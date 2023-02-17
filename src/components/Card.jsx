import styled from "styled-components";
import Scaffold from "./Scaffold";

export default function Card(props) {
  return (
    <Row>
    <img src={props.imgUrl} alt={props.name} className="img-perf" />
      {/* <div className="col">
        <img src={props.imgUrl} alt={props.name} className="img-perf" />
      </div> */}
      <Scaffold title="ADRIEL MIÑO" subtitle="Front-end dev" info={props.desc}>
        {props.children}
      </Scaffold>
    </Row>
  );
}

const Row = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;

  .col {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 20px;
  }

  .img-perf {
    width: 230px;
    height: auto;
    border-radius: 50%;
    background-color: azure;
  }

  @media (max-width: 760px) {
    flex-direction: column;
    .col {
      padding: 10px 0;
    }
  }
`;
