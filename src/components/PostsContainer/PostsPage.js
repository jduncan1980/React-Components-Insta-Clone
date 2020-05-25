import React, { useContext } from 'react';
import { MainContext } from '../../contexts/mainContext';
import Post from './Post';
import './Posts.css';

const PostsPage = () => {
	const { login, data } = useContext(MainContext);

	return (
		<div className='posts-container-wrapper'>
			{data.map((post, index) => (
				<Post key={`${post}-${index}`} post={post} login={login} />
			))}
		</div>
	);
};

export default PostsPage;
