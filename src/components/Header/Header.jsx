import { HeaderContainer, ProfileContainer } from "../Header/styled";
import { useContext } from "react";
import { UserContext } from "../../context/Context";
import { Link } from "react-router-dom";

export default function Header() {
  const { user } = useContext(UserContext);

  function logOut() {
    localStorage.clear();
  }
  return (
    <>
      <HeaderContainer data-test="header">
        <Link to={"/"} onClick={logOut}>
          <p>TrackIt</p>
        </Link>
        <ProfileContainer>
          <img
            src={user?.image !== undefined ? user.image : ""}
            alt="User's profile picture"
          data-test="avatar"/>
        </ProfileContainer>
      </HeaderContainer>
    </>
  );
}
