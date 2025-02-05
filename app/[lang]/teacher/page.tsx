import { routes } from '@/config/routes';
import { getDictionary } from '@/lib/dictionary';
import { redirect } from 'next/navigation';
import { generateStaticParams } from '@/lib/dictionaries/static-params';

export { generateStaticParams };

export default async function TeacherDashboard({
  params: { lang },
}: {
  params: { lang: string };
}) {
  // TODO: Replace with actual auth check
  const isTeacher = false;

  if (!isTeacher) {
    redirect(routes.home(lang));
  }

  const dict = await getDictionary(lang);

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">{dict.teacherPage.title}</h1>
      <p className="text-muted-foreground mb-8">
        {dict.teacherPage.description}
      </p>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="p-6 bg-white rounded-lg shadow dark:bg-gray-800">
          <h2 className="text-xl font-semibold mb-4">
            {dict.teacherPage.sections.classes}
          </h2>
        </div>
        <div className="p-6 bg-white rounded-lg shadow dark:bg-gray-800">
          <h2 className="text-xl font-semibold mb-4">
            {dict.teacherPage.sections.progress}
          </h2>
        </div>
        <div className="p-6 bg-white rounded-lg shadow dark:bg-gray-800">
          <h2 className="text-xl font-semibold mb-4">
            {dict.teacherPage.sections.resources}
          </h2>
        </div>
      </div>
    </div>
  );
}
