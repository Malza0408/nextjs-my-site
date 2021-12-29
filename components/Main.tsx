import Image from "next/image";
import React from "react";
import styled, { css } from "styled-components";

const Main__section = styled.section`
  background-image: url("/home-background.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  max-width: 110rem;
  margin: auto;
  padding: 40px;
  text-align: center;
`;

const ImageWrapper = styled.div`
  width: 300px;
  height: 300px;
  margin: auto;
  &:hover {
    transform: scale(1.05);
  }
  ${({ theme }) => {
    return css`
      transition: all ${theme.transition.delay};
    `;
  }}
`;

const StyledImage = styled(Image)`
  border-radius: 50%;
`;

const ContactBtn = styled.button`
  ${({ theme }) => {
    return css`
      border: 0.2rem solid ${theme.colors.darkGrey};
      color: ${theme.colors.darkGrey};
      transition: all ${theme.transition.delay};
    `;
  }}

  &:hover {
    ${({ theme }) => {
      return css`
        background-color: ${theme.colors.darkGrey};
        color: ${theme.colors.white};
      `;
    }}
  }
`;

interface Props {
  onClickContactBtn: () => void;
}

const Main: React.FC<Props> = ({ onClickContactBtn }) => {
  return (
    <Main__section>
      <ImageWrapper>
        <StyledImage src="/logo.png" width={"300px"} height={"300px"} />
      </ImageWrapper>
      <h1>
        Hello!
        <br /> 제 홈페이지에 방문하신 여러분을 환영합니다!
        <br />
      </h1>
      <h2>프론트엔드 개발자 타이틀을 얻기 위해 오늘도 전진중!</h2>
      <ContactBtn onClick={onClickContactBtn}>Contact Me</ContactBtn>
    </Main__section>
  );
};

export default Main;
