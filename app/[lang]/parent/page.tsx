import { getDictionary } from '@/lib/dictionary';
import { redirect } from 'next/navigation';

export async function generateStaticParams() {
  return [
    { lang: 'en' },
    { lang: 'fr' },
    { lang: 'ar' },
    { lang: 'es' },
    { lang: 'ma' },
  ];
}

export default async function ParentDashboard({
  params: { lang },
}: {
  params: { lang: string };
}) {
  // TODO: Replace with actual auth check
  const isParent = false;

  if (!isParent) {
    redirect(`/${lang}`);
  }

  const dict = await getDictionary(lang);

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">Parent Dashboard</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="p-6 bg-white rounded-lg shadow dark:bg-gray-800">
          <h2 className="text-xl font-semibold mb-4">Children Progress</h2>
          {/* Add children progress tracking */}
        </div>
        <div className="p-6 bg-white rounded-lg shadow dark:bg-gray-800">
          <h2 className="text-xl font-semibold mb-4">Communications</h2>
          {/* Add messaging system */}
        </div>
        <div className="p-6 bg-white rounded-lg shadow dark:bg-gray-800">
          <h2 className="text-xl font-semibold mb-4">Events</h2>
          {/* Add school events calendar */}
        </div>
      </div>
    </div>
  );
}
