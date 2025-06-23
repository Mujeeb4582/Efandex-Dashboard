'use client';

import { Card, CardContent } from '@/components/ui/card';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { TrendingUp, TrendingDown, ChevronDown } from 'lucide-react';
import { useDashboardStore } from '@/store/dashboard-store';
import { formatCurrency, formatPercentage } from '@/lib/utils';
import { useState } from 'react';

const timeRanges = ['Last Month', 'Last 3 Months', 'Last Year'];

export function StatsCards() {
	const { stats } = useDashboardStore();
	const [selectedPeriods, setSelectedPeriods] = useState([
		stats.activeUsers.period,
		stats.totalProperties.period,
		stats.totalRevenue.period,
	]);

	const cards = [
		{
			title: 'Active Users',
			value: stats.activeUsers.count.toLocaleString(),
			change: stats.activeUsers.change,
			color: {
				path: '#3b82f6',
				gradient: 'url(#blueGradient)',
			},
		},
		{
			title: 'Total Properties',
			value: stats.totalProperties.count,
			change: stats.totalProperties.change,
			color: {
				path: '#ef4444',
				gradient: 'url(#redGradient)',
			},
		},
		{
			title: 'Total Revenue',
			value: formatCurrency(stats.totalRevenue.amount),
			change: stats.totalRevenue.change,
			color: {
				path: '#10b981',
				gradient: 'url(#greenGradient)',
			},
		},
	];

	return (
		<>
			{/* SVG Gradients */}
			<svg
				width='0'
				height='0'
			>
				<defs>
					<linearGradient
						id='blueGradient'
						x1='0'
						y1='0'
						x2='0'
						y2='1'
					>
						<stop
							offset='0%'
							stopColor='#3b82f6'
							stopOpacity='0.5'
						/>
						<stop
							offset='100%'
							stopColor='#3b82f6'
							stopOpacity='0'
						/>
					</linearGradient>
					<linearGradient
						id='redGradient'
						x1='0'
						y1='0'
						x2='0'
						y2='1'
					>
						<stop
							offset='0%'
							stopColor='#ef4444'
							stopOpacity='0.5'
						/>
						<stop
							offset='100%'
							stopColor='#ef4444'
							stopOpacity='0'
						/>
					</linearGradient>
					<linearGradient
						id='greenGradient'
						x1='0'
						y1='0'
						x2='0'
						y2='1'
					>
						<stop
							offset='0%'
							stopColor='#10b981'
							stopOpacity='0.5'
						/>
						<stop
							offset='100%'
							stopColor='#10b981'
							stopOpacity='0'
						/>
					</linearGradient>
				</defs>
			</svg>

			<div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-8'>
				{cards.map((card, index) => (
					<Card key={index}>
						<CardContent className='p-6'>
							<div className='flex items-center justify-between mb-4'>
								<p className='text-sm text-gray-600'>{card.title}</p>
								<DropdownMenu>
									<DropdownMenuTrigger className='text-xs text-gray-500 flex items-center gap-1 focus:outline-none'>
										{selectedPeriods[index]} <ChevronDown className='h-4 w-4' />
									</DropdownMenuTrigger>
									<DropdownMenuContent align='end'>
										{timeRanges.map((range) => (
											<DropdownMenuItem
												key={range}
												onClick={() => {
													const newPeriods = [...selectedPeriods];
													newPeriods[index] = range;
													setSelectedPeriods(newPeriods);
												}}
											>
												{range}
											</DropdownMenuItem>
										))}
									</DropdownMenuContent>
								</DropdownMenu>
							</div>

							<div className='flex items-center justify-between'>
								<h3 className='text-2xl font-bold text-gray-900'>
									{card.value}
								</h3>
								{/* Graph area */}
								<svg
									viewBox='0 0 100 40'
									className='h-12 w-24'
								>
									<path
										d='M0,30 C20,10 40,35 60,15 C80,-5 100,20 100,20 L100,40 L0,40 Z'
										fill={card.color.gradient}
									/>
									<path
										d='M0,30 C20,10 40,35 60,15 C80,-5 100,20'
										stroke={card.color.path}
										strokeWidth='2'
										fill='none'
									/>
								</svg>
							</div>

							<div className='flex items-center mt-4'>
								<div
									className={`flex items-center text-sm ${
										card.change > 0 ? 'text-green-600' : 'text-red-600'
									}`}
								>
									{card.change > 0 ? (
										<TrendingUp className='h-4 w-4 mr-1' />
									) : (
										<TrendingDown className='h-4 w-4 mr-1' />
									)}
									{formatPercentage(card.change)}
								</div>
								<span className='text-xs text-gray-500 ml-2'>
									{selectedPeriods[index]}
								</span>
							</div>
						</CardContent>
					</Card>
				))}
			</div>
		</>
	);
}
