import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";
import { UserContext } from "../../context/Context";
import { HabitsContainer, HeaderContainer, TodayContainer } from "./styled";
import dayjs from "dayjs";
import axios from "axios";
import Habit from "../../components/Habit/Habit";
import "dayjs/locale/pt-br";
import LoaodingScreen from "../../components/LoadingScreen/LoadingScreen";

export default function TodayPage() {
  const currentPage = useLocation().pathname;
  const {
    user,
    setCurrentPage,
    todayHabits,
    setTodayHabits,
    completionRate,
    setCompletionRate,
    flag
  } = useContext(UserContext);
  const now = dayjs()
  .locale("pt-br")
  .format("dddd, DD/MM");
  
  const { setCompletedHabits } = useContext(UserContext);

  useEffect(() => {
    setCurrentPage(currentPage);
    const URL =
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";
    const config = {
      headers: {
        Authorization: "Bearer " + user.token,
      },
    };
    axios
      .get(URL, config)
      .then(({ data }) => {
        setTodayHabits(data);
        if (data.length > 0) {
          const temp = data.filter((habit) => habit.done);
          setCompletedHabits(temp);
          setCompletionRate(
            Math.floor((temp.length * 100) / data.length)
          );
        }
        else setCompletionRate(0);
      })
      .catch(({ response }) => console.log(response.data.message));
  }, [flag]);

  if (todayHabits === undefined) return (
    <>
      <LoaodingScreen />
    </>
  )

  return (
    <>
      <TodayContainer>
        <HeaderContainer completionRate={completionRate}>
          <h1 data-test="today">{now.charAt(0).toLocaleUpperCase() + now.slice(1)}</h1>
          <h2 data-test="today-counter">
            {completionRate > 0
              ? `${completionRate}% dos hábitos concluídos`
              : "Nenhum hábito concluído ainda"}
          </h2>
        </HeaderContainer>
        <HabitsContainer>
          {todayHabits.map((habit) => (
            <Habit key={habit.id} habit={habit} />
          ))}
        </HabitsContainer>
      </TodayContainer>
    </>
  );
}
