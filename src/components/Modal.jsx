import styled from "styled-components";

export default ({ children, state, setState }) => {
  return (
    <>
      {state && (
        <Overlay>
          <ModalContainer>
            <ModalHeader>
              {/* <h3>Titulo</h3> */}
            </ModalHeader>
            <CloseBtn onClick={()=>setState(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-x"
                viewBox="0 0 16 16"
              >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </CloseBtn>
            <Content>{children}</Content>
          </ModalContainer>
        </Overlay>
      )}
    </>
  );
};

const ModalContainer = styled.div`
  width: 500px;
  min-height: 100px;
  
  background: #010108;
  position: relative;
  border-radius: 5px;
  box-shadow: rgba(100, 100, 111, 0.1) 0px 7px 29px 0px;
  padding: 20px;
`;

const Overlay = styled.div`
z-index: 1;
  width: 100vw;
  height: 100%;
  position: fixed;
  top: 0;
  letf: 0;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(1px);
  
  padding: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: left 0.3s;
`;

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-cotent: space-between;
  ${'' /* margin-bottom: 20px; */}
  height: 20px;
  ${'' /* border-bottom: 1px solid #e8e8e8;
  h3 {
    font-weight: 500;
    font-size: 16px;
    color: #1766dc;
  } */}
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  width: 30px;
  height: 30px;
  border: none;
  background: none;
  curson: pointer;
  transition: 0.3s ease all;
  border-radius: 50%;
  color: #f2f2f2;
  &:hover {
    color: #010108;
    background: #f2f2f2;
  }
  svg {
    width: 100%;
    height: 100%;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: whitesmoke;
  h1 {
    font-size: 42px;
    font-weight: 700;
    margin-bottom: 10px;
  }
  p {
    font-size: 18px;
    margin-bottom: 20px;
  }

  img: {
    width: 100%;
    vertical-align: top;
    border-radius: 3px;
  }
`;
