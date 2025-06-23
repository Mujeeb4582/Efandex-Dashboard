'use client';

import { Search, Command } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ReactNode, useEffect, useRef } from 'react';

type TableHeaderProps = {
	title: string;
	searchValue: string;
	onSearchChange: (value: string) => void;
	children?: ReactNode;
};

export function TableHeader({
	title,
	searchValue,
	onSearchChange,
	children,
}: TableHeaderProps) {
	const inputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			const isMac = navigator.platform.toUpperCase().includes('MAC');
			const isCmdF =
				(isMac && e.metaKey && e.key === 'f') ||
				(!isMac && e.ctrlKey && e.key === 'f');

			if (isCmdF) {
				e.preventDefault();
				inputRef.current?.focus();
			}
		};

		window.addEventListener('keydown', handleKeyDown);
		return () => window.removeEventListener('keydown', handleKeyDown);
	}, []);

	return (
		<div className='flex items-center justify-between p-6 border-b border-gray-200'>
			<h2 className='text-lg font-medium text-efandex-gray-900 font-poppins'>
				{title}
			</h2>
			<div className='flex items-center space-x-4'>
				<div className='relative'>
					<Search className='absolute left-3 top-1/2 transform -translate-y-1/2 size-5 text-gray-400' />
					<Input
						ref={inputRef}
						type='text'
						placeholder='Search here...'
						value={searchValue}
						onChange={(e) => onSearchChange(e.target.value)}
						className='pl-10 w-[427px] h-10 placeholder:text-gray-400 font-inter placeholder:text-sm bg-efandex-gray-light focus:outline-none focus-visible:ring-[0px]'
					/>
					<div className='absolute right-3 top-1/2 transform -translate-y-1/2'>
						<Button
							variant='ghost'
							size='icon'
							onClick={() => inputRef.current?.focus()}
							className='text-efandex-gray-400 hover:text-efandex-gray-400'
						>
							<Command className='size-4 text-efandex-gray-400' />F
						</Button>
					</div>
				</div>
				{children}
			</div>
		</div>
	);
}
