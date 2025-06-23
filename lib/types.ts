export interface User {
	id: string;
	name: string;
	email: string;
	category: 'Guest' | 'Host';
	joinDate: string;
	status: 'pending' | 'approved' | 'declined';
}

export interface Booking {
	id: string;
	guestName: string;
	status: 'Completed' | 'In Progress' | 'Cancelled';
	price: number;
	capacity: number;
	duration: string;
	checkIn: string;
	checkOut: string;
}

export interface DashboardStats {
	activeUsers: {
		count: number;
		change: number;
		period: string;
	};
	totalProperties: {
		count: string;
		change: number;
		period: string;
	};
	totalRevenue: {
		amount: number;
		change: number;
		period: string;
	};
}
