import { Providers } from '@//app/providers';
import { Footer } from '@//components/layout/footer';
import { Header } from '@//components/layout/header/header';
import { Main } from '@//components/layout/main';
import { Toaster } from '@//components/ui/toaster';
import { generateStaticParams } from '@//lib/dictionaries/static-params';
import { Inter } from 'next/font/google';
import '../globals.css';

const inter = Inter({ subsets: ['latin'] });

export { generateStaticParams };

const rtlLanguages = ['ar', 'ma'];

export default function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  const isRtl = rtlLanguages.includes(params.lang);

  return (
    <html
      lang={params.lang}
      dir={isRtl ? 'rtl' : 'ltr'}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="../../assets/images/logo.png" type="image/png" />
      </head>
      <body
        className={`${inter.className} antialiased`}
        suppressHydrationWarning
      >
        <Providers defaultTheme="system" enableSystem>
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
