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

const FooterContainer = styled.footer`
  position: fixed;
  width: 100%;
  height: 70px;
  bottom: 0;
  left: 0;
  background: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 31px;

  a {
    text-decoration: none;
  }

  span {
    width: 68px;
    height: 22px;
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    color: #52b6ff;
  }

  div {
    width: 91px;
    height: 91px;
    margin-bottom: 50px;
    p {
      width: 40px;
      height: 22px;
      font-family: "Lexend Deca";
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 22px;
      text-align: center;
      color: #ffffff;
      padding-bottom: 28px;
    }
  }
`;

export { HeaderContainer, ProfileContainer, FooterContainer };
