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

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  return (
    <html lang={params.lang} suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <Providers>
          <div className="flex min-h-screen flex-col">
            <Header lang={params.lang} />
            <main className="flex-1">{children}</main>
            <footer className="border-t">
              <div className="container py-8">
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