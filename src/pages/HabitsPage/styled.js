import styled from "styled-components";

const HabitsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 17px;
  background: #e5e5e5;
  padding-top: 98px;
  gap: 10px;
  padding-bottom: 115px;
  min-height: 100vh;

  p {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #666666;
    margin-top: 19px;
  }
`;

const CreateHabitButton = styled.button`
  width: 40px;
  height: 35px;
  background: #52b6ff;
  border-radius: 4px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const HabitsContainerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;

  h1 {
    width: 148px;
    height: 29px;
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 23px;
    line-height: 29px;
    color: #126ba5;
  }
`;

export { HabitsContainer, CreateHabitButton, HabitsContainerHeader };
