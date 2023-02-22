import styled from "styled-components";
import Scaffold from "./Scaffold";

export default (props) => {
  const Items = props.items;

  const isProjectGallery = Items.every(function (item) {
    return item.hasOwnProperty("technologies");
  });

  const isTech = Items.every(function (item) {
    return !item.hasOwnProperty("url");
  });

  const isRepoUrl = Items.every(function (item) {
    return item.hasOwnProperty("repo");
  });

  return (
    <>
      {isProjectGallery ? (
        <ProjectGrid>
          {Items.map((item) => (
            <Item key={item.id}>
              <Scaffold
                subtitle={item.name}
                tech={item.technologies}
                repo={item.repo}
                url={item.url}
              >
                <img src={item.img_path} className="img-project" />
                {/* {item.repo ? <p>{item.repo}</p> : ""} */}
              </Scaffold>
            </Item>
          ))}
        </ProjectGrid>
      ) : (
        <Container>
          {Items.map((item) => (
            <Item key={item.id}>
              {isTech ? (
                <img src={item.img_path} className="tech" />
              ) : (
                <a href={item.url} target="_blank">
                  <img src={item.img_path} className="ctt" />
                </a>
              )}
            </Item>
          ))}
        </Container>
      )}
    </>
  );
};

const Container = styled.div`
  padding: 0 0 5px 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const ProjectGrid = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Item = styled.div`
  padding: 0 15px;
  text-align: center;
  .tech {
    height: 40px;
    width: auto;
  }

  .ctt {
    height: 30px;
    width: auto;
    transition: all 0.7s ease-in-out;
    &:hover {
      transform: scale(1.1);
    }
  }
  .img-project {
    ${"" /* z-index: 0; */}
    width: 275px;
  }

  .img-project:hover {
    opacity: 0.8;
  }

  img {
    cursor: pointer;
  }

  @media (max-width: 760px) {
    padding: 0 10px;
    .img-project {
      width: 90%;
    }
  }
  @media (max-width: 320px) {
    padding: 0 10px;
    .tech {
      height: 30px;
      width: auto;
    }
    .ctt {
      height: 25px;
      width: auto;
    }
  }
`;
