'use client';

import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

export type Column<T> = {
	key: keyof T | string;
	label: string;
	hidden?: boolean;
	render?: (item: T) => ReactNode;
	className?: string;
};

type DataTableProps<T> = {
	columns: Column<T>[];
	data: T[];
	rowKey: (item: T) => string | number;
};

export function DataTable<T>({ columns, data, rowKey }: DataTableProps<T>) {
	const visibleColumns = columns.filter((col) => !col.hidden);

	return (
		<div className='overflow-x-auto'>
			<table className='w-full'>
				<thead className='border-b border-gray-200 bg-efandex-gray-50'>
					<tr>
						{visibleColumns.map((column) => (
							<th
								key={String(column.key)}
								className={cn(
									'text-left p-4 font-medium text-efandex-gray-normal text-xs',
									column.className,
								)}
							>
								{column.label}
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{data.map((item) => (
						<tr
							key={rowKey(item)}
							className='border-b border-gray-100 hover:bg-gray-50'
						>
							{visibleColumns.map((column) => (
								<td
									key={String(column.key)}
									className='p-4 text-efandex-gray-500 text-sm'
								>
									{column.render
										? column.render(item)
										: (item as any)[column.key]}
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
