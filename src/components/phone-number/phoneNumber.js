import React from "react";
import { PhoneNumberBox } from "./PhoneNumber.style";

const PhoneNumber = ({ phoneNumber, handleDrag, handleDrop }) => (
	<PhoneNumberBox
		draggable={true}
		id={phoneNumber}
		onDragOver={(ev) => ev.preventDefault()}
		onDragStart={handleDrag}
		onDrop={handleDrop}
	>
		{phoneNumber}
	</PhoneNumberBox>
);

export default PhoneNumber;
