// Layout: Root

// Imports
import { staticMetadata } from '@/data/content';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

// Fonts
const inter = Inter({ subsets: ['latin'] });

// Metadata
export const metadata: Metadata = staticMetadata;

// Types
export type RootLayoutProps = {
	children: React.ReactNode;
};

// Component
export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
