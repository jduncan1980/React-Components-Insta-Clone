import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';

const LikeSection = (props) => {
	const [liked, setLiked] = useState(false);
	return (
		<div>
			<div className='like-section' key='likes-icons-container'>
				<div className='like-section-wrapper'>
					<FontAwesomeIcon
						icon={liked ? faHeartSolid : faHeart}
						onClick={() => {
							if (liked === false) {
								props.setLikes(props.likes + 1);
							} else {
								props.setLikes(props.likes - 1);
							}
							setLiked(!liked);
							console.log(props.liked);
						}}
					/>
				</div>
				<div className='like-section-wrapper'>
					<FontAwesomeIcon icon={faComment} />
				</div>
			</div>
			<p className='like-number'>{props.likes} likes</p>
		</div>
	);
};

export default LikeSection;
