import { useEffect } from "react";
import { useLocation } from "react-router";

export default function TodayPage({ setCurrentPage }) {
  const currentPage = useLocation().pathname;
  useEffect(() => {
    setCurrentPage(currentPage);
  }, []);
  return <></>;
}
