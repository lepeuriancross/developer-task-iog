// Component: Card

// Imports
import { classNames } from '@/lib/utils';
import Link from 'next/link';
import Image from 'next/image';
import Button from '@/components/singles/Button/Button';

// Types
export interface CardProps extends Card {
	image?: Image;
	title?: string;
	body?: string;
	button?: Button;
	className?: string;
}

// Component
export default function Card(props: CardProps) {
	const { image, title, body, button, className } = props;

	return (
		<div
			className={classNames(
				'card flex flex-col justify-stretch rounded-xl overflow-hidden shadow-lg bg-white text-black',
				className
			)}
		>
			<div className="card__image relative">
				<div className="card__image-spacer relative z-10 w-full pt-[50%]" />
				{image && (
					<Image
						className="card__image-img absolute z-20 top-0 left-0 w-full h-full object-cover object-center"
						src={image.src}
						width={image.width}
						height={image.height}
						alt={image.alt ?? ''}
					/>
				)}
			</div>
			<div className="card__info p-8 space-y-4">
				{title && (
					<h3 className="card__title font-base text-[24px] leading-[28.8px]">
						{title}
					</h3>
				)}
				{body && (
					<div
						className="section__body font-base text-[16px] leading-[22.4px]"
						dangerouslySetInnerHTML={{
							__html: body,
						}}
					/>
				)}
			</div>
			{button && (
				<div className="card__buttons inline-flex flex-col justify-end px-8 pb-8 space-y-4 grow">
					<Link href={button.href ?? '#'} target={button.target}>
						<Button {...button} />
					</Link>
				</div>
			)}
		</div>
	);
}
