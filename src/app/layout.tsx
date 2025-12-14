import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';

import '../styles/globals.css';

const manrope = Manrope({
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-manrope',
  display: 'swap',
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  title: 'Стоматология «Премьера»',
  description: 'Стоматологическая клиника «Премьера»',
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ru' className={manrope.variable}>
      <body className='antialiased'>{children}</body>
    </html>
  );
}
