import { Hero } from '@/components/home/hero';
import { HowItWorks } from '@/components/home/how-it-works';
import { Features } from '@/components/home/features';
import { Testimonials } from '@/components/home/testimonials';
import { Templates } from '@/components/home/templates';
import { generateStaticParams } from '@/helpers/static-params';

export { generateStaticParams };

export default async function Home({
  params: { lang },
}: {
  params: { lang: string };
}) {
  return (
    <>
      <Hero lang={lang} />
      <HowItWorks lang={lang} />
      <Features lang={lang} />
      <Testimonials lang={lang} />
      <Templates lang={lang} />
    </>
  );
}
