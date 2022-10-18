import React from "react";
import styled from "styled-components";
import { Heading } from "../styles";
import { Link } from "react-router-dom";

const Nav = styled.div`
  display: flex;
  padding: 15px;
  background-color: black;
`;

const NavHeading = styled(Heading)`
  font-size: 28px;
  color: white;
`;

const Navbar = () => {
  return (
    <Nav>
      <Link to="/" style={{ textDecoration: "none" }}>
        <NavHeading>Sharemark</NavHeading>
      </Link>
    </Nav>
  );
};

export default Navbar;
