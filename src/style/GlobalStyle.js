import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
	* {
		box-sizing: border-box;
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

export default GlobalStyle;
