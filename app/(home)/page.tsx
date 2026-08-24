import { redirect } from 'next/navigation';

// The marketing landing lives on project-q.ai/hydris; the docs root just
// forwards there so this URL isn't a dead end.
export default function HomePage() {
	redirect('/docs');
}
