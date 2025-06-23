import { StatsCards } from '@/components/dashboard/stats-cards';
import { BookingsTable } from '@/components/dashboard/bookings-table';
import { UserRegistrations } from '@/components/dashboard/user-registrations';

export default function DashboardPage() {
	return (
		<div className='p-6 font-inter'>
			<StatsCards />
			<BookingsTable />
			<UserRegistrations />
		</div>
	);
}
