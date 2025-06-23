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

export function UserRegistrations() {
	const { users, approveUser, declineUser } = useDashboardStore();
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

	return (
		<div className='bg-white rounded-lg border border-gray-200'>
			<div className='flex items-center justify-between p-6 border-b border-gray-200'>
				<h2 className='text-lg font-semibold text-gray-900'>
					New User Registrations
				</h2>
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
						Today
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
								Category
							</th>
							<th className='text-left p-4 font-medium text-gray-700'>
								Join Date
							</th>
							<th className='text-left p-4 font-medium text-gray-700'>Email</th>
							<th className='text-left p-4 font-medium text-gray-700'>
								Action
							</th>
						</tr>
					</thead>
					<tbody>
						{paginatedUsers.map((user) => (
							<tr
								key={user.id}
								className='border-b border-gray-100 hover:bg-gray-50'
							>
								<td className='p-4 text-gray-900'>{user.name}</td>
								<td className='p-4'>
									<Badge
										variant={user.category === 'Guest' ? 'default' : 'warning'}
									>
										{user.category}
									</Badge>
								</td>
								<td className='p-4 text-gray-700'>{user.joinDate}</td>
								<td className='p-4 text-gray-700'>{user.email}</td>
								<td className='p-4 space-x-2'>
									<Button
										variant='destructive'
										size='sm'
										onClick={() => declineUser(user.id)}
									>
										Decline
									</Button>
									<Button
										variant='secondary'
										size='sm'
										onClick={() => approveUser(user.id)}
									>
										Approve
									</Button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			{/* Pagination */}
			<div className='flex items-center justify-between px-6 py-4'>
				<div className='flex items-center space-x-2'>
					<Button
						variant='ghost'
						size='icon'
						onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
						disabled={currentPage === 1}
					>
						<ChevronLeft className='h-4 w-4' />
					</Button>
					{[...Array(totalPages)].map((_, index) => (
						<Button
							key={index}
							variant={currentPage === index + 1 ? 'default' : 'ghost'}
							size='sm'
							onClick={() => setCurrentPage(index + 1)}
						>
							{index + 1}
						</Button>
					))}
					<Button
						variant='ghost'
						size='icon'
						onClick={() =>
							setCurrentPage((prev) => Math.min(prev + 1, totalPages))
						}
						disabled={currentPage === totalPages}
					>
						<ChevronRight className='h-4 w-4' />
					</Button>
				</div>
			</div>
		</div>
	);
}
