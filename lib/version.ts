// Single source of truth for the current Hydris release.
// Bump this on each release; every download link derives from it.
export const VERSION = 'v0.0.23';

const BASE = `https://github.com/projectqai/hydris/releases/download/${VERSION}`;

// Asset whose filename carries the version suffix, e.g.
// releaseUrl('hydris-desktop-windows-amd64', 'zip')
//   -> .../download/<VERSION>/hydris-desktop-windows-amd64-<VERSION>.zip
export const releaseUrl = (base: string, ext: string) => `${BASE}/${base}-${VERSION}.${ext}`;

// Asset with a fixed, version-less filename, e.g. releaseFile('app-release.apk')
export const releaseFile = (file: string) => `${BASE}/${file}`;
