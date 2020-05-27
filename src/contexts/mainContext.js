import React, { createContext, useState, useEffect } from 'react';
import dummyData from '../dummy-data';

export const MainContext = createContext();

const MainContextProvider = (props) => {
	const [login, setLogin] = useState();
	const [data, setData] = useState(dummyData);
	const [searchParams, setSearchParams] = useState('');

	useEffect(() => {
		if (searchParams === '') {
			setData(dummyData);
		} else {
			let filtered = dummyData.filter((item) => {
				return JSON.stringify(Object.values(item)).includes(searchParams);
			});
			setData(filtered);
			console.log(filtered);
		}
	}, [searchParams]);

	useEffect(() => {
		setLogin(prompt('What is your user name?'));
	}, []);

	return (
		<MainContext.Provider
			value={{
				login,
				setLogin,
				data,
				setData,
				searchParams,
				setSearchParams,
			}}
		>
			{props.children}
		</MainContext.Provider>
	);
};

export default MainContextProvider;
