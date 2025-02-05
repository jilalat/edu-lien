import { routes } from '@/config/routes';
import { getDictionary } from '@/lib/dictionary';
import { redirect } from 'next/navigation';
import { generateStaticParams } from '@/lib/dictionaries/static-params';

export { generateStaticParams };

export default async function ParentDashboard({
  params: { lang },
}: {
  params: { lang: string };
}) {
  // TODO: Replace with actual auth check
  const isParent = false;

  if (!isParent) {
    redirect(routes.home(lang));
  }

  const dict = await getDictionary(lang);

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">{dict.parentPage.title}</h1>
      <p className="text-muted-foreground mb-8">
        {dict.parentPage.description}
      </p>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="p-6 bg-white rounded-lg shadow dark:bg-gray-800">
          <h2 className="text-xl font-semibold mb-4">
            {dict.parentPage.sections.progress}
          </h2>
        </div>
        <div className="p-6 bg-white rounded-lg shadow dark:bg-gray-800">
          <h2 className="text-xl font-semibold mb-4">
            {dict.parentPage.sections.communications}
          </h2>
        </div>
        <div className="p-6 bg-white rounded-lg shadow dark:bg-gray-800">
          <h2 className="text-xl font-semibold mb-4">
            {dict.parentPage.sections.events}
          </h2>
        </div>
      </div>
    </div>
  );
}
