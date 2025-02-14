import { FeaturesSection } from '@/components/home/features-section';
import { generateStaticParams } from '@/lib/dictionaries/static-params';
import { getDictionary } from '@/lib/dictionary';

export { generateStaticParams };

export default async function Home({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const dict = await getDictionary(lang);

  return (
    <div className="flex flex-col">
      <FeaturesSection dict={dict.homePage} />
    </div>
  );
}
