// Component: BlockCards

export default function SectionCards(props: BlockCards) {
	const { cards = [] } = props;

	return (
		<section className="section">
			<div className="section__container">
				<div className="section__row grid grid-cols-1 lg:grid-cols-3">
					{cards.map((card, c) => (
						<div key={`section-cards-card-${c}`} className="section__col"></div>
					))}
				</div>
			</div>
		</section>
	);
}
