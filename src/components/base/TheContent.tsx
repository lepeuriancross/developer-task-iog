export type TheContentProps = {
	content: Content;
};

export default function TheContent(props: TheContentProps) {
	const { content } = props;

	return (
		<>
			{content.sections &&
				content.sections.length > 0 &&
				content.sections.map((section, s) => (
					<div key={`the-content-section-${s}`}>[{section._type}]</div>
				))}
		</>
	);
}
