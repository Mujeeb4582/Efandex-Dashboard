'use client';

import { useState } from 'react';
import {
	Search,
	Calendar,
	Download,
	MoreHorizontal,
	ChevronLeft,
	ChevronRight,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { useDashboardStore } from '@/store/dashboard-store';

export function BookingsTable() {
	const { bookings, selectedDate } = useDashboardStore();
	const [searchTerm, setSearchTerm] = useState('');
	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 5;

	const getStatusVariant = (status: string) => {
		switch (status) {
			case 'Completed':
				return 'success';
			case 'In Progress':
				return 'warning';
			case 'Cancelled':
				return 'destructive';
			default:
				return 'default';
		}
	};

	const filteredBookings = bookings.filter((booking) =>
		booking.guestName.toLowerCase().includes(searchTerm.toLowerCase()),
	);

	const paginatedBookings = filteredBookings.slice(
		(currentPage - 1) * itemsPerPage,
		currentPage * itemsPerPage,
	);

	const totalPages = Math.ceil(filteredBookings.length / itemsPerPage);

	return (
		<div className='bg-white rounded-lg border border-gray-200 mb-8'>
			<div className='flex items-center justify-between p-6 border-b border-gray-200'>
				<h2 className='text-lg font-semibold text-gray-900'>Recent Bookings</h2>
				<div className='flex items-center space-x-4'>
					<div className='relative'>
						<Search className='absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400' />
						<Input
							type='text'
							placeholder='Search here...'
							value={searchTerm}
							onChange={(e) => setSearchTerm(e.target.value)}
							className='pl-10 w-64'
						/>
					</div>
					<Button
						variant='outline'
						size='sm'
					>
						<Calendar className='h-4 w-4 mr-2' />
						{selectedDate}
					</Button>
					<Button
						variant='default'
						size='sm'
					>
						<Download className='h-4 w-4 mr-2' />
						Export
					</Button>
					<Button
						variant='ghost'
						size='icon'
					>
						<MoreHorizontal className='h-4 w-4' />
					</Button>
				</div>
			</div>

			<div className='overflow-x-auto'>
				<table className='w-full'>
					<thead className='border-b border-gray-200'>
						<tr>
							<th className='text-left p-4 font-medium text-gray-700'>Name</th>
							<th className='text-left p-4 font-medium text-gray-700'>
								Status
							</th>
							<th className='text-left p-4 font-medium text-gray-700'>Price</th>
							<th className='text-left p-4 font-medium text-gray-700'>
								Capacity
							</th>
							<th className='text-left p-4 font-medium text-gray-700'>
								Duration
							</th>
							<th className='text-left p-4 font-medium text-gray-700'>
								Action
							</th>
						</tr>
					</thead>
					<tbody>
						{paginatedBookings.map((booking) => (
							<tr
								key={booking.id}
								className='border-b border-gray-100 hover:bg-gray-50'
							>
								<td className='p-4 text-gray-600'>{booking.guestName}</td>
								<td className='p-4'>
									<Badge variant={getStatusVariant(booking.status)}>
										{booking.status}
									</Badge>
								</td>
								<td className='p-4 text-gray-600'>${booking.price}</td>
								<td className='p-4 text-gray-600'>{booking.capacity}</td>
								<td className='p-4 text-gray-600'>{booking.duration}</td>
								<td className='p-4'>
									<Button
										variant='outline'
										size='sm'
									>
										View Booking Details
									</Button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			<div className='flex items-center justify-between p-4 border-t border-gray-200'>
				<Button
					variant='outline'
					size='sm'
					onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
					disabled={currentPage === 1}
				>
					<ChevronLeft className='h-4 w-4 mr-2' />
					Previous
				</Button>
				<div className='flex space-x-2'>
					{Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
						<Button
							key={page}
							variant={currentPage === page ? 'default' : 'outline'}
							size='sm'
							className='w-8 h-8 p-0'
							onClick={() => setCurrentPage(page)}
						>
							{page}
						</Button>
					))}
				</div>
				<Button
					variant='outline'
					size='sm'
					onClick={() =>
						setCurrentPage((prev) => Math.min(prev + 1, totalPages))
					}
					disabled={currentPage === totalPages}
				>
					Next
					<ChevronRight className='h-4 w-4 ml-2' />
				</Button>
			</div>
		</div>
	);
}
