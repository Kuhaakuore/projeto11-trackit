import styled from "styled-components";

const HistoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #e5e5e5;
  min-height: 100vh;
  padding: 98px 17px 0px 17px;
  gap: 11px;

  h1 {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 23px;
    line-height: 29px;
    color: #126ba5;
  }

  .react-calendar {
    width: 100%;
    border: none;
    border-radius: 10px;
    &__tile {
      height: 54px;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;

      &:last-child {
        border-bottom-right-radius: 10px;
      }
      &:nth-last-child(7) {
        border-bottom-left-radius: 10px;
      }
      &.green {
        abbr {
          background: #8fc549;
          color: #ffffff;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
        }
      }
      &--now {
        background: white;
        abbr {
          border-radius: 50%;
          width: 40px;
          height: 40px;
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          background: #ffff76;
        }
      }
      &.red {
        abbr {
          background: #eb3d3a;
          color: #fff;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
        }
      }
      &:hover {
        background-color: white;
      }
      &:disabled {
        &:hover {
          background-color: #f0f0f0;
          abbr {
            background-color: #f0f0f0;
          }
        }
      }
      &--active {
        background: #fff;
        abbr {
          background: #006edc;
          color: white;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
        }
        &:enabled {
          &:hover,
          &:focus {
            background: #fff;
            abbr {
              background: #1087ff;
              border-radius: 50%;
              width: 40px;
              height: 40px;
              display: flex;
              justify-content: center;
              align-items: center;
              text-align: center;
            }
          }
        }
      }
    }
  }
`;

const DayHabitsContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #e5e5e5;
  gap: 10px;
  padding-bottom: 115px;
  margin-top: 10px;

  h1 {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 23px;
    line-height: 29px;
    color: #126ba5;
  }
`;

const CalendarContainer = styled.div``;

export { HistoryContainer, CalendarContainer, DayHabitsContainer };
