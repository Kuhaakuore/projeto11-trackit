import styled from "styled-components";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  margin: 0 auto;
  max-width: 375px;
  min-height: 667px;
  align-items: center;
  justify-content: center;

  img {
    width: 180px;
    height: 178px;
    margin-top: 68px;
  }

  p {
    width: 232px;
    height: 17px;
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 13.976px;
    line-height: 17px;
    text-align: center;
    text-decoration-line: underline;
    color: #52b6ff;
    margin-top: 25px;
  }
`;

const InputsWrapper = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 32px;
  gap: 6px;
`;

export { PageContainer, InputsWrapper };
