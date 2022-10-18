import * as React from "react";
import styled from "styled-components";

const FooterStyle = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@500&display=swap");
  font-family: "JetBrains Mono", monospace;
  position: absolute;
  bottom: 0;
  right: 0;
  text-align: center;
  width: 100%;
  font-size: 20px;
  margin-bottom: 20px;
  &:hover {
    cursor: default;
  }
`;

const Footer = () => {
  return <FooterStyle>Built by fusionmaster7</FooterStyle>;
};

export default Footer;
