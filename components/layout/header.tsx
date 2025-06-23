'use client';

import { Bell, Globe } from 'lucide-react';

import { Button } from '@/components/ui/button';

export function Header() {
	return (
		<header className='h-16 bg-white border-b border-gray-200 px-6 flex items-center justify-end'>
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
