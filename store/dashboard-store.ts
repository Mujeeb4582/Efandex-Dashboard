import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { DashboardState } from '@/lib/types';
import { mockStats, mockBookings, mockUsers } from '@/mock/data';

export const useDashboardStore = create<DashboardState>()(
	persist(
		(set) => ({
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
						user.id === userId
							? { ...user, status: 'approved' as const }
							: user,
					),
				})),

			declineUser: (userId) =>
				set((state) => ({
					users: state.users.map((user) =>
						user.id === userId
							? { ...user, status: 'declined' as const }
							: user,
					),
				})),

			updateBookingStatus: (bookingId, status) =>
				set((state) => ({
					bookings: state.bookings.map((booking) =>
						booking.id === bookingId ? { ...booking, status } : booking,
					),
				})),
		}),
		{
			name: 'dashboard-store', // 🔐 key for localStorage
			partialize: (state) => ({
				stats: state.stats,
				bookings: state.bookings,
				users: state.users,
				selectedDate: state.selectedDate,
			}),
		},
	),
);
