'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import {
	LayoutDashboard,
	Building2,
	Users,
	Calendar,
	AlertTriangle,
	Settings,
	Shield,
	LogOut,
} from 'lucide-react';

const navigation = [
	{ name: 'Dashboard', href: '/', icon: LayoutDashboard },
	{ name: 'Properties', href: '/properties', icon: Building2 },
	{ name: 'User Management', href: '/users', icon: Users },
	{ name: 'Bookings', href: '/bookings', icon: Calendar },
	{ name: 'Dispute Centre', href: '/disputes', icon: AlertTriangle },
	{ name: 'Settings', href: '/settings', icon: Settings },
];

export function Sidebar() {
	const pathname = usePathname();

	return (
		<div className='flex h-full w-64 flex-col bg-white border-r border-gray-200'>
			{/* Logo */}
			<div className='flex h-16 items-center px-6'>
				<h1 className='text-2xl font-bold text-gray-900'>Efandex</h1>
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
										'flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors',
										isActive
											? 'bg-gray-900 text-white'
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
					className='flex items-center px-4 py-3 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-100 transition-colors'
				>
					<Shield className='mr-3 h-5 w-5' />
					Privacy Policy
				</Link>
				<button className='flex w-full items-center px-4 py-3 text-sm font-medium text-red-600 rounded-lg hover:bg-red-50 transition-colors'>
					<LogOut className='mr-3 h-5 w-5' />
					Logout
				</button>
			</div>
		</div>
	);
}
