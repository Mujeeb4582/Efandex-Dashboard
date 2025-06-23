'use client';

import { useState } from 'react';
import {
	Calendar,
	Send,
	EllipsisVertical,
	CircleCheck,
	CircleX,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useDashboardStore } from '@/store/dashboard-store';
import { TableHeader } from '@/components/ui/table-header';
import { Column, DataTable } from '@/components/ui/table-body';
import { Pagination } from '@/components/ui/pagination';
import { User } from '@/lib/types';

export function UserRegistrations() {
	const { users, approveUser, declineUser, selectedDate } = useDashboardStore();
	const [searchTerm, setSearchTerm] = useState('');
	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 5;

	const filteredUsers = users.filter(
		(user) =>
			user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
			user.email.toLowerCase().includes(searchTerm.toLowerCase()),
	);

	const paginatedUsers = filteredUsers.slice(
		(currentPage - 1) * itemsPerPage,
		currentPage * itemsPerPage,
	);

	const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);

	const columns: Column<User>[] = [
		{
			key: 'name',
			label: 'Name',
		},
		{
			key: 'category',
			label: 'Category',
			render: (user) => (
				<Badge variant={user.category === 'Guest' ? 'secondary' : 'warning'}>
					<div className='size-2 mr-1 rounded-full bg-current' />
					{user.category}
				</Badge>
			),
		},
		{
			key: 'joinDate',
			label: 'Join Date',
		},
		{
			key: 'email',
			label: 'Email',
		},
		{
			key: 'actions',
			label: 'Action',
			render: (user) => (
				<div className='space-x-2'>
					<Button
						variant='destructive'
						size='sm'
						onClick={() => declineUser(user.id)}
						className='rounded-full px-4'
					>
						<CircleX className='mr-1' />
						Decline
					</Button>
					<Button
						variant='success'
						size='sm'
						onClick={() => approveUser(user.id)}
						className='rounded-full px-4'
					>
						<CircleCheck className='mr-1' />
						Approve
					</Button>
				</div>
			),
		},
	];

	return (
		<div className='bg-white rounded-lg border border-gray-200'>
			<TableHeader
				title='New User Registrations'
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
				data={paginatedUsers}
				rowKey={(user) => user.id}
			/>

			<Pagination
				currentPage={currentPage}
				totalPages={totalPages}
				onPageChange={setCurrentPage}
			/>
		</div>
	);
}
