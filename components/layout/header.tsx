'use client';

import { Bell, ChevronDown, Globe } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export function Header() {
	return (
		<header className='h-16 bg-white border-b border-gray-200 px-6 flex items-center justify-end'>
			<div className='flex items-center space-x-4'>
				{/* Notifications */}
				<Button
					variant='ghost'
					size='icon'
					className='mr-2'
				>
					<Bell className='size-7' />
				</Button>

				{/* Language selector */}
				<div className='flex items-center text-sm text-[#081F2C] h-10 bg-[#F2F2F2] px-3 rounded-full font-inter'>
					<Globe className='h-4 w-4 mr-1' />
					<span>EN</span>
					<span className='ml-2 text-[#B2BABE]'>|</span>
					<span className='ml-2'>USD</span>
				</div>

				{/* Profile */}
				<div className='flex items-center border-2 border-black rounded-full px-3 py-1 cursor-pointer hover:bg-[#E0E0E0] transition-colors'>
					<Avatar>
						<AvatarImage src='https://github.com/shadcn.png' />
						<AvatarFallback>CN</AvatarFallback>
					</Avatar>
					<span className='ml-2 text-sm text-[#081F2C] font-medium'>
						<ChevronDown className='size-6' />
					</span>
				</div>
			</div>
		</header>
	);
}
