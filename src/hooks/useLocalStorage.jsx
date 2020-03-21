import { useState } from 'react';

export const useLocalStorage = (key, intialValue) => {
	const [storedValue, setstoredValue] = useState(() => {
		const item = window.localStorage.getItem(key);
		return item ? JSON.parse(item) : null;
	});

	return [storedValue];
};
