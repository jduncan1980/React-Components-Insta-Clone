// You do not need to do anything in this file
import React, { useState } from 'react';

const CommentInput = (props) => {
	const [comment, setComment] = useState('');
	return (
		<form
			className='comment-form'
			onSubmit={(e) => {
				e.preventDefault();
				props.setComments([
					...props.comments,
					{ username: props.login, text: comment },
				]);
				setComment('');
			}}
		>
			<input
				type='text'
				value={comment}
				placeholder='Add comment... '
				onChange={(e) => {
					setComment(e.target.value);
				}}
			/>
		</form>
	);
};

export default CommentInput;
