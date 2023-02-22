import styled from "styled-components";

export default (props) => { 
    return(
        <Container>
            {props.children}
        </Container>
    )
 }

 const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    margin: 0;
    padding: 0;
    text-align: center;
  }
`;