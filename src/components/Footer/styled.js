import styled from "styled-components";

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
  z-index: 1;

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

export { FooterContainer };
