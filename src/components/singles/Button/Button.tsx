// Component: Button

// Imports
import { classNames } from '@/lib/utils';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

// Types
export interface ButtonProps extends Button {
	className?: string;
}

// Component
export default function Button(props: ButtonProps) {
	const { name, target, color, className } = props;

	return (
		<button
			className={classNames(
				'button relative font-semibold text-[16px] leading-[19.36px] cursor-pointer',
				className
			)}
			type="button"
		>
			<div
				className={classNames(
					'button__bg absolute top-0 left-0 w-full h-full rounded-xl',
					color === 'primary' && 'bg-pink',
					color === 'secondary' && 'bg-orange'
				)}
			/>
			<div className="button__container relative z-20 flex justify-center items-center flex-nowrap space-x-2 px-6 py-3">
				{target && target === '_blank' && (
					<span className="button__icon">
						<ArrowTopRightOnSquareIcon className="w-5 h-5" />
					</span>
				)}
				{name && (
					<span
						className="button__name"
						dangerouslySetInnerHTML={{
							__html: name,
						}}
					/>
				)}
			</div>
		</button>
	);
}
