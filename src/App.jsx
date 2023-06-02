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

function App() {
  axios.defaults.headers.common["Authorization"] = "rxa6U7iiGtZlTg8Zu5jI5qK4";

  const [user, setUser] = useState(undefined);
  const [completedHabits, setCompletedHabits] = useState([]);
  const [currentPage, setCurrentPage] = useState(useLocation().pathname);

  return (
    <>
      <UserContext.Provider
        value={{
          user,
          setUser,
          completedHabits,
          setCompletedHabits,
          currentPage,
          setCurrentPage,
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
        </Routes>
      </UserContext.Provider>
    </>
  );
}

export default App;
