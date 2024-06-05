import { useState } from 'react';
import { USERS } from '../../constants/users';

const User = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const user = USERS[currentIndex];

	const isDisabledNext = currentIndex === USERS.length - 1;
	const isDisabledPrevious = currentIndex === 0;

	return (
		<div key={user.userId}>
			<img src={user.profileImage} alt={`${user.name}'s profile`} />
			<h1>Name: {user.name}</h1>
			<p>Username: {user.username}</p>
			<p>Email: {user.email}</p>
			<button
				disabled={isDisabledPrevious}
				onClick={() => handlePrevious(currentIndex, setCurrentIndex)}
			>
				Previous
			</button>
			<button
				disabled={isDisabledNext}
				onClick={() => handleNext(currentIndex, setCurrentIndex)}
			>
				Next
			</button>
		</div>
	);
};

const handleNext = (currentIndex, setCurrentIndex) => {
	setCurrentIndex(currentIndex + 1);
};

const handlePrevious = (currentIndex, setCurrentIndex) => {
	setCurrentIndex(currentIndex - 1);
};

export default User;
