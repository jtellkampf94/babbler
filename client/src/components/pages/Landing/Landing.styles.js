import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
`;

export const Heading = styled.header`
  width: 50%;
  height: 100%;
  padding: 2% 5%;

  & h2 {
    font-size: 60px;
    font-weight: 700;
    margin-top: 40px;
    font-family: "ChirpExtendedHeavy";
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
`;

export const ActionsContainer = styled.div`
  width: 50%;
  height: 100%;
  background: #eff3f4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2% 5%;

  @media only screen and (max-width: 875px) {
    background: #fff;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 150px;
  width: 100%;
`;

export const Button = styled.button`
  outline: none;
  background-color: #fff;
  border: 1px solid #dadce0;
  border-radius: 20px;
  height: 40px;
  cursor: pointer;
  font-weight: 700;
  width: 100%;

  &:hover {
    background-color: #e6e6e6;
  }
`;

export const JoinHeader = styled.h2`
  font-family: "ChirpExtendedHeavy";
  margin-bottom: 40px;
`;

export const HappenningHeader = styled.h1`
  font-family: "ChirpExtendedHeavy";
  margin: 40px 0;
`;
