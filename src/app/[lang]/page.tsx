import { FeaturesSection } from '@//components/home/features-section';
import { routes } from '@//config/routes';
import { getDictionary } from '@//lib/dictionary';
import { redirect } from 'next/navigation';
import { generateStaticParams } from '@//lib/dictionaries/static-params';

export { generateStaticParams };

export default async function Home({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const dict = await getDictionary(lang);

  // TODO: Replace with actual auth check
  const isLoggedIn = false;
  const userRole = null;

  if (isLoggedIn && userRole) {
    redirect(routes.roleBasedRoute(lang, userRole));
  }

  return (
    <div className="flex flex-col">
      <FeaturesSection dict={dict.homePage} />
    </div>
  );
}
