import '@/assets/styles/globals.css';
import { Footer } from '@/components/layout/footer';
import { Header } from '@/components/layout/header/header';
import { Main } from '@/components/layout/main';
import { Providers } from '@/components/providers';
import { Toaster } from '@/components/ui/toaster';
import { generateStaticParams } from '@/lib/dictionaries/static-params';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export { generateStaticParams };

export default function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  return (
    <html lang={params.lang} suppressHydrationWarning>
      <head>
        <link rel="icon" href="../../assets/images/logo.png" type="image/png" />
      </head>
      <body
        className={`${inter.className} antialiased`}
        suppressHydrationWarning
      >
        <Providers>
          <div className="relative min-h-screen flex flex-col">
            <Header lang={params.lang} />
            <Main>{children}</Main>
            <Footer lang={params.lang} />
          </div>
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
