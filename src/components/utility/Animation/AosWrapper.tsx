// Component: AosWrapper

'use client';

// Imports
import { classNames } from '@/lib/utils';
import { Children, useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Motion
const fadeXDistance = 100;
const fadeYDistance = 100;
const animFade = {
	initial: {
		opacity: 0,
	},
	animate: (params: {
		idx: number;
		duration: number;
		delay: number;
		stagger: number;
	}) => ({
		opacity: 1,
		transition: {
			duration: params.duration,
			ease: 'easeInOut',
			delay: params.delay + params.stagger * params.idx,
		},
	}),
	exit: (params: {
		idx: number;
		duration: number;
		delay: number;
		stagger: number;
	}) => ({
		opacity: 0,
		transition: {
			duration: params.duration,
			ease: 'easeInOut',
			delay: params.delay + params.stagger * params.idx,
		},
	}),
};
const animFadeUp = {
	initial: {
		opacity: 0,
		y: `${fadeYDistance}px`,
	},
	animate: (params: {
		idx: number;
		duration: number;
		delay: number;
		stagger: number;
	}) => ({
		opacity: 1,
		y: 0,
		transition: {
			duration: params.duration,
			ease: 'easeInOut',
			delay: params.delay + params.stagger * params.idx,
		},
	}),
	exit: (params: {
		idx: number;
		duration: number;
		delay: number;
		stagger: number;
	}) => ({
		opacity: 0,
		y: `${fadeYDistance}px`,
		transition: {
			duration: params.duration,
			ease: 'easeInOut',
			delay: params.delay + params.stagger * params.idx,
		},
	}),
};
const animFadeRight = {
	initial: {
		opacity: 0,
		x: `-${fadeXDistance}px`,
	},
	animate: (params: {
		idx: number;
		duration: number;
		delay: number;
		stagger: number;
	}) => ({
		opacity: 1,
		x: 0,
		transition: {
			duration: params.duration,
			ease: 'easeInOut',
			delay: params.delay + params.stagger * params.idx,
		},
	}),
	exit: (params: {
		idx: number;
		duration: number;
		delay: number;
		stagger: number;
	}) => ({
		opacity: 0,
		x: `-${fadeXDistance}px`,
		transition: {
			duration: params.duration,
			ease: 'easeInOut',
			delay: params.delay + params.stagger * params.idx,
		},
	}),
};
const animFadeDown = {
	initial: {
		opacity: 0,
		y: `-${fadeYDistance}px`,
	},
	animate: (params: {
		idx: number;
		duration: number;
		delay: number;
		stagger: number;
	}) => ({
		opacity: 1,
		y: 0,
		transition: {
			duration: params.duration,
			ease: 'easeInOut',
			delay: params.delay + params.stagger * params.idx,
		},
	}),
	exit: (params: {
		idx: number;
		duration: number;
		delay: number;
		stagger: number;
	}) => ({
		opacity: 0,
		y: `-${fadeYDistance}px`,
		transition: {
			duration: params.duration,
			ease: 'easeInOut',
			delay: params.delay + params.stagger * params.idx,
		},
	}),
};
const animFadeLeft = {
	initial: {
		opacity: 0,
		x: `${fadeXDistance}px`,
	},
	animate: (params: {
		idx: number;
		duration: number;
		delay: number;
		stagger: number;
	}) => ({
		opacity: 1,
		x: 0,
		transition: {
			duration: params.duration,
			ease: 'easeInOut',
			delay: params.delay + params.stagger * params.idx,
		},
	}),
	exit: (params: {
		idx: number;
		duration: number;
		delay: number;
		stagger: number;
	}) => ({
		opacity: 0,
		x: `${fadeXDistance}px`,
		transition: {
			duration: params.duration,
			ease: 'easeInOut',
			delay: params.delay + params.stagger * params.idx,
		},
	}),
};

// Types
export type AosWrapperProps = {
	Tag?: 'div' | 'ul' | 'li';
	animation?: AosAnimation;
	duration?: number;
	delay?: number;
	stagger?: number;
	isActive?: boolean;
	className?: string;
	children?: React.ReactNode;
};
export type AosAnimation =
	| 'fade'
	| 'fade-up'
	| 'fade-down'
	| 'fade-left'
	| 'fade-right';

// Component
export default function AosWrapper(props: AosWrapperProps) {
	const {
		animation = 'fade-up',
		duration = 0.8,
		delay = 0,
		stagger = 0,
		isActive = true,
		className,
		children,
	} = props;

	const parentEl = useRef<HTMLDivElement>(null);
	const scrollY = useRef<number>(0);
	const positionY = useRef<number>(0);

	const [isVisable, setIsVisable] = useState<boolean>(false);

	useEffect(() => {
		const handleScrollResize = () => {
			if (!parentEl.current) return;
			scrollY.current = window.scrollY;
			positionY.current = parentEl.current.getBoundingClientRect().top;

			const windowHeight = window.innerHeight * 0.9;

			const isInView = positionY.current - windowHeight < 0;

			setIsVisable(isActive && isInView);
		};

		window.addEventListener('scroll', handleScrollResize);
		window.addEventListener('resize', handleScrollResize);

		handleScrollResize();

		return () => {
			window.removeEventListener('scroll', handleScrollResize);
			window.removeEventListener('resize', handleScrollResize);
		};
	}, [isActive]);

	const variants =
		animation === 'fade-up'
			? animFadeUp
			: animation === 'fade-right'
			? animFadeRight
			: animation === 'fade-down'
			? animFadeDown
			: animation === 'fade-left'
			? animFadeLeft
			: animFade;

	return (
		<div
			ref={parentEl}
			className={classNames(`aos-wrapper--${animation}`, className)}
		>
			{Children.map(children, (child, c) => (
				<motion.div
					key={`aos-wrapper-child-${c}`}
					initial="initial"
					animate={isVisable ? 'animate' : 'initial'}
					exit="exit"
					variants={variants}
					custom={{
						idx: c,
						duration,
						delay,
						stagger,
					}}
				>
					{child}
				</motion.div>
			))}
		</div>
	);
}
