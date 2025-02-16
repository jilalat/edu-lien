import '@/assets/styles/globals.css';
import { Footer } from '@/components/layouts/footer';
import { Header } from '@/components/layouts/header';
import { Main } from '@/components/layouts/main';
import { languages } from '@/config/dictionaries';
import { generateStaticParams } from '@/helpers/static-params';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

export { generateStaticParams };
const inter = Inter({ subsets: ['latin', 'latin-ext'] });

export const metadata: Metadata = {
  title: 'Multilingual Next.js App',
  description: 'A beautiful multilingual website built with Next.js',
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  const direction =
    languages.find(lang => lang.code === params.lang)?.direction ?? 'ltr';

  return (
    <html lang={params.lang} dir={direction}>
      <body className={inter.className}>
        <Header lang={params.lang} />
        <Main>{children}</Main>
        <Footer lang={params.lang} />
      </body>
    </html>
  );
}
