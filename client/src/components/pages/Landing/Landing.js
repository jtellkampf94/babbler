import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import theme from "../../../config/theme";
import BabblerIcon from "../../icons/BabblerIcon/BabblerIcon";

const Container = styled.div`
  display: flex;
  height: 100vh;
`;

const Heading = styled.header`
  width: 50%;
  height: 100%;
  padding: 2% 5%;

  & h2 {
    font-size: 60px;
    font-weight: 700;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;

  & h1 {
    margin-left: 10px;
  }
`;

const ActionsContainer = styled.div`
  width: 50%;
  height: 100%;
  background-color: ${theme.babbler};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 90px;
  width: 100%;
`;

const Button = styled.button`
  width: 400px;
  outline: none;
  background-color: transparent;
  border: 2px solid white;
  text-transform: uppercase;
  border-radius: 20px;
  height: 35px;
  color: white;
  cursor: pointer;
  font-weight: 700;

  &:hover {
    background-color: white;
    color: ${theme.babbler};
  }
`;

const Landing = () => {
  const isSmallScreen = useMediaQuery({ query: `(max-width: 875px)` });

  const renderHeader = () => (
    <Header>
      <BabblerIcon width={50} height={50} color={theme.babbler} />
      <h1>Babbler</h1>
    </Header>
  );

  return (
    <Container>
      {!isSmallScreen && (
        <Heading>
          {renderHeader()}
          <h2>
            See what's <br />
            happening
          </h2>
        </Heading>
      )}
      <ActionsContainer>
        <ButtonContainer>
          <Link to="/login">
            <Button>Login</Button>
          </Link>
          <Link to="/sign-up">
            <Button>Sign Up</Button>
          </Link>
        </ButtonContainer>
      </ActionsContainer>
    </Container>
  );
};

export default Landing;
