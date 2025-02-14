import { generateStaticParams } from '@/lib/dictionaries/static-params';
import { getDictionary } from '@/lib/dictionary';

export { generateStaticParams };

export default async function Invoice({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const dict = await getDictionary(lang);

  return (
    <div className="container py-8 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">{dict.invoicePage.title}</h1>
        <p className="text-muted-foreground">{dict.invoicePage.welcome}</p>
      </div>
    </div>
  );
}
