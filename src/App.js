import React from 'react';
import SearchBar from './components/SearchBar/SearchBarContainer';
import PostPage from './components/PostsContainer/PostsPage';
import './App.css';

const App = () => {
	return (
		<div className='App'>
			<SearchBar />
			<PostPage />
		</div>
	);
};

export default App;
