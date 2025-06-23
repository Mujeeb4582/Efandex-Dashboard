'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import {
	House,
	Building2,
	Users,
	Calendar,
	AlertTriangle,
	Settings,
	Shield,
	LogOut,
	Search,
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useDashboardStore } from '@/store/dashboard-store';
import { Button } from '@/components/ui/button';

const navigation = [
	{ name: 'Dashboard', href: '/', icon: House },
	{ name: 'Properties', href: '/properties', icon: Building2 },
	{ name: 'User Management', href: '/users', icon: Users },
	{ name: 'Bookings', href: '/bookings', icon: Calendar },
	{ name: 'Dispute Centre', href: '/disputes', icon: AlertTriangle },
	{ name: 'Settings', href: '/settings', icon: Settings },
];

export function Sidebar() {
	const pathname = usePathname();
	const { searchQuery, setSearchQuery } = useDashboardStore();

	return (
		<div className='flex h-full min-w-[256px] flex-col bg-white border-r border-gray-200 pt-10'>
			{/* Logo */}
			<div className='flex h-16 items-center px-6'>
				<h1 className='text-[41.09px] font-bold font-poppins text-black'>
					Efandex
				</h1>
			</div>

			{/* Search */}
			<div className='flex items-center px-4 py-2 '>
				<div className='relative w-full bg-gray-100 rounded-none'>
					<Search className='absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#2A2A2E]' />
					<Input
						type='text'
						placeholder='Search...'
						value={searchQuery}
						onChange={(e) => setSearchQuery(e.target.value)}
						className='pl-10 border-0 placeholder:text-[#2A2A2E] text-base focus:bg-white h-14'
					/>
				</div>
			</div>

			{/* Navigation */}
			<nav className='flex-1 px-4 py-6'>
				<ul className='space-y-2'>
					{navigation.map((item) => {
						const isActive = pathname === item.href;
						return (
							<li key={item.name}>
								<Link
									href={item.href}
									className={cn(
										'flex items-center px-4 py-3 text-base rounded-lg transition-colors font-poppins h-14',
										isActive
											? 'bg-black text-white'
											: 'text-gray-700 hover:bg-gray-100',
									)}
								>
									<item.icon className='mr-3 h-5 w-5' />
									{item.name}
								</Link>
							</li>
						);
					})}
				</ul>
			</nav>

			{/* Bottom section */}
			<div className='px-4 py-6 border-t border-gray-200'>
				<Link
					href='/privacy'
					className='flex items-center px-4 py-3 h-14 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-100 transition-colors'
				>
					<Shield className='mr-3 h-5 w-5' />
					Privacy Policy
				</Link>
				<Button className='flex w-full items-center justify-start py-3 text-sm bg-[#EA4335] font-medium text-white rounded-lg hover:bg-[#D32F2F] transition-colors h-14'>
					<LogOut className='ml-2 mr-2 h-5 w-5' />
					Logout
				</Button>
			</div>
		</div>
	);
}
