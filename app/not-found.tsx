import { generateStaticParams } from '@/lib/dictionaries/static-params';
import Link from 'next/link';

export { generateStaticParams };

export default async function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <h1 className="text-9xl font-bold text-gray-200 dark:text-gray-700">
        404
      </h1>
      <h2 className="text-2xl font-semibold mt-4">teeeet</h2>
      <p className="text-muted-foreground mt-2">toooo</p>
      <Link
        href="/fr"
        className="mt-8 inline-flex items-center justify-center rounded-md bg-primary px-8 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
      >
        back
      </Link>
    </div>
  );
}
