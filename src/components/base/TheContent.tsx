// Component: TheContent

// Imports
import SectionHero from '@/components/sections/SectionHero';
import SectionCards from '@/components/sections/SectionCards';

// Types
export type TheContentProps = {
	content: Content;
};

// Component
export default function TheContent(props: TheContentProps) {
	const { content } = props;

	return (
		<>
			{content.blocks &&
				content.blocks.length > 0 &&
				content.blocks.map((block, s) => (
					<div
						key={`the-content-section-${s}`}
						className="section-wrapper w-full"
					>
						{block._type === 'blockHero' && <SectionHero {...block} />}
						{block._type === 'blockCards' && <SectionCards {...block} />}
					</div>
				))}
		</>
	);
}
