import styled from "styled-components";

const HabitCreateContainer = styled.form`
  min-height: 180px;
  background: #ffffff;
  border-radius: 5px;
  padding: 19px;

  input {
    width: 100%;
  }
`;

const DaysWrapper = styled.div`
  display: flex;
  margin-top: 8px;
  gap: 4px;
  flex-wrap: wrap;
`;

const DayButton = styled.button`
  width: 30px;
  height: 30px;
  border: 1px solid #d4d4d4;
  background-color: ${(props) => props.fill};
  border-radius: 5px;
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 25px;
  color: ${(props) => props.color};
  &:hover {
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 29px;
  justify-content: flex-end;
  gap: 23px;

  span {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    color: #52b6ff;
    &:hover {
      cursor: pointer;
      color: red;
    }
  }

  button {
    width: 84px;
    height: 35px;
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    color: #ffffff;
  }
`;

const HabitDisplayContainer = styled.div`
  min-height: 91px;
  background: #ffffff;
  border-radius: 5px;
  padding: 15px;
  position: relative;

  img {
    position: absolute;
    top: 11px;
    right: 10px;
    cursor: pointer;
  }

  h1 {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    color: #666666;
  }

  button {
    cursor: default;
  }
`;

export {
  HabitCreateContainer,
  DaysWrapper,
  ButtonsWrapper,
  DayButton,
  HabitDisplayContainer,
};
