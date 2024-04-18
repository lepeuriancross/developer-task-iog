// Component: SectionHero

// Imports
import Link from 'next/link';
import Image from 'next/image';
import AosWrapper from '@/components/utility/Animation/AosWrapper';
import Button from '@/components/singles/Button/Button';

// Component
export default function SectionHero(props: BlockHero) {
	const { title, subtitle, body, buttons = [], image } = props;

	return (
		<section className="section relative w-full py-24 overflow-hidden">
			<div className="section__container relative z-20 px-6">
				<div className="section__row grid grid-cols-1 container w-full max-w-screen-xl mx-auto gap-y-12 gap-x-20 lg:grid-cols-5">
					<AosWrapper
						className="section__col space-y-5 lg:col-span-3 lg:py-24 lg:space-y-8"
						animation="fade-right"
						stagger={0.1}
					>
						{title && (
							<h1 className="section__title text-xl lg:text-[24px]">{title}</h1>
						)}
						{subtitle && (
							<h2
								className="section__subtitle text-3xl leading-tight lg:text-[42px]"
								dangerouslySetInnerHTML={{
									__html: subtitle,
								}}
							/>
						)}
						{body && (
							<div
								className="section__body text-[16px] leading-[25.6px]"
								dangerouslySetInnerHTML={{
									__html: body,
								}}
							/>
						)}
						{buttons.length > 0 && (
							<div className="section__buttons inline-flex flex-col space-y-4 lg:flex-row lg:space-y-0 lg:space-x-4">
								{buttons.map((button, b) => (
									<Link
										key={`section-hero-button-${b}`}
										href={button.href ?? '#'}
										target={button.target}
									>
										<Button {...button} />
									</Link>
								))}
							</div>
						)}
					</AosWrapper>
					<AosWrapper
						className="section__col lg:col-span-2"
						animation="fade"
						duration={1}
					>
						<div className="section__image relative w-full h-full rounded-xl overflow-hidden lg:absolute lg:top-1/2 lg:left-[60vw] lg:transform lg:-translate-y-1/2 lg:w-[40vw] lg:rounded-r-none">
							<div className="section__image-spacer relative z-10 w-full pt-[60%]" />
							{image && (
								<Image
									className="section__image-img absolute top-0 left-0 w-full h-full object-cover object-center"
									src={image.src}
									width={image.width}
									height={image.height}
									alt={image.alt ?? ''}
									priority
								/>
							)}
						</div>
					</AosWrapper>
				</div>
			</div>
		</section>
	);
}
