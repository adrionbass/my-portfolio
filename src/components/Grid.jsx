import styled from "styled-components";
import Scaffold from "./Scaffold";
import Modal from "./Modal";
import { useState } from "react";

export default (props) => {
  const Items = props.items;

  const isProjectGallery = Items.every(function (item) {
    return item.hasOwnProperty("technologies");
  });

  const isTech = Items.every(function (item) {
    return !item.hasOwnProperty("url");
  });
  const [modalState, setModalState] = useState(false);
  const[projectName, setProjectName] = useState(null);
  const [projectDesc, setProjectDesc] = useState(null);

  



  const handleClick = (item) => {
    setProjectName(item.name);
    setProjectDesc(item.description);
    setModalState(!modalState);
  };

  return (
    <>
      {isProjectGallery ? (
        <ProjectGrid>
          <Modal state={modalState} setState={setModalState}>
            <h3>{projectName}</h3>
            <p>{projectDesc}</p>
          </Modal>
          {Items.map((item) => (
            <Item key={item.id}>
              <Scaffold
                subtitle={item.name}
                tech={item.technologies}
                repo={item.repo}
                url={item.url}
              >
                
                <img
                  src={item.img_path}
                  className="img-project"
                  onClick={() => handleClick(item)}
                />
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
    cursor:pointer;
    width: 275px;
  }

  .img-project:hover {
    opacity: 0.8;
  }

  img {
    ${"" /* cursor: pointer; */}
  }

  @media (max-width: 760px) {
    padding: 0;
    .img-project {
      width: 90%;
    }
    .tech {
      height: 30px;
      width: auto;
      padding: 0 10px;
    }
    .ctt {
      height: 30px;
      width: auto;
      padding: 0 7px;
    }
  }
  @media (max-width: 320px) {
    ${"" /* padding: 0 10px; */}
    .tech {
      height: 30px;
      width: auto;
      padding: 0 10px;
    }
    .ctt {
      height: 25px;
      width: auto;
    }
  }
`;
