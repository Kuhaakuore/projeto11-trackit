import { useLocation } from "react-router";
import { useContext, useEffect, useState } from "react";
import {
  CreateHabitButton,
  HabitsContainer,
  HabitsContainerHeader,
} from "./styled";
import Habit from "../../components/Habit/Habit";
import { UserContext } from "../../context/Context";
import axios from "axios";
import plus from "../../assets/img/plus.svg";
import LoaodingScreen from "../../components/LoadingScreen/LoadingScreen";

export default function HabitsPage() {
  const currentPage = useLocation().pathname;
  const { habits, setHabits, setCurrentPage } = useContext(UserContext);
  const { user } = useContext(UserContext);
  const [habitVisibility, setHabitVisibility] = useState(false);
  const [selectedDays, setSelectedDays] = useState([]);
  const [habitName, setHabitName] = useState("");

  useEffect(() => {
    setCurrentPage(currentPage);
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
      .catch(({ response }) => alert(response.data.message));
  }, []);

  function showForm() {
    setHabitVisibility(true);
  }

  if (habits === undefined) return (
    <>
      <LoaodingScreen />
    </>
  )

  return (
    <>
      <HabitsContainer>
        <HabitsContainerHeader>
          <h1>Meus hábitos</h1>
          <CreateHabitButton onClick={showForm} 
          data-test="habit-create-btn">
            <img src={plus} alt="Plus sign" />
          </CreateHabitButton>
        </HabitsContainerHeader>
        {habitVisibility && (
          <Habit
            id={undefined}
            habitName={habitName}
            setHabitName={setHabitName}
            selectedDays={selectedDays}
            setSelectedDays={setSelectedDays}
            setHabitVisibility={setHabitVisibility}
          />
        )}
        {habits?.length === 0 ? (
          <p>
            Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
            começar a trackear!
          </p>
        ) : (
          habits?.map((habit) => (
            <Habit
              key={habit.id}
              id={habit.id}
              habitName={habit.name}
              selectedDays={habit.days}
            />
          ))
        )}
      </HabitsContainer>
    </>
  );
}
