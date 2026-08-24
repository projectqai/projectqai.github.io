import { Download } from 'lucide-react';

/**
 * Download link for a YAML example in public/examples.
 *
 * The same file is embedded into the page with <include>, so what a reader
 * sees is byte-for-byte what they download.
 */
export function ExampleFile({ file }: { file: string }) {
	return (
		<div className="not-prose -mt-2 mb-6 flex flex-wrap items-center gap-3 text-sm">
			<a
				href={`/examples/${file}`}
				download
				className="inline-flex items-center gap-2 rounded-lg border border-fd-border bg-fd-card px-3 py-1.5 font-medium text-fd-foreground no-underline transition-colors hover:border-fd-primary hover:text-fd-primary"
			>
				<Download className="size-4" />
				{file}
			</a>
			<code className="rounded-lg border border-fd-border bg-fd-muted px-3 py-1.5 text-xs text-fd-muted-foreground">
				hydris ec apply {file}
			</code>
		</div>
	);
}
