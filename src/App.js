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
			const newItem = {
				phoneNumber: formatNumber(number),
				order: phoneNumbers.length + 1,
			};
			setPhoneNumbers([newItem, ...phoneNumbers]);
			setNumber("");
		}
	};

	const handleDrag = (ev) => {
		setDragId(ev.currentTarget.id);
	};

	const handleDrop = (ev) => {
		const dragBox = phoneNumbers.find((box) => box.phoneNumber === dragId);
		const dropBox = phoneNumbers.find(
			(box) => box.phoneNumber === ev.currentTarget.id
		);
		const dragBoxOrder = dragBox.order;
		const dropBoxOrder = dropBox.order;

		const newBoxState = phoneNumbers.map((box) => {
			if (box.phoneNumber === dragId) {
				box.order = dropBoxOrder;
			}
			if (box.phoneNumber === ev.currentTarget.id) {
				box.order = dragBoxOrder;
			}
			return box;
		});

		setPhoneNumbers(newBoxState);
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
				{phoneNumbers
					.sort((a, b) => a.order - b.order)
					.map((item) => (
						<PhoneNumber
							key={item.phoneNumber}
							phoneNumber={item.phoneNumber}
							handleDrag={handleDrag}
							handleDrop={handleDrop}
						/>
					))}
			</PhoneNumbersWrapper>
		</Container>
	);
};

export default App;
