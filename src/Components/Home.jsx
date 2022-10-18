import * as React from "react";
import styled from "styled-components";
import { Heading } from "../styles";
import Footer from "./Footer";
import Typing from "react-typing-animation";

const HomePage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 98vh;
`;

const Title = styled(Heading)`
  font-size: 72px;
  text-align: center;
`;

const Subtitle = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@500&display=swap");
  font-family: "JetBrains Mono", monospace;
  text-align: center;
  font-size: 36px;
`;

const Home = () => {
  return (
    <React.Fragment>
      <HomePage>
        <Title>Sharemark</Title>
        <Typing speed={40}>
          <Subtitle>A collaborative markdown editor.</Subtitle>
        </Typing>
      </HomePage>
      <Footer />
    </React.Fragment>
  );
};

export default Home;
