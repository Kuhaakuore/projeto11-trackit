import { useLocation } from "react-router";
import {
  ButtonsWrapper,
  HabitCreateContainer,
  DaysWrapper,
  DayButton,
  HabitDisplayContainer,
} from "./styled";
import { useContext, useState } from "react";
import { UserContext } from "../../context/Context";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";
import dump from "../../assets/img/dump.svg";

export default function Habit({
  id,
  habitName,
  setHabitName,
  selectedDays,
  setSelectedDays,
  setHabitVisibility,
}) {
  const [isLoading, setIsLoading] = useState(false);
  const currentPage = useLocation().pathname;
  const days = ["D", "S", "T", "Q", "Q", "S", "S"];
  const { user } = useContext(UserContext);

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
      .then(() => {
        setHabitName("");
        setSelectedDays([]);
        setIsLoading(false);
        setHabitVisibility(false);
      })
      .catch(({ response }) => {
        alert(response.data.message);
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
        .then()
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

  if (currentPage === "/habitos") {
    if (id !== undefined) {
      return (
        <>
          <HabitDisplayContainer>
            <h1>{habitName}</h1>
            <img src={dump} alt="" onClick={deleteHabit} />
            <DaysWrapper>
              {days.map((day, index) => {
                return (
                  <DayButton
                    key={index}
                    disabled={isLoading}
                    type="button"
                    fill={checkDay(index + 1).fill}
                    color={checkDay(index + 1).color}
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
        <HabitCreateContainer onSubmit={createHabit}>
          <input
            type="text"
            placeholder="nome do hábito"
            required
            id="habitName"
            value={habitName}
            disabled={isLoading}
            onChange={(e) => setHabitName(e.target.value)}
          />
          <DaysWrapper>
            {days.map((day, index) => {
              return (
                <DayButton
                  key={index}
                  disabled={isLoading}
                  type="button"
                  fill={checkDay(index + 1).fill}
                  color={checkDay(index + 1).color}
                  onClick={() => addDay(index + 1)}
                >
                  {day}
                </DayButton>
              );
            })}
          </DaysWrapper>
          <ButtonsWrapper>
            <span onClick={() => setHabitVisibility(false)}>Cancelar</span>
            <button type="submit" disabled={isLoading}>
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
