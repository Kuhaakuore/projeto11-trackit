import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import { FooterContainer } from "../Footer/styled";
import { useContext, useEffect } from "react";
import { UserContext } from "../../context/Context";
import { Link, useNavigate } from "react-router-dom";

export default function Footer() {
  const { user, completionRate } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate("/");
  }, []);

  return (
    <>
      <FooterContainer data-test="menu">
        <Link to={"/habitos"} data-test="habit-link">
          <span>Hábitos</span>
        </Link>
        <Link to={"/hoje"} data-test="today-link">
          <div>
            <CircularProgressbarWithChildren
              value={completionRate > 0 ? completionRate : 0}
              maxValue={100}
              background
              backgroundPadding={6}
              styles={buildStyles({
                backgroundColor: "#52B6FF",
                pathColor: "white",
                trailColor: "transparent",
                strokeLinecap: "round",
                pathTransitionDuration: 0.5,
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
