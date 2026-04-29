'use client';

import { useEffect, useState } from 'react';

const VERSION = 'v0.0.22';

const platforms = {
	windows: {
		label: 'Download for Windows',
		url: `https://github.com/projectqai/hydris/releases/download/${VERSION}/hydris-desktop-windows-amd64-${VERSION}.zip`,
	},
	mac: {
		label: 'Download for macOS',
		url: `https://github.com/projectqai/hydris/releases/download/${VERSION}/hydris-desktop-macos-arm64-${VERSION}.zip`,
	},
	linux: {
		label: 'Download for Linux',
		url: `https://github.com/projectqai/hydris/releases/download/${VERSION}/hydris-cli-linux-amd64-${VERSION}.tar.xz`,
	},
	android: {
		label: 'Download for Android',
		url: `https://github.com/projectqai/hydris/releases/download/${VERSION}/app-release.apk`,
	},
} as const;

type Platform = keyof typeof platforms;

function detectPlatform(): Platform {
	const ua = navigator.userAgent.toLowerCase();
	if (ua.includes('android')) return 'android';
	if (ua.includes('win')) return 'windows';
	if (ua.includes('mac')) return 'mac';
	return 'linux';
}

export function DownloadButton() {
	const [platform, setPlatform] = useState<Platform | null>(null);

	useEffect(() => {
		setPlatform(detectPlatform());
	}, []);

	const info = platform ? platforms[platform] : platforms.linux;
	const label = platform ? info.label : 'Download HYDRIS';

	return (
		<div className="flex flex-col items-start gap-2">
			<a
				href={info.url}
				className="inline-flex items-center gap-2 px-8 py-3 bg-green-500 hover:bg-green-400 text-black rounded-lg font-semibold transition-all duration-200 shadow-lg shadow-green-500/30 hover:shadow-green-500/50"
			>
				{label}
				<svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
					<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
				</svg>
			</a>
			<a
				href="/docs"
				className="text-sm text-gray-500 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-500 transition-colors ml-1"
			>
				Other platforms &amp; options
			</a>
		</div>
	);
}
