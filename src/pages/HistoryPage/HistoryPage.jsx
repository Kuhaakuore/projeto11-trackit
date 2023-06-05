import { CalendarContainer, HistoryContainer } from "./styled";
import Calendar from "react-calendar";
import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../context/Context";
import "react-calendar/dist/Calendar.css";
import { useEffect } from "react";
import axios from "axios";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import Habit from "../../components/Habit/Habit";
import { DayHabitsContainer } from "./styled";

export default function HistoryPage() {
  const { user } = useContext(UserContext);
  const [dayHabits, setDayHabits] = useState([]);
  const [value, setValue] = useState(new Date());
  const [days, setDays] = useState(undefined);
  const today = dayjs().format("YYYY-MM-DD");
  const [clickedDay, setClickedDay] = useState(undefined);

  useEffect(() => {
    const URL =
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/history/daily";
    const config = {
      headers: {
        Authorization: "Bearer " + user.token,
      },
    };
    axios
      .get(URL, config)
      .then(({ data }) => setDays(data))
      .catch(({ response }) => console.log(response.data.message));
  }, [setDayHabits]);

  function getClass(date) {
    for (const day of days) {
      const fomrmatedDate = dayjs(date).format("YYYY-MM-DD");
      const formatedDay = dayjs(day.day).format("YYYY-DD-MM");
      if (
        (dayjs(fomrmatedDate).isBefore(today) || fomrmatedDate === today) &&
        (dayjs(fomrmatedDate).isAfter(formatedDay) ||
          fomrmatedDate === formatedDay)
      ) {
        for (const habit of day.habits) {
          if (habit.weekDay.toString() === dayjs(date).format("d")) {
            if (!habit.done) return "red";
          }
        }
        return "green";
      }
    }
  }

  function checkDate(date) {
    const fomrmatedDate = dayjs(date).format("YYYY-MM-DD");
    if (dayjs(fomrmatedDate).isAfter(today)) return true;
    else return false;
  }

  function displayDayHabits(date) {
    dayHabits.length = 0;
    setClickedDay(dayjs(date).locale("pt-br").format("DD/MM, dddd"));
    for (const day of days) {
      for (const habit of day.habits) {
        if (habit.weekDay.toString() === dayjs(date).format("d")) {
          dayHabits.push(habit);
        }
      }
    }
  }

  if (days === undefined) return;

  return (
    <>
      <HistoryContainer>
        <h1>Histórico</h1>
        <CalendarContainer data-test="calendar">
          <Calendar
            onChange={setValue}
            value={value}
            locale="pt-br"
            calendarType="US"
            tileClassName={({ date }) => getClass(date)}
            tileDisabled={({ date }) => checkDate(date)}
            onClickDay={(day) => displayDayHabits(day)}
          />
        </CalendarContainer>
        <DayHabitsContainer>
          <h1>
            {clickedDay !== undefined && dayHabits.length > 0
              ? `Lista de hábitos do dia ${clickedDay}`
              : ``}
          </h1>
          {dayHabits.map((habit) => (
            <Habit habit={habit} />
          ))}
        </DayHabitsContainer>
      </HistoryContainer>
    </>
  );
}
