import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import { FooterContainer } from "../Footer/styled";
import { useContext } from "react";
import { UserContext } from "../../context/Context";
import { Link } from "react-router-dom";

export default function Footer() {
  const { completedHabits } = useContext(UserContext);

  return (
    <>
      <FooterContainer data-test="menu">
        <Link to={"/habitos"} data-test="habit-link">
          <span>Hábitos</span>
        </Link>
        <Link to={"/hoje"} data-test="today-link">
          <div>
            <CircularProgressbarWithChildren
              value={completedHabits.length + 50}
              background
              backgroundPadding={6}
              styles={buildStyles({
                backgroundColor: "#52B6FF",
                pathColor: "white",
                trailColor: "transparent",
                strokeLinecap: "round",
              })}
            >
              <p>Hoje</p>
            </CircularProgressbarWithChildren>
          </div>
        </Link>

        <Link to={"/historico"} data-test="history-link">
          <span>Histórico</span>
        </Link>
      </FooterContainer>
    </>
  );
}
