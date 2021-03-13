import React, { useState } from "react";
import { PhoneNumber, InputNumber } from "./components";
import { formatNumber } from "./utils";

import { Container, PhoneNumbersWrapper, Title } from "./styles/main.styles";

export const App = () => {
	const [dragId, setDragId] = useState();
	const [number, setNumber] = useState("");
	const [phoneNumbers, setPhoneNumbers] = useState([]);

	const addPhoneNumber = () => {
		if (number) {
			setPhoneNumbers([formatNumber(number), ...phoneNumbers]);
			setNumber("");
		}
	};

	const handleDrag = (ev) => {
		setDragId(ev.currentTarget.id);
	};

	const handleDrop = (ev) => {
		const list = [...phoneNumbers];
		const dragIndex = phoneNumbers.findIndex((item) => item === dragId);
		const dropIndex = phoneNumbers.findIndex(
			(item) => item === ev.currentTarget.id
		);
		const temporaryValue = phoneNumbers[dragIndex];
		list[dragIndex] = phoneNumbers[dropIndex];
		list[dropIndex] = temporaryValue;

		setPhoneNumbers([...list]);
	};

	return (
		<Container>
			<Title>Contact List</Title>
			<InputNumber
				number={number}
				setNumber={setNumber}
				addPhoneNumber={addPhoneNumber}
			/>
			<PhoneNumbersWrapper>
				{phoneNumbers.map((phoneNumber, key) => (
					<PhoneNumber
						key={key}
						phoneNumber={phoneNumber}
						handleDrag={handleDrag}
						handleDrop={handleDrop}
					/>
				))}
			</PhoneNumbersWrapper>
		</Container>
	);
};

export default App;
