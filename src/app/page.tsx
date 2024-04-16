import { staticHome } from '@/data/content';
import TheContent from '@/components/base/TheContent';

export default function Home() {
	// Fetch content (using static placeholder for now)
	const content = staticHome;

	return (
		<main className="flex min-h-screen flex-col items-center justify-center p-24">
			<TheContent content={content} />
		</main>
	);
}
