// Download URLs are sourced live from the index published on `main`, so the
// docs never need a version bump — they always reflect the latest release.
//
// Canonical raw host (raw.githubusercontent.com) is used directly instead of
// the github.com/.../raw/... redirect to keep the cross-origin fetch simple.
export const INDEX_URL = 'https://raw.githubusercontent.com/projectqai/hydris/main/index.json';

export interface HydrisIndex {
	hydris_version: string;
	distribution: Record<string, string>;
}

// Fallback while the index is loading or if the fetch fails.
export const RELEASES_URL = 'https://github.com/projectqai/hydris/releases/latest';

export async function fetchIndex(): Promise<HydrisIndex> {
	const res = await fetch(INDEX_URL);
	if (!res.ok) throw new Error(`Failed to fetch ${INDEX_URL}: ${res.status}`);
	return res.json();
}
