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

  button {
		width: 303px;
		height: 45px;
		background-color: #52B6FF;
		border-radius: 4px;
		border: none;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		font-family: 'Lexend Deca';
		font-style: normal;
		font-weight: 400;
		font-size: 21px;
		line-height: 26px;
		text-align: center;
		color: #FFFFFF;
		
		&:disabled {
			opacity: 0.7;
		}
	}

	input {
		min-height: 45px;
		background: #FFFFFF;
		border: 1px solid #D5D5D5;
		border-radius: 5px;
		font-family: 'Lexend Deca';
		font-style: normal;
		font-weight: 400;
		font-size: 20px;
		line-height: 25px;
		color: #666666;
		padding-left: 11px;
		&::placeholder{
			color: #DBDBDB;
		}
		&:disabled {
			background: #F2F2F2;
		}
		
	}
`;

const InputsWrapper = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 32px;
  gap: 6px;
`;

export { PageContainer, InputsWrapper };
