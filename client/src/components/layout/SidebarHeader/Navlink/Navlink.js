import React from "react";
import { Link } from "react-router-dom";

import {
  StyledLink,
  Container,
  IconContainer,
  TextContainer,
} from "./Navlink.styles";

const NavLink = ({ path, text, children, onClick }) => (
  <StyledLink to={path} onClick={onClick}>
    <Container>
      <IconContainer>{children}</IconContainer>
      <TextContainer>
        <span className="text">{text}</span>
      </TextContainer>
    </Container>
  </StyledLink>
);

export default NavLink;
