import styled from "styled-components";

const HabitCreateContainer = styled.form`
  min-height: 180px;
  background: #ffffff;
  border-radius: 5px;
  padding: 19px;

  input {
    width: 100%;
    min-height: 45px;
    background: #ffffff;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    color: #666666;
    padding-left: 11px;
    &::placeholder {
      color: #dbdbdb;
    }
    &:disabled {
      background: #f2f2f2;
    }

  }
`;

const DaysWrapper = styled.div`
  display: flex;
  margin-top: 8px;
  gap: 4px;
  flex-wrap: wrap;

  button {
    cursor: pointer;
  }
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
`;

const SaveButton = styled.div`
  width: 84px;
  height: 35px;
  background-color: #52b6ff;
  border-radius: 4px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: #ffffff;
  &:disabled {
    opacity: 0.7;
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 29px;
  justify-content: flex-end;
  gap: 23px;

  button {
    width: 84px;
    height: 35px;
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
  }
`;

const CancelButton = styled.button`
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: #52b6ff;
  background-color: white;
  border: none;
  &:hover {
    cursor: pointer;
    color: red;
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
    max-width: calc(100% - 10px);
  }

  button {
    cursor: default;
  }
`;

const HabitContainer = styled.div`
  display: flex;
  min-height: 91px;
  background: #ffffff;
  border-radius: 5px;
  padding: 15px;
  justify-content: space-between;
  align-items: center;
`;

const HabitInfoContainer = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    color: #666666;
    margin-bottom: 7px;
  }

  p {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
    color: #666666;
  }
`;

const CurrentSequenceSpan = styled.span`
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  color: ${(props) => (props.done ? "#8FC549" : "#666666")};
`;

const HightestSequenceSpan = styled.span`
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  color: ${(props) =>
    props.currentSequence <= props.highestSequence && props.currentSequence > 0
      ? "#8FC549"
      : "#666666"};
`;

const CheckHabitButton = styled.button`
  min-width: 69px;
  height: 69px;
  background: ${(props) => (props.done ? "#8FC549" : "#ebebeb")};
  border: 1px solid #e7e7e7;
  border-radius: 5px;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
  }

  img {
    width: 35px;
    height: 28px;
  }
`;

const HabbitStatusContainer = styled.div`
  min-width: 69px;
  height: 69px;
  background: ${(props) => (props.done ? "#8FC549" : "red")};
  border: 1px solid #e7e7e7;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    color: #666666;
    max-width: 240px;
  }

  img {
    width: 35px;
    height: 28px;
  }
`;

export {
  HabitCreateContainer,
  DaysWrapper,
  ButtonsWrapper,
  DayButton,
  HabitDisplayContainer,
  CancelButton,
  SaveButton,
  HabitContainer,
  CheckHabitButton,
  HabitInfoContainer,
  CurrentSequenceSpan,
  HightestSequenceSpan,
  HabbitStatusContainer,
};
