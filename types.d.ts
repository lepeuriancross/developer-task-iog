// Global Types

// Data
type Content = {
	sections?: (SectionHero | SectionCards)[];
};

type SectionHero = {
	_type: 'blockHero';
	image?: Image;
	title?: string;
	subtitle?: string;
	body?: string;
	buttons?: Button[];
};

type SectionCards = {
	_type: 'blockCards';
	cards?: Card[];
};

type Button = {
	_type: 'button';
	name?: string;
	href?: string;
	target?: '_self' | '_blank';
	color?: 'primary' | 'secondary';
};

type Image = {
	src: string;
	width?: number;
	height?: number;
	alt?: string;
};

type Card = {
	_type: 'card';
	image?: Image;
	title?: string;
	body?: string;
	button?: Button;
};
