import { getDictionary } from '@/helpers/getDictionary';
import { generateStaticParams } from '@/lib/dictionaries/static-params';
import langData from './lang.json';

export { generateStaticParams };

export default async function Invoice({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const dict = getDictionary(lang, langData);

  return (
    <div className="container py-8 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">{dict.welcomeMessage}</h1>
        <p className="text-muted-foreground">{dict.description}</p>
      </div>
    </div>
  );
}
