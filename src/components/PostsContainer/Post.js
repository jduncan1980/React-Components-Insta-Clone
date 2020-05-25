import React, { useState } from 'react';
import CommentSection from '../CommentSection/CommentSectionContainer';
import LikeSection from './LikeSection';
import PostHeader from './PostHeader';
import Timestamp from './Timestamp';

import './Posts.css';

const Post = (props) => {
	const [likes, setLikes] = useState(props.post.likes);
	const [comments, setComments] = useState(props.post.comments);

	return (
		<div className='post-border'>
			<PostHeader
				username={props.post.username}
				thumbnailUrl={props.post.thumbnailUrl}
			/>
			<div className='post-image-wrapper'>
				<img
					alt='post thumbnail'
					className='post-image'
					src={props.post.imageUrl}
				/>
			</div>
			<LikeSection likes={likes} setLikes={setLikes} />
			<CommentSection
				comments={comments}
				setComments={setComments}
				login={props.login}
			/>
			<Timestamp timestamp={props.post.timestamp} />
		</div>
	);
};

export default Post;
