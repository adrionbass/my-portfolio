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

  img {
    width: 230px;
    height: auto;
    ${'' /* SI BIEN ACÁ APLICO UNA MEDIDA ESTÁNDAR PARA IMÁGENES,
    LUEGO SE APLICAN MEDIDAS ESPECÍFICAS DEPENDIENDO EL TIPO DE
    COMPONENTE, POR EJEMPLO IMAGEN DE TECNOLOGÍAS O CONTACTO...; */}
  }

  .img-perf {
    border-radius: 50%;
  }

  @media (max-width: 760px) {
    flex-direction: column;
  }
`;
