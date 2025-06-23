'use client';

import { Search, Bell, Globe } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useDashboardStore } from '@/store/dashboard-store';

export function Header() {
	const { searchQuery, setSearchQuery } = useDashboardStore();

	return (
		<header className='h-16 bg-white border-b border-gray-200 px-6 flex items-center justify-between'>
			{/* Search */}
			<div className='flex items-center flex-1 max-w-md'>
				<div className='relative w-full'>
					<Search className='absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400' />
					<Input
						type='text'
						placeholder='Search...'
						value={searchQuery}
						onChange={(e) => setSearchQuery(e.target.value)}
						className='pl-10 bg-gray-50 border-0 focus:bg-white'
					/>
				</div>
			</div>

			{/* Right side */}
			<div className='flex items-center space-x-4'>
				{/* Language selector */}
				<div className='flex items-center text-sm text-gray-600'>
					<Globe className='h-4 w-4 mr-1' />
					<span>EN</span>
					<span className='ml-2'>USD</span>
				</div>

				{/* Notifications */}
				<Button
					variant='ghost'
					size='icon'
				>
					<Bell className='h-5 w-5' />
				</Button>

				{/* Profile */}
				<div className='flex items-center'>
					<div className='h-8 w-8 bg-gray-300 rounded-full'></div>
				</div>
			</div>
		</header>
	);
}
