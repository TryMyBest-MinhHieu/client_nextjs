'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const containerClasses =
	'md:gap-[102px] flex flex-col-reverse md:flex-row justify-center items-center min-h-[524px] md:min-h-screen';
const textContainerClasses =
	'self-stretch grow shrink basis-0 flex-col justify-start items-start gap-4 flex w-full';
const textStyle404 =
	'text-[#c7102d] text-3xl md:text-4xl font-bold leading-[38px] md:leading-[48px] text-center md:text-left';
const buttonClasses =
	'w-64 h-12 px-6 py-3 bg-[#c7102d] rounded-lg justify-center items-center gap-2.5 inline-flex';
const imageContainerClasses = 'w-[286px] h-[286px] md:w-[352px] md:h-[351px]';

// Individual components
const NotFoundText = () => {
	return (
		<div className={textContainerClasses}>
			<div className={textStyle404}>404</div>
			<div className="w-full flex justify-center md:justify-start">
				<Link href="/" className={buttonClasses}>
				</Link>
			</div>
		</div>
	);
};

const NotFoundImage = () => (
	<div className="flex justify-center">
		<div className={imageContainerClasses}>
			<Image src="/404image.png" alt="404 Image" width={352} height={351} />
		</div>
	</div>
);

// const PATH_NAME_LIST: string[] = [
// 	'/forgot-password',
// 	'/sign-up',
// 	'/forgot-password',
// 	'/account',
// 	'/basket',
// 	'/check-payment-status',
// 	'/checkout',
// 	'/combo',
// 	'/half-and-half',
// 	'/info',
// 	'/my-profile',
// 	'/order-tracking',
// 	'/reward',
// 	'/store-location',
// 	'/survey',
// 	'/thankyou',
// ] as const;

export default function NotFoundRoot() {
	// const pathname: string = usePathname();
	// if (!PATH_NAME_LIST.includes(pathname)) {
	// 	return redirect('/');
	// }
	return (
		<div className={containerClasses}>
			<div className="w-[310px] h-[448px] flex-col justify-start items-start gap-4 inline-flex">
				<NotFoundText />
			</div>
			<div className="w-[286px] h-[286px] md:w-[448px] md:h-[448px] flex justify-center">
				<NotFoundImage />
			</div>
		</div>
	);
}
