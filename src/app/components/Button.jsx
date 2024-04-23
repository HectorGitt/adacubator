import React from "react";
import styled from "styled-components";

const Button = ({ className, text, dataAos, to }) => {
  return (
    <ButtonCont className={className} data-aos={dataAos} href={to}>
      {text}
    </ButtonCont>
  );
};

export default Button;

const ButtonCont = styled.a`
  padding: 14px 28px;
  font-size: 1.2rem;
  background: linear-gradient(107.64deg, #0098da -4.02%, #91d8f7 82.79%);
  border: none;
  border-radius: 21px;
  color: white;
  cursor: pointer;
  width: fit-content;
`;
