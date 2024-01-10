import Alert from '@mui/material/Alert';
import TaskIcon from '@mui/icons-material/Task';
import { Divider, Card, CardContent, List, ListItem, Typography } from '@mui/material';
//import { ReviewsResponse } from '../../../../../reviews-api/src/reviews/reviews.types.ts'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Company, Review, User } from '@prisma/client';

/* eslint-disable-next-line */

export interface ReviewsListProps extends Review {
	user: User;
	review: Review;
	company: Company;
}

const ReviewItem: React.FC<ReviewsListProps> = ({
	user,
	company,
	createdOn,
	rating,
	reviewText,
}) => {
	const { firstName, lastName } = user;
	const { name: companyName } = company;

	return (
		<ListItem>
			<Card>
				<CardContent>
					<Typography variant="h6">{`${firstName} ${lastName}`}</Typography>
					<Typography variant="subtitle1">{companyName}</Typography>
					<Typography variant="caption">{createdOn}</Typography>
					{rating && <Typography variant="body2">Rating: {rating}</Typography>}
					<Typography variant="body1">{reviewText}</Typography>
				</CardContent>
			</Card>
		</ListItem>
	);
};

export function ReviewsList() {
	const [reviews, setReviews] = useState<ReviewsListProps[] | null>(null);

	useEffect(() => {
		const fetchReviews = async () => {
			try {
				const response = await axios.get('http://localhost:3333/api/reviews/');
				setReviews(response.data.reviews);
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
