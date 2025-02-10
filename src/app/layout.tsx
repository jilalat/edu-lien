import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'EduLien',
  description:
    'Educational Platform for Students, Schools, Parents, and Teachers',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}