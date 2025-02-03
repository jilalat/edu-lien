import { FeaturesSection } from '@/components/home/features-section';
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
    redirect(`/${lang}/${userRole}`);
  }

  return (
    <div className="flex flex-col">
      <FeaturesSection dict={dict.homePage} />
    </div>
  );
}
