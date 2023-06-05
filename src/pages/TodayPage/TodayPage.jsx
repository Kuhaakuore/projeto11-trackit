import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";
import { UserContext } from "../../context/Context";
import { HabitsContainer, HeaderContainer, TodayContainer } from "./styled";
import dayjs from "dayjs";
import axios from "axios";
import Habit from "../../components/Habit/Habit";

export default function TodayPage() {
  const currentPage = useLocation().pathname;
  const {
    user,
    setCurrentPage,
    todayHabits,
    setTodayHabits,
    completionRate,
    setCompletionRate,
  } = useContext(UserContext);
  const now = dayjs().locale("pt-br").format("dddd, DD/MM");
  const { completedHabits, setCompletedHabits } = useContext(UserContext);

  useEffect(() => {
    setCurrentPage(currentPage);
    const URL =
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";
    const config = {
      headers: {
        Authorization: "Bearer " + user?.token,
      },
    };
    axios
      .get(URL, config)
      .then(({ data }) => {
        setTodayHabits(data);
        if (data?.length > 0) {
          const temp = data.filter((habit) => habit.done);
          setCompletedHabits(temp);
          setCompletionRate(
            Math.floor((temp.length * 100) / todayHabits.length)
          );
        }
      })
      .catch(({ response }) => console.log(response.data.message));
  }, [completedHabits]);

  if (todayHabits === undefined) {
    return <></>;
  }

  return (
    <>
      <TodayContainer>
        <HeaderContainer completionRate={completionRate}>
          <h1>{now.charAt(0).toLocaleUpperCase() + now.slice(1)}</h1>
          <h2>
            {completionRate > 0
              ? `${completionRate}% dos hábitos concluídos`
              : "Nenhum hábito concluído ainda"}
          </h2>
        </HeaderContainer>
        <HabitsContainer>
          {todayHabits?.map((habit) => (
            <Habit key={habit.id} habit={habit} />
          ))}
        </HabitsContainer>
      </TodayContainer>
    </>
  );
}
