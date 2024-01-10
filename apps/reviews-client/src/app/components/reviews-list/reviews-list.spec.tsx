import { render } from '@testing-library/react';
import ReviewsList from './reviews-list';

describe('ReviewsList', () => {
	it('should render successfully', () => {
		const { baseElement } = render(<ReviewsList />);
		expect(baseElement).toBeTruthy();
	});

	it.todo('should render list of reviews', () => {});

	it.todo('should display message if no reviews are found');

	it.todo('should display the review text if provided');

	// Feel free to add any additional tests you think are necessary
});
