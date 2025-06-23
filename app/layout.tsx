import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import { Sidebar } from '@/components/layout/sidebar';
import { Header } from '@/components/layout/header';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const poppins = Poppins({
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	variable: '--font-poppins',
});

export const metadata: Metadata = {
	title: 'Efandex Dashboard',
	description: 'Professional property management dashboard',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={`${inter.variable} ${poppins.variable}`}>
				<div className='flex h-screen bg-gray-50'>
					<Sidebar />
					<div className='flex-1 flex flex-col overflow-hidden'>
						<Header />
						<main className='flex-1 overflow-auto'>{children}</main>
					</div>
				</div>
			</body>
		</html>
	);
}
