import React from "react";
import { InputWrapper, Input, Submit } from "./inputPhonenumber.styles";
import { validateNumber } from "../../utils";

const InputPhoneNumber = ({ number, setNumber, addPhoneNumber }) => (
	<InputWrapper>
		<Input
			value={number}
			onChange={(e) => setNumber(validateNumber(e.target.value))}
		/>
		<Submit disabled={number.length !== 10} onClick={addPhoneNumber}>
			Enter
		</Submit>
	</InputWrapper>
);

export default InputPhoneNumber;
