'use client';

import { useEffect, useState } from 'react';
import { fetchIndex, RELEASES_URL } from '@/lib/version';

const platforms = {
	windows: { label: 'Download for Windows', asset: 'hydris-desktop-windows-amd64' },
	mac: { label: 'Download for macOS', asset: 'hydris-desktop-macos-arm64' },
	linux: { label: 'Download for Linux', asset: 'hydris-cli-linux-amd64' },
	android: { label: 'Download for Android', asset: 'hydris-android' },
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
	const [distribution, setDistribution] = useState<Record<string, string>>();

	useEffect(() => {
		setPlatform(detectPlatform());
		fetchIndex()
			.then((i) => setDistribution(i.distribution))
			.catch(() => {});
	}, []);

	const info = platform ? platforms[platform] : platforms.linux;
	const label = platform ? info.label : 'Download HYDRIS';
	const url = distribution?.[info.asset] ?? RELEASES_URL;

	return (
		<div className="flex flex-col items-start gap-2">
			<a
				href={url}
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
