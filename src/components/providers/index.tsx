'use client';

import { ThemeProvider } from './theme-provider';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider defaultTheme="system" enableSystem>
      {/* <ReduxProvider> */}
      {/* <QueryProvider> */}
      {/* <AuthProvider> */}
      {children}
      {/* </AuthProvider> */}
      {/* </QueryProvider> */}
      {/* </ReduxProvider> */}
    </ThemeProvider>
  );
}
