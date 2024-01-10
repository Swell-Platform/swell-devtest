import Alert from '@mui/material/Alert';
import TaskIcon from '@mui/icons-material/Task';
import {
	Avatar,
	Divider,
	Card,
	CardContent,
	List,
	ListItem,
	Typography,
	Rating,
} from '@mui/material';
//import { ReviewsResponse } from '../../../../../reviews-api/src/reviews/reviews.types.ts'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Company, Review, User } from '@prisma/client';

/* eslint-disable-next-line */
export interface ReviewsListProps extends Review {
	user: User;
	company: Company;
}

const ReviewItem = ({ user, company, review }) => {
	const { firstname, lastname } = user;
	const { name: companyName } = company;
	const { createdOn, rating, reviewText } = review;

	return (
		<ListItem>
			<Card>
				<CardContent>
					<Typography variant="h6">{`${firstname} ${lastname}`}</Typography>
					<Typography variant="subtitle1">{companyName}</Typography>
					<Typography variant="caption">{createdOn}</Typography>
					{rating && <Typography variant="body2">Rating: {rating}</Typography>}
					<Typography variant="body1">{reviewText}</Typography>
				</CardContent>
			</Card>
		</ListItem>
	);
};

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
				<>
					<ReviewItem {...review} />
					{index < reviews.length - 1 && <Divider />}
				</>
			))}
		</List>
	);
}

export default ReviewsList;
