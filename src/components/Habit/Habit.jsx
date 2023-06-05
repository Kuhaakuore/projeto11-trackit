import { useLocation } from "react-router";
import {
  ButtonsWrapper,
  HabitCreateContainer,
  DaysWrapper,
  DayButton,
  HabitDisplayContainer,
  CancelButton,
  HabitContainer,
  HabitInfoContainer,
  CheckHabitButton,
  CurrentSequenceSpan,
  HightestSequenceSpan,
  SaveButton,
  HabbitStatusContainer,
} from "./styled";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/Context";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";
import dump from "../../assets/img/dump.svg";
import check from "../../assets/img/check.svg";
import cross from "../../assets/img/Cross_icon_(white).svg.png";

export default function Habit({
  id,
  habitName,
  setHabitName,
  selectedDays,
  setSelectedDays,
  setHabitVisibility,
  habit,
}) {
  const [isLoading, setIsLoading] = useState(false);
  const currentPage = useLocation().pathname;
  const days = ["D", "S", "T", "Q", "Q", "S", "S"];
  const {
    user,
    setHabits,
    completedHabits,
    setCompletedHabits,
    flag,
    setFlag,
  } = useContext(UserContext);

  function createHabit(e) {
    e.preventDefault();
    setIsLoading(true);
    const URL =
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
    const config = {
      headers: {
        Authorization: "Bearer " + user?.token,
      },
    };
    const body = {
      name: habitName,
      days: selectedDays,
    };
    axios
      .post(URL, body, config)
      .then((data) => {
        setHabitName("");
        setSelectedDays([]);
        setIsLoading(false);
        setHabitVisibility(false);
        const URL =
          "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
        const config = {
          headers: {
            Authorization: "Bearer " + user?.token,
          },
        };
        axios
          .get(URL, config)
          .then(({ data }) => setHabits(data))
          .catch(({ response }) => console.log(response.data.message));
      })
      .catch(({ response }) => {
        alert(response.data.details);
        setIsLoading(false);
      });
  }

  function deleteHabit() {
    if (confirm("Tem certeza de que deseja excluir este hábito?")) {
      const URL =
        "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/" +
        id.toString();
      const config = {
        headers: {
          Authorization: "Bearer " + user.token,
        },
      };
      axios
        .delete(URL, config)
        .then(() => {
          const URL =
            "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
          const config = {
            headers: {
              Authorization: "Bearer " + user.token,
            },
          };
          axios
            .get(URL, config)
            .then(({ data }) => setHabits(data))
            .catch(({ response }) => console.log(response.data.message));
        })
        .catch(({ response }) => {
          alert(response.data.message);
        });
    }
  }

  function checkDay(index) {
    if (selectedDays.includes(index)) {
      return {
        fill: "#CFCFCF",
        color: "white",
      };
    } else {
      return {
        fill: "#FFFFFF",
        color: "#DBDBDB",
      };
    }
  }

  function addDay(index) {
    if (!selectedDays.includes(index))
      setSelectedDays([...selectedDays, index]);
    else {
      setSelectedDays(selectedDays.filter((day) => day !== index));
    }
  }

  function toggleHabit(status, id) {
    setIsLoading(true);
    if (status) {
      const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`;
      const config = {
        headers: {
          Authorization: "Bearer " + user.token,
        },
      };
      const body = {};
      axios
        .post(URL, body, config)
        .then(() => {
          const temp = completedHabits.filter((habitId) => habitId !== id);
          setCompletedHabits(temp);
          setFlag(() => (flag ? false : true));
          setIsLoading(false);
        })
        .catch(({ response }) => {
          alert(response.data.details);
        });
    } else {
      const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`;
      const config = {
        headers: {
          Authorization: "Bearer " + user.token,
        },
      };
      const body = {};
      axios
        .post(URL, body, config)
        .then(() => {
          setCompletedHabits([...completedHabits, id]);
          setFlag(() => (flag ? false : true));
          setIsLoading(false);
        })
        .catch(({ response }) => {
          alert(response.data.details);
        });
    }
  }

  if (currentPage === "/historico") {
    const { name, done } = habit;
    return (
      <>
        <HabitContainer>
          <HabitInfoContainer>
            <h1>{name}</h1>
          </HabitInfoContainer>
          <HabbitStatusContainer done={done}>
            <img src={done ? check : cross} alt="" />
          </HabbitStatusContainer>
        </HabitContainer>
      </>
    );
  }

  if (currentPage === "/hoje") {
    const { id, name, done, currentSequence, highestSequence } = habit;
    return (
      <>
        <HabitContainer data-test="today-habit-container">
          <HabitInfoContainer>
            <h1 data-test="today-habit-name">{name}</h1>
            <p>
              Sequência atual:{" "}
              <CurrentSequenceSpan done={done} data-test="today-habit-sequence">
                {currentSequence} dias
              </CurrentSequenceSpan>
            </p>{" "}
            <p>
              Seu recorde:{" "}
              <HightestSequenceSpan
                currentSequence={currentSequence}
                highestSequence={highestSequence}
                data-test="today-habit-record"
              >
                {highestSequence} dias
              </HightestSequenceSpan>
            </p>{" "}
          </HabitInfoContainer>
          <CheckHabitButton
            done={done}
            disabled={isLoading}
            onClick={() => toggleHabit(done, id)}
            data-test="today-habit-check-btn"
          >
            {isLoading ? (
              <ThreeDots
                height="55"
                width="55"
                radius="9"
                color="white"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
              />
            ) : (
              <img src={check} alt="" />
            )}
          </CheckHabitButton>
        </HabitContainer>
      </>
    );
  }

  if (currentPage === "/habitos") {
    if (id !== undefined) {
      return (
        <>
          <HabitDisplayContainer data-test="habit-container">
            <h1 data-test="habit-name">{habitName}</h1>
            <img
              src={dump}
              alt=""
              onClick={deleteHabit}
              data-test="habit-delete-btn"
            />
            <DaysWrapper>
              {days.map((day, index) => {
                return (
                  <DayButton
                    key={index}
                    disabled={true}
                    type="button"
                    fill={checkDay(index).fill}
                    color={checkDay(index).color}
                    data-test="habit-day"
                  >
                    {day}
                  </DayButton>
                );
              })}
            </DaysWrapper>
          </HabitDisplayContainer>
        </>
      );
    }

    return (
      <>
        <HabitCreateContainer
          onSubmit={createHabit}
          data-test="habit-create-container"
        >
          <input
            type="text"
            placeholder="nome do hábito"
            id="habitName"
            value={habitName}
            disabled={isLoading}
            data-test="habit-name-input"
            onChange={(e) => setHabitName(e.target.value)}
          />
          <DaysWrapper>
            {days.map((day, index) => {
              return (
                <DayButton
                  key={index}
                  disabled={isLoading}
                  type="button"
                  fill={checkDay(index).fill}
                  color={checkDay(index).color}
                  data-test="habit-day"
                  onClick={() => addDay(index)}
                >
                  {day}
                </DayButton>
              );
            })}
          </DaysWrapper>
          <ButtonsWrapper>
            <CancelButton
              type="button"
              disabled={isLoading}
              onClick={() => setHabitVisibility(false)}
              data-test="habit-create-cancel-btn"
            >
              Cancelar
            </CancelButton>
            <SaveButton
              type="submit"
              disabled={isLoading}
              data-test="habit-create-save-btn"
              onClick={createHabit}
            >
              {isLoading ? (
                <ThreeDots
                  height="80"
                  width="80"
                  radius="9"
                  color="white"
                  ariaLabel="three-dots-loading"
                  wrapperStyle={{}}
                  wrapperClassName=""
                  visible={true}
                />
              ) : (
                "Salvar"
              )}
            </SaveButton>
          </ButtonsWrapper>
        </HabitCreateContainer>
      </>
    );
  }
}
