import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class ReviewsService {
	constructor(private prisma: DatabaseService) {}

	getReviewsCount() {
		return this.prisma.review.count();
	}

	getReviews() {
		return this.prisma.review.findMany({
			include: {
				user: true,
				company: true,
			},
			orderBy: {
				createdOn: 'desc', // Sorting by 'createdOn' field in descending order
			},
		});
	}

	getUser(userId: string) {
		return this.prisma.user.findUnique({
			where: {
				id: userId,
			},
		});
	}

	getCompany(companyId: string) {
		return this.prisma.company.findUnique({
			where: {
				id: companyId,
			},
		});
	}
}
