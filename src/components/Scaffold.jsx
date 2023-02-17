import styled from "styled-components";
import Grid from "./Grid";
import gitHub from "../assets/github-logo2.png";
import webDeploy from "../assets/deploy.png";

export default function Scaffold(props) {
  let repo = [
    {
      name: "Github",
      img_path: gitHub,
      url: props.repo,
      id: "01",
    },
    {
      name: "Deploy",
      img_path: webDeploy,
      url: props.url,
      id: "02",
    },
  ];
  return (
    <Section id={props.id}>
      {props.title ? <h2>{props.title}</h2> : ""}
      {props.subtitle ? <h3>{props.subtitle}</h3> : ""}
      {props.info ? <p>{props.info}</p> : ""}
      <Children>{props.children}</Children>
      {props.tech ? <Grid items={props.tech} /> : ""}
      {props.repo ? <Grid items={repo} /> : ""}
    </Section>
  );
}
const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: left;
  margin: 0 0 20px 0;

  img {
    border-radius: 5px;
  }

  h2 {
    padding: 0;
    text-align: center;
    letter-spacing: 0.5rem;
  }

  h3 {
    padding: 0 0 5px 0;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 250px;
  }
  p {
    padding: 0 10px 5px 10px ;
  }
  @media (max-width: 760px) {
    p {
      padding: 0;
      font-size: 1rem;
      text-align: center;
    }
  }
  @media (max-width: 320px) {
    h2 {
      text-align: center;
      letter-spacing: 0.2rem;
    }
  }
`;

const Children = styled.div`
  padding: 0 0 5px 0;
`;
