'use client';

import { type ReactNode, useEffect, useState } from 'react';
import { fetchIndex, RELEASES_URL } from '@/lib/version';

// Anchor whose href is resolved at runtime from index.json's `distribution`
// map, keyed by asset name (e.g. "hydris-desktop-windows-amd64").
export function ReleaseLink({ asset, children }: { asset: string; children: ReactNode }) {
	const [url, setUrl] = useState(RELEASES_URL);

	useEffect(() => {
		fetchIndex()
			.then((i) => setUrl(i.distribution[asset] ?? RELEASES_URL))
			.catch(() => setUrl(RELEASES_URL));
	}, [asset]);

	return <a href={url}>{children}</a>;
}
