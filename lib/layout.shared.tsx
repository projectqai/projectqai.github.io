import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import Image from 'next/image';

export function baseOptions(): BaseLayoutProps {
	return {
		nav: {
			title: (
				<Image
					src="/logo.png"
					alt="Logo"
					width={40}
					height={40}
					className="w-10 h-10"
				/>
			),
			transparentMode: 'none',
		},
		links: [],
		themeSwitch: {
			mode: 'light-dark-system',
		},
	};
}
