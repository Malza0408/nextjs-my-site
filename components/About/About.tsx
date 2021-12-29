import React from "react";
import { faJs, faReact } from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";
import AboutIcon from "./AboutIcon";

const About__section = styled.section`
  width: 100%;
  max-width: 110rem;
  margin: auto;
  padding: 40px;
  text-align: center;
`;

const Icon__container = styled.div`
  display: flex;
  justify-content: space-around;
`;

const About = () => {
  return (
    <About__section>
      <h1>About Me</h1>
      <p>
        매일 매일이 쌓여 가치를 창출해 내는 개발자가 되길 바라는 예비
        개발자에요!
      </p>
      <p>매일 매일 기록하고, 그를 통해 성장합니다! </p>
      <p>새로운 스택을 쌓아 가는 것이 즐거워요!</p>
      <p>
        모르는 문제는 곧 제 경험이 될 것이라 생각해요! 즐겁게 해결하려고 합니다.
      </p>
      <Icon__container>
        <AboutIcon icon={faJs} title="HTML, CSS, JS" />
        <AboutIcon icon={faReact} title="React" />
      </Icon__container>
    </About__section>
  );
};

export default About;
