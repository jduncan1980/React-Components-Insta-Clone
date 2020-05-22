import React, { useState } from 'react';
import Post from './Post';
import './Posts.css';
import dummyData from '../../dummy-data';

const PostsPage = () => {
	const [data, setData] = useState(dummyData);

	return (
		<div className='posts-container-wrapper'>
			{data.map((post, index) => (
				<div key={`${post}-${index}`}>
					<Post post={post} />
				</div>
			))}
		</div>
	);
};

export default PostsPage;
