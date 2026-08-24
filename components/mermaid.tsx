'use client';

import { useEffect, useState } from 'react';
import mermaid from 'mermaid';

mermaid.initialize({ startOnLoad: false, theme: 'dark' });

const INIT_DIRECTIVE = `%%{init: {"gantt": {"fontSize": 18, "sectionFontSize": 18, "barHeight": 28}}}%%\n`;

export function Mermaid({ chart }: { chart: string }) {
  const [svg, setSvg] = useState('');

  useEffect(() => {
    const id = `mermaid-${Math.random().toString(36).slice(2)}`;
    mermaid.render(id, INIT_DIRECTIVE + chart).then(({ svg }) => {
      setSvg(svg.replaceAll('font-size="10"', 'font-size="16"'));
    });
  }, [chart]);

  return <div dangerouslySetInnerHTML={{ __html: svg }} />;
}
