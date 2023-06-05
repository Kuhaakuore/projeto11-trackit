import styled from "styled-components";

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  background: #126ba5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 18px;
  z-index: 1;
  p {
    width: 97px;
    height: 49px;
    font-family: "Playball";
    font-style: normal;
    font-weight: 400;
    font-size: 38.982px;
    line-height: 49px;
    color: #ffffff;
  }
  a {
    text-decoration: none;
    cursor: pointer;
  }
`;

const ProfileContainer = styled.div`
  img {
    width: 51px;
    height: 51px;
    border-radius: 98px;
  }
`;

export { HeaderContainer, ProfileContainer }