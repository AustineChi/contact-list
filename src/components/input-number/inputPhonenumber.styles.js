import styled from "styled-components";

export const InputWrapper = styled.div`
	display: flex;
	width: 400px;
`;
export const Input = styled.input`
	width: 250px;
	margin-right: 20px;
	background: #fff;
	border: 1px solid #dfe1e5;
	box-shadow: none;
	border-radius: 24px;
	z-index: 3;
	height: 44px;
	padding: 0 16px;
	height: 36px;
	color: rgba(0, 0, 0, 0.87);
	outline: none;
	font-size: 16px;
`;

export const Submit = styled.button`
	background-color: #000;
	border-radius: 16px;
	color: #fff;
	font-size: 14px;
	padding: 0 16px;
	height: 36px;
	width: 150px;
	text-align: center;
	cursor: pointer;
	outline: none;
	&:disabled {
		opacity: 0.4;
		cursor: not-allowed;
	}
`;
