import { HeaderContainer, ProfileContainer } from "../Header/styled";
import { useContext } from "react";
import { UserContext } from "../../context/Context";
import { Link } from "react-router-dom";

export default function Header() {
  const { user } = useContext(UserContext);
  return (
    <>
      <HeaderContainer data-test="header">
        <Link to={"/"}>
          <p>TrackIt</p>
        </Link>
        <ProfileContainer>
          <img
            src={user?.image !== undefined ? user.image : ""}
            alt="User's profile picture"
          />
        </ProfileContainer>
      </HeaderContainer>
    </>
  );
}
