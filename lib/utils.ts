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

export const generateChartData = (isPositive: boolean, baseValue = 100) => {
	const multipliers = [
		0.4, 0.48, 0.55, 0.62, 1.65, 1.9, 1.94, 1.99, 2.0, 2.55, 2.99, 3.3,
	];

	const values = multipliers.map((m) => baseValue * (isPositive ? m : 4 - m));

	const months = [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'Jun',
		'Jul',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
		'Dec',
	];

	return months.map((label, index) => ({
		label,
		value: values[index],
	}));
};
