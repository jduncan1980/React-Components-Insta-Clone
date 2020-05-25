import React from 'react';
import CommentInput from './CommentInput';
import Comment from './Comment';
import './Comment.css';

const CommentSection = (props) => {
	return (
		<div>
			{props.comments.map((comment, index) => {
				return <Comment key={`${comment}-${index}`} comment={comment} />;
			})}
			<CommentInput
				login={props.login}
				comments={props.comments}
				setComments={props.setComments}
			/>
		</div>
	);
};

export default CommentSection;
