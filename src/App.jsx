import { Route, Routes, useLocation } from "react-router";
import SignUpPage from "./pages/LoginPages/SignUpPage";
import axios from "axios";
import { useState } from "react";
import LoginPage from "./pages/LoginPages/LoginPage";
import TodayPage from "./pages/TodayPage/TodayPage";
import Header from "./components/Header/Header";
import { UserContext } from "./context/Context";
import Footer from "./components/Footer/Footer";
import HabitsPage from "./pages/HabitsPage/HabitsPage";
import HistoryPage from "./pages/HistoryPage/HistoryPage";

function App() {
  axios.defaults.headers.common["Authorization"] = "rxa6U7iiGtZlTg8Zu5jI5qK4";

  const [user, setUser] = useState(undefined);
  const [currentPage, setCurrentPage] = useState(useLocation().pathname);
  const [habits, setHabits] = useState(undefined);
  const [todayHabits, setTodayHabits] = useState(undefined);
  const [completedHabits, setCompletedHabits] = useState([]);
  const [completionRate, setCompletionRate] = useState(0);

  return (
    <>
      <UserContext.Provider
        value={{
          user,
          setUser,
          currentPage,
          setCurrentPage,
          habits,
          setHabits,
          todayHabits,
          setTodayHabits,
          completedHabits,
          setCompletedHabits,
          completionRate,
          setCompletionRate
        }}
      >
        {currentPage !== "/" && currentPage !== "/cadastro" && (
          <>
            <Header />
            <Footer />
          </>
        )}
        <Routes>
          <Route path="/" element={<LoginPage/>} />
          <Route path="/cadastro" element={<SignUpPage/>} />
          <Route path="/hoje" element={<TodayPage/>} />
          <Route path="/habitos" element={<HabitsPage/>} />
          <Route path="/historico" element={<HistoryPage/>} />
        </Routes>
      </UserContext.Provider>
    </>
  );
}

export default App;
