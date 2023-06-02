import { useContext, useEffect } from "react";
import { useLocation } from "react-router";
import { UserContext } from "../../context/Context";

export default function TodayPage() {
  const currentPage = useLocation().pathname;
  const { setCurrentPage } = useContext(UserContext);
  
  useEffect(() => {
    setCurrentPage(currentPage);
  }, []);
  return <></>;
}
