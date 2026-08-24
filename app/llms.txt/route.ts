import { source } from '@/lib/source';

export const revalidate = false;

export async function GET() {
  const pages = source.getPages();

  const lines = [
    '# Hydris',
    '',
    '> API-first coordination for sensors, assets, and mission systems.',
    '',
    '## Docs',
    '',
    ...pages.map((page) => `- [${page.data.title}](${page.url})`),
    '',
    '## Full docs for LLMs',
    '',
    '- [/llms-full.txt](/llms-full.txt)',
  ];

  return new Response(lines.join('\n'));
}
