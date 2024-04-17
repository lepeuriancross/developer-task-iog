// Data: Static Content

// Imports
import imgHero from '../../public/img/image_placeholder-hero.png';
import imgCard from '../../public/img/image_placeholder-card.png';

// Data
export const staticHome: Content = {
	blocks: [
		{
			_type: 'blockHero',
			title: `Lorem ipsum`,
			subtitle: `<p>Interdum et malesuada fames ac <b>ante ipsum</b> primis in faucibus.</p>`,
			body: `<p>Vivamus turpis sem, vehicula at pellentesque sed, varius nec lectus. Sed ultrices feugiat ullamcorper. Pellentesque id tellus finibus, ultrices purus sit amet, ultricies purus. Proin rhoncus mauris at egestas pretium. Fusce eget libero felis. Quisque eu hendrerit nisl, sed lacinia sem.</p>`,
			buttons: [
				{
					_type: 'button',
					name: `<p>Aliquam rutrum est</p>`,
					href: '#',
					target: '_self',
					color: 'primary',
				},
				{
					_type: 'button',
					name: 'Aliquam rutrum est',
					href: '#',
					target: '_blank',
					color: 'secondary',
				},
			],
			image: {
				src: imgHero.src,
				width: imgHero.width,
				height: imgHero.height,
				alt: 'Placeholder Image',
			},
		},
		{
			_type: 'blockCards',
			cards: [
				{
					_type: 'card',
					image: {
						src: imgCard.src,
						width: imgHero.width,
						height: imgHero.height,
						alt: 'Placeholder Image',
					},
					title: `Lorem ipsum dolor sit amet massa ne`,
					body: `<p>Suspendisse et massa ac ne que lacinia gravida sollici tudin nec metus.</p>`,
					button: {
						_type: 'button',
						name: 'Aliquam rutrum est',
						href: '#',
						target: '_blank',
						color: 'secondary',
					},
				},
				{
					_type: 'card',
					image: {
						src: imgCard.src,
						width: imgHero.width,
						height: imgHero.height,
						alt: 'Placeholder Image',
					},
					title: `Praesent non turpis at ipsum que avida`,
					body: `<p>Suspendisse et massa ac ne que lacinia gravid.</p>`,
					button: {
						_type: 'button',
						name: 'Aliquam rutrum est',
						href: '#',
						target: '_blank',
						color: 'secondary',
					},
				},
				{
					_type: 'card',
					image: {
						src: imgCard.src,
						width: imgHero.width,
						height: imgHero.height,
						alt: 'Placeholder Image',
					},
					title: `Interdum et males uada fames`,
					body: `<p>Suspendisse et avida sollici tudin nec metus.</p>`,
					button: {
						_type: 'button',
						name: 'Aliquam rutrum est',
						href: '#',
						target: '_blank',
						color: 'secondary',
					},
				},
			],
		},
	],
};
