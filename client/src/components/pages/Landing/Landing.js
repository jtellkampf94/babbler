import React from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import {
  Header,
  ActionsContainer,
  Heading,
  JoinHeader,
  HappenningHeader,
  Button,
  ButtonContainer,
  Container,
} from "./Landing.styles";
import theme from "../../../config/theme";
import BabblerIcon from "../../icons/BabblerIcon/BabblerIcon";

const Landing = () => {
  const isSmallScreen = useMediaQuery({ query: `(max-width: 875px)` });

  const renderHeader = () => (
    <Header>
      <BabblerIcon width={50} height={50} color={theme.babbler} />
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
        {isSmallScreen && renderHeader()}
        {isSmallScreen && <HappenningHeader>Happenning now</HappenningHeader>}
        <JoinHeader>Join Babbler Today</JoinHeader>
        <ButtonContainer>
          <Link to="/sign-up" style={{ width: "100%" }}>
            <Button>Sign Up</Button>
          </Link>
          <p>or</p>

          <Link to="/login" style={{ width: "100%" }}>
            <Button>Login</Button>
          </Link>
        </ButtonContainer>
      </ActionsContainer>
    </Container>
  );
};

export default Landing;
