import React from 'react';
import MainContextProvider from './contexts/mainContext';
import SearchBar from './components/SearchBar/SearchBarContainer';
import PostPage from './components/PostsContainer/PostsPage';
import './App.css';

const App = () => {
	return (
		<div className='App'>
			<MainContextProvider>
				<SearchBar />
				<PostPage />
			</MainContextProvider>
		</div>
	);
};

export default App;
