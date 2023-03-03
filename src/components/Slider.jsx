import { useState } from "react";
import styled from "styled-components";
import Card from "./Card";
import Scaffold from "./Scaffold";

export default (props) => {
  const [index, setIndex] = useState(0);
  const Items = props.items;
  const handleClickNext = () => {
    index === Items.length - 1 ? setIndex(0) : setIndex(index + 1);
  };
  return (
    <Card>
      <Img
        src={Items[index].img_path}
        alt={Items[index].name}
        className=""
        onClick={handleClickNext}
      />

      <Scaffold>
        <p>{Items[index].desc}</p>
      </Scaffold>
    </Card>
  );
};

const Img = styled.img`
  transition: all 0.7s ease-in-out;
  &:hover {
    opacity: 0.8;
    transform: scale(1.01);
  }
`;
