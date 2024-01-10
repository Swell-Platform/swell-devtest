import Alert from '@mui/material/Alert';
import TaskIcon from '@mui/icons-material/Task';
import { List, ListItem, Typography, Rating } from '@mui/material';
//import { ReviewsResponse } from '../../../../../reviews-api/src/reviews/reviews.types.ts'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Company, Review, User } from '@prisma/client';

/* eslint-disable-next-line */
export interface ReviewsListProps extends Review {
	user: User;
	company: Company;
}

export function ReviewsList(props: ReviewsListProps) {
	const [reviews, setReviews] = useState<ReviewsListProps[] | null>(null);

	useEffect(() => {
		const fetchReviews = async () => {
			try {
				const response = await axios.get('http://localhost:3333/api/reviews/');
				setReviews(response.data);
			} catch (error) {
				console.error('Error fetching reviews:', error);
			}
		};

		fetchReviews();
	}, []);

	if (reviews === null) {
		return (
			<Alert severity="info" icon={<TaskIcon />}>
				Loading reviews...
			</Alert>
		);
	}

	if (reviews.length === 0) {
		return (
			<Alert severity="info" icon={<TaskIcon />}>
				No reviews available.
			</Alert>
		);
	}

	return (
		<List>
			{reviews.map((review, index) => (
				<ListItem>
					<Typography>{props.user.firstName}</Typography>
					<Rating></Rating>
					<Typography>{review.createdOn}</Typography>
				</ListItem>
			))}
		</List>
	);
}

export default ReviewsList;
