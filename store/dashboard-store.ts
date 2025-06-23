import { create } from 'zustand';
import { User, Booking, DashboardStats } from '@/lib/types';

interface DashboardState {
	stats: DashboardStats;
	bookings: Booking[];
	users: User[];
	currentPage: number;
	searchQuery: string;
	selectedDate: string;

	// Actions
	setSearchQuery: (query: string) => void;
	setCurrentPage: (page: number) => void;
	setSelectedDate: (date: string) => void;
	approveUser: (userId: string) => void;
	declineUser: (userId: string) => void;
	updateBookingStatus: (bookingId: string, status: Booking['status']) => void;
}

const mockStats: DashboardStats = {
	activeUsers: { count: 3632, change: 10.66, period: 'Overall last month' },
	totalProperties: {
		count: '10k+',
		change: -10.66,
		period: 'Overall last month',
	},
	totalRevenue: { amount: 900000, change: -10.5, period: 'Overall this month' },
};

const mockBookings: Booking[] = [
	{
		id: '1',
		guestName: 'Olivia Daddario',
		status: 'Completed',
		price: 633,
		capacity: 60,
		duration: '24 May - 28 May 2024',
		checkIn: '2024-05-24',
		checkOut: '2024-05-28',
	},
	{
		id: '2',
		guestName: 'Jack Paul',
		status: 'In Progress',
		price: 231,
		capacity: 60,
		duration: '24 May - 28 May 2024',
		checkIn: '2024-05-24',
		checkOut: '2024-05-28',
	},
	{
		id: '3',
		guestName: 'Mr Aalexandar',
		status: 'Cancelled',
		price: 260,
		capacity: 60,
		duration: '24 May - 28 May 2024',
		checkIn: '2024-05-24',
		checkOut: '2024-05-28',
	},
	{
		id: '4',
		guestName: 'Arnold Archer',
		status: 'Completed',
		price: 900,
		capacity: 60,
		duration: '24 May - 28 May 2024',
		checkIn: '2024-05-24',
		checkOut: '2024-05-28',
	},
];

const mockUsers: User[] = [
	{
		id: '1',
		name: 'Olivia Daddario',
		email: 'Userefandax1234@gmail.com',
		category: 'Guest',
		joinDate: 'Jan 13, 2022',
		status: 'pending',
	},
	{
		id: '2',
		name: 'Jack Paul',
		email: 'Userefandax1234@gmail.com',
		category: 'Host',
		joinDate: 'Jan 12, 2022',
		status: 'pending',
	},
	{
		id: '3',
		name: 'Mr Aalexandar',
		email: 'Userefandax1234@gmail.com',
		category: 'Guest',
		joinDate: 'Jan 12, 2022',
		status: 'pending',
	},
	{
		id: '4',
		name: 'Arnold Archer',
		email: 'Userefandax1234@gmail.com',
		category: 'Host',
		joinDate: 'Jan 12, 2022',
		status: 'pending',
	},
	{
		id: '5',
		name: 'Jack Paul',
		email: 'Userefandax1234@gmail.com',
		category: 'Guest',
		joinDate: 'Jan 12, 2022',
		status: 'pending',
	},
];

export const useDashboardStore = create<DashboardState>((set) => ({
	stats: mockStats,
	bookings: mockBookings,
	users: mockUsers,
	currentPage: 1,
	searchQuery: '',
	selectedDate: 'Today',

	setSearchQuery: (query) => set({ searchQuery: query }),
	setCurrentPage: (page) => set({ currentPage: page }),
	setSelectedDate: (date) => set({ selectedDate: date }),

	approveUser: (userId) =>
		set((state) => ({
			users: state.users.map((user) =>
				user.id === userId ? { ...user, status: 'approved' as const } : user,
			),
		})),

	declineUser: (userId) =>
		set((state) => ({
			users: state.users.map((user) =>
				user.id === userId ? { ...user, status: 'declined' as const } : user,
			),
		})),

	updateBookingStatus: (bookingId, status) =>
		set((state) => ({
			bookings: state.bookings.map((booking) =>
				booking.id === bookingId ? { ...booking, status } : booking,
			),
		})),
}));
