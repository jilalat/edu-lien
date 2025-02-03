import { Inter } from 'next/font/google';
import { Header } from '@/components/layout/header/header';
import { Providers } from '../providers';
import { Toaster } from '@/components/ui/toaster';
import '../globals.css';
import { Footer } from '@/components/layout/footer';
import { Main } from '@/components/layout/main';

const inter = Inter({ subsets: ['latin'] });

export async function generateStaticParams() {
  return [
    { lang: 'en' },
    { lang: 'fr' },
    { lang: 'ar' },
    { lang: 'es' },
    { lang: 'ma' },
  ];
}

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
