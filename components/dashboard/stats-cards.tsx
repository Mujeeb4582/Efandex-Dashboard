'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { TrendingUp, TrendingDown, ChevronDown } from 'lucide-react';
import {
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from '@/components/ui/chart';
import { AreaChart, Area } from 'recharts';
import { useDashboardStore } from '@/store/dashboard-store';
import {
	formatCurrency,
	formatPercentage,
	generateChartData,
} from '@/lib/utils';
import { useState } from 'react';

const timeRanges = ['Last Month', 'Last 3 Months', 'Last Year'];

export function StatsCards() {
	const { stats } = useDashboardStore();
	const [selectedPeriods, setSelectedPeriods] = useState([
		'Last Month',
		'Last Month',
		'Last Month',
	]);

	const cards = [
		{
			title: 'Active Users',
			value: stats.activeUsers.count.toLocaleString(),
			change: stats.activeUsers.change,
			period: stats.activeUsers.period,
			color: '#2A85FF',
			chartData: generateChartData(stats.activeUsers.change > 0, 120),
		},
		{
			title: 'Total Properties',
			value: stats.totalProperties.count,
			change: stats.totalProperties.change,
			period: stats.totalProperties.period,
			color: '#FA6262',
			chartData: generateChartData(stats.totalProperties.change > 0, 120),
		},
		{
			title: 'Total Revenue',
			value: formatCurrency(stats.totalRevenue.amount),
			change: stats.totalRevenue.change,
			period: stats.totalRevenue.period,
			color: '#24BC73',
			chartData: generateChartData(stats.totalRevenue.change > 0, 120),
		},
	];

	return (
		<div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 font-inter'>
			{cards.map((card, index) => (
				<Card
					key={index}
					className='bg-white border border-gray-200'
				>
					<CardHeader>
						<div className='flex items-center justify-between'>
							<DropdownMenu>
								<DropdownMenuTrigger className='text-[10px] text-[#344054]  flex items-center gap-1 focus:outline-none'>
									{selectedPeriods[index]} <ChevronDown className='h-3 w-3' />
								</DropdownMenuTrigger>
								<DropdownMenuContent align='start'>
									{timeRanges.map((range) => (
										<DropdownMenuItem
											key={range}
											onClick={() => {
												const newPeriods = [...selectedPeriods];
												newPeriods[index] = range;
												setSelectedPeriods(newPeriods);
											}}
											className='text-[10px] text-[#344054] font-normal hover:bg-gray-100'
										>
											{range}
										</DropdownMenuItem>
									))}
								</DropdownMenuContent>
							</DropdownMenu>

							{/* Change Indicator */}
							<div className='flex items-center justify-between'>
								<div
									className={`flex items-center text-xs font-poppins font-normal ${
										card.change > 0 ? 'text-[#24BC73]' : 'text-[#F57E77]'
									}`}
								>
									{card.change > 0 ? (
										<TrendingUp className='h-4 w-4 mr-1' />
									) : (
										<TrendingDown className='h-4 w-4 mr-1' />
									)}
									{formatPercentage(card.change)}
								</div>
							</div>
						</div>
					</CardHeader>

					<CardContent className='pt-0 w-full'>
						<div className='flex justify-between w-full'>
							<div className=''>
								<CardTitle className='text-base font-medium font-poppins text-primary'>
									{card.title}
								</CardTitle>
								<h3 className='text-[26px] font-bold text-black mb-1'>
									{card.value}
								</h3>
								<p className='text-xs text-secondary'>{card.period}</p>
							</div>

							{/* Chart */}
							<div>
								<ChartContainer
									config={{
										value: {
											label: 'Value',
											color: card.color,
										},
									}}
									className='h-16 w-full'
								>
									<AreaChart
										data={card.chartData}
										height={64}
										margin={{ left: 0, right: 0, top: 0, bottom: 0 }}
									>
										{/* Gradient for area fill */}
										<defs>
											<linearGradient
												id={`gradient-${index}`}
												x1='0'
												y1='0'
												x2='0'
												y2='1'
											>
												<stop
													offset='0%'
													stopColor={card.color}
													stopOpacity={0.7}
												/>
												<stop
													offset='100%'
													stopColor={card.color}
													stopOpacity={0.05}
												/>
											</linearGradient>
										</defs>

										{/* Tooltip */}
										<ChartTooltip
											content={<ChartTooltipContent indicator='line' />}
										/>

										{/* Chart line/area */}
										<Area
											dataKey='value'
											type='monotone'
											fill={`url(#gradient-${index})`}
											stroke={card.color}
											strokeWidth={2}
											dot={({ index: i, ...props }) =>
												i === 0 || i === card.chartData.length - 1 ? (
													<circle
														cx={props.cx}
														cy={props.cy}
														r={4}
														fill={card.color}
														stroke='white'
														strokeWidth={1}
													/>
												) : (
													<circle
														cx={props.cx}
														cy={props.cy}
														r={0}
														fill='transparent'
													/>
												)
											}
										/>
									</AreaChart>
								</ChartContainer>
							</div>
						</div>
					</CardContent>
				</Card>
			))}
		</div>
	);
}
