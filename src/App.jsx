import { Route, Routes, useLocation } from "react-router";
import SignUpPage from "./pages/LoginPages/SignUpPage";
import axios from "axios";
import { useState } from "react";
import LoginPage from "./pages/LoginPages/LoginPage";
import TodayPage from "./pages/LoginPages/TodayPage/TodayPage";
import Header from "./components/Header";
import { UserContext } from "./context/Context";
import Footer from "./components/Footer";

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
          <Route path="/" element={<LoginPage setCurrentPage={setCurrentPage}/>} />
          <Route path="/cadastro" element={<SignUpPage setCurrentPage={setCurrentPage}/>} />
          <Route path="/hoje" element={<TodayPage setCurrentPage={setCurrentPage}/>} />
        </Routes>
      </UserContext.Provider>
    </>
  );
}

export default App;
