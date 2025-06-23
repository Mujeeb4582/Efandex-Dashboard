'use client';

import { useState } from 'react';
import {
	Calendar,
	Send,
	EllipsisVertical,
	CircleCheck,
	ArrowRight,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useDashboardStore } from '@/store/dashboard-store';
import { TableHeader } from '../ui/table-header';
import { Booking } from '@/lib/types';
import { DataTable } from '../ui/table-body';
import { Pagination } from '../ui/pagination';

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

	const columns = [
		{
			key: 'guestName',
			label: 'Name',
			render: (booking: Booking) => (
				<div className='text-efandex-gray-900 font-medium'>
					<span>{booking.guestName}</span>
				</div>
			),
		},
		{
			key: 'status',
			label: 'Status',
			render: (booking: Booking) => (
				<Badge variant={getStatusVariant(booking.status)}>
					{booking.status === 'Completed' ? (
						<>
							<CircleCheck className='mr-1' />
							{booking.status}
						</>
					) : (
						<>
							{/* dot */}
							<div className='size-2 mr-1 rounded-full bg-current' />
							{booking.status}
						</>
					)}
				</Badge>
			),
		},
		{
			key: 'price',
			label: 'Price',
			render: (booking: Booking) => `$${booking.price.toFixed(2)}`,
		},
		{
			key: 'capacity',
			label: 'Capacity',
		},
		{
			key: 'duration',
			label: 'Duration',
		},
		{
			key: 'action',
			label: 'Action',
			render: () => (
				<Button
					variant='ghost'
					size='sm'
					className='text-black font-medium text-xs'
				>
					View Booking Details
					<ArrowRight className='ml-2 size-4' />
				</Button>
			),
		},
	];

	return (
		<div className='bg-white rounded-lg border border-gray-200 mb-8'>
			<TableHeader
				title='Recent Bookings'
				searchValue={searchTerm}
				onSearchChange={setSearchTerm}
			>
				<Button
					variant='outline'
					size='lg'
					className='text-sm'
				>
					{selectedDate}
					<Calendar className='size-4 mr-2' />
				</Button>
				<Button
					variant='default'
					size='lg'
				>
					Export
					<Send className='size-4 mr-2' />
				</Button>
				<Button
					variant='ghost'
					size='icon'
				>
					<EllipsisVertical className='size-6 text-efandex-gray-300' />
				</Button>
			</TableHeader>

			<DataTable
				columns={columns}
				data={paginatedBookings}
				rowKey={(booking) => booking.id}
			/>

			<Pagination
				currentPage={currentPage}
				totalPages={totalPages}
				onPageChange={(page) => setCurrentPage(page)}
			/>
		</div>
	);
}
