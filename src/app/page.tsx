// Imports
import { staticHome } from '@/data/content';
import TheContent from '@/components/base/TheContent';

// Component
export default function Home() {
	const content = staticHome;

	return (
		<main className="flex min-h-screen flex-col items-center justify-center">
			<TheContent content={content} />
		</main>
	);
}
