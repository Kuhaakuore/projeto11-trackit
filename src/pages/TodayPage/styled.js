import styled from "styled-components";

const TodayContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 17px;
  background: #e5e5e5;
  padding-top: 98px;
  min-height: 100vh;
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 23px;
    line-height: 29px;
    color: #126ba5;
  }

  h2 {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: ${props => props.completionRate > 0 ? "#8FC549" : "#BABABA"};
  }
`;

const HabitsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 28px;
`

export { TodayContainer, HeaderContainer, HabitsContainer };
