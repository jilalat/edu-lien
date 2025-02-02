import { Inter } from 'next/font/google';
import { Header } from '@/components/layout/header';
import { Providers } from '../providers';
import { Toaster } from '@/components/ui/toaster';
import '../globals.css';

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
    <html lang={params.lang} dir={isRtl ? 'rtl' : 'ltr'} suppressHydrationWarning>
      <body className={`${inter.className} antialiased`} suppressHydrationWarning>
        <Providers defaultTheme="system" enableSystem>
          <div className="relative min-h-screen flex flex-col">
            <Header lang={params.lang} />
            <main className="flex-1 container mx-auto px-4 py-8">{children}</main>
            <footer className="border-t bg-background">
              <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
                  <div>
                    <h3 className="text-lg font-semibold">EduLien</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Connecting education worldwide
                    </p>
                  </div>
                </div>
                <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
                  © {new Date().getFullYear()} EduLien. All rights reserved.
                </div>
              </div>
            </footer>
          </div>
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}