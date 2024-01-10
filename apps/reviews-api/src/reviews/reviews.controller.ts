import { Controller, Get } from '@nestjs/common';
import { ReviewsService } from './reviews.service';
import { ReviewsCountResponse, ReviewsResponse, ReviewExt } from './reviews.types';

@Controller('reviews')
export class ReviewsController {
	constructor(private reviewsService: ReviewsService) {}

	@Get()
	async getReviews(): Promise<ReviewsResponse> {
		//throw new NotFoundException('Not implemented');
		const reviews = await this.reviewsService.getReviews();

		/*
		const reviews: ReviewExt[] = await Promise.all(
			review.map(async (review) => ({
			  ...review,
			  company: await this.reviewsService.getCompany(review.companyId),
			  user: await this.reviewsService.getUser(review.reviewerId),
			})),
		  );
		  */

		return { reviews };
	}
	@Get('/count')
	async getReviewsCount(): Promise<ReviewsCountResponse> {
		const reviewsCount = await this.reviewsService.getReviewsCount();
		return { reviewsCount };
	}
}
