import React, { useState, useEffect } from 'react';
import Post from './Post';
import './Posts.css';
import dummyData from '../../dummy-data';

const PostsPage = () => {
	const [login, setLogin] = useState();
	const [data, setData] = useState(dummyData);

	useEffect(() => {
		setLogin(prompt('What is your user name?'));
	}, []);

	return (
		<div className='posts-container-wrapper'>
			{data.map((post, index) => (
				<Post key={`${post}-${index}`} post={post} login={login} />
			))}
		</div>
	);
};

export default PostsPage;
