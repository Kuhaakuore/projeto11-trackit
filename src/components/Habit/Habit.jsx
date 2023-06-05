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
} from "./styled";
import { useContext, useState } from "react";
import { UserContext } from "../../context/Context";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";
import dump from "../../assets/img/dump.svg";
import check from "../../assets/img/check.svg";

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
  const { user, setHabits, completedHabits, setCompletedHabits } = useContext(UserContext);

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
          Authorization: "Bearer " + user?.token,
        },
      };
      axios
        .delete(URL, config)
        .then(() => {
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
          alert(response.data.message);
          setIsLoading(false);
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
    if (status) {
      const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`;
      const config = {
        headers: {
          Authorization: "Bearer " + user?.token,
        },
      };
      const body = {};
      axios.post(URL, body, config)
        .then(setCompletedHabits(completedHabits.filter(habitId => habitId !== id)))
        .catch(({ response }) => {
          alert(response.data.details);
        });
    }
    else {
      const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`;
      const config = {
        headers: {
          Authorization: "Bearer " + user?.token,
        },
      };
      const body = {};
      axios.post(URL, body, config)
        .then(setCompletedHabits([...completedHabits, id]))
        .catch(({ response }) => {
          alert(response.data.details);
        });
    }
  }

  if (currentPage === "/hoje") {
    const { id, name, done, currentSequence, highestSequence } = habit;
    return (
      <>
        <HabitContainer>
          <HabitInfoContainer>
            <h1>{name}</h1>
            <p>
              Sequência atual:{" "}
              <CurrentSequenceSpan done={done}>
                {currentSequence} dias
              </CurrentSequenceSpan>
            </p>{" "}
            <p>
              Seu recorde:{" "}
              <HightestSequenceSpan
                currentSequence={currentSequence}
                highestSequence={highestSequence}
              >
                {highestSequence} dias
              </HightestSequenceSpan>
            </p>{" "}
          </HabitInfoContainer>
          <CheckHabitButton done={done} onClick={() => toggleHabit(done, id)}>
            <img src={check} alt="" />
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
                    disabled={isLoading}
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
            <button
              type="submit"
              disabled={isLoading}
              data-test="habit-create-save-btn"
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
            </button>
          </ButtonsWrapper>
        </HabitCreateContainer>
      </>
    );
  }
}
