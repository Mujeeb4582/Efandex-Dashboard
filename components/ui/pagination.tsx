'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

type PaginationProps = {
	currentPage: number;
	totalPages: number;
	onPageChange: (page: number) => void;
};

export function Pagination({
	currentPage,
	totalPages,
	onPageChange,
}: PaginationProps) {
	const handlePrevious = () => {
		onPageChange(Math.max(currentPage - 1, 1));
	};

	const handleNext = () => {
		onPageChange(Math.min(currentPage + 1, totalPages));
	};

	return (
		<div className='flex items-center justify-between p-4 border-t border-gray-200'>
			<Button
				variant='outline'
				size='sm'
				onClick={handlePrevious}
				disabled={currentPage === 1}
			>
				<ChevronLeft className='h-4 w-4 mr-2' />
				Previous
			</Button>

			<div className='flex space-x-2'>
				{Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
					<Button
						key={page}
						variant='ghost'
						size='sm'
						className={`w-8 h-8 p-0 ${
							currentPage === page ? 'text-black' : 'text-efandex-gray-500'
						}`}
						onClick={() => onPageChange(page)}
					>
						{page}
					</Button>
				))}
			</div>

			<Button
				variant='outline'
				size='sm'
				onClick={handleNext}
				disabled={currentPage === totalPages}
			>
				Next
				<ChevronRight className='h-4 w-4 ml-2' />
			</Button>
		</div>
	);
}
