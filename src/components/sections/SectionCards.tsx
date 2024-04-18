// Component: BlockCards

// Imports
import Card from '@/components/singles/Card/Card';
import AosWrapper from '@/components/utility/Animation/AosWrapper';

// Component
export default function SectionCards(props: BlockCards) {
	const { cards = [] } = props;

	return (
		<section className="section w-full relative py-24 overflow-hidden">
			<div className="section__bg absolute z-10 top-0 left-0 w-full h-full bg-gradient-to-br from-blue to-orange-light" />
			<div className="section__container relative z-20 px-6">
				<AosWrapper
					className="section__row grid grid-cols-1 container w-full max-w-screen-xl mx-auto gap-12 lg:grid-cols-3"
					animation="fade-up"
					duration={0.5}
					stagger={0.1}
				>
					{cards.map((card, c) => (
						<div
							key={`section-cards-card-${c}`}
							className="section__col h-full"
						>
							<Card className="h-full" {...card} />
						</div>
					))}
				</AosWrapper>
			</div>
		</section>
	);
}
