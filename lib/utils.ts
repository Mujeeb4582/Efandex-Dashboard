import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function formatCurrency(amount: number): string {
	return new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
		notation: 'compact',
		compactDisplay: 'short',
		maximumFractionDigits: 1,
	}).format(amount);
}

export function formatNumber(num: number): string {
	if (num >= 1000) {
		return `${(num / 1000).toFixed(0)}k+`;
	}
	return num.toString();
}

export function formatPercentage(value: number): string {
	return `${value > 0 ? '+' : ''}${value.toFixed(2)}%`;
}
