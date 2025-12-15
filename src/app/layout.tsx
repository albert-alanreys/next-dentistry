import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import { Toaster } from 'react-hot-toast';

import '../styles/globals.css';

import { Footer, Header } from '@/components';

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
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ru' className={manrope.variable}>
      <body className='antialiased'>
        <Header />
        <main>{children}</main>
        <Footer />
        <Toaster
          position='top-right'
          toastOptions={{
            duration: 5000,
            style: {
              background: '#363636',
              color: '#fff',
              fontSize: '1.4rem',
              padding: '1.6rem',
              borderRadius: '0.4rem',
            },
            success: {
              iconTheme: {
                primary: '#b2a487',
                secondary: '#fff',
              },
            },
            error: {
              iconTheme: {
                primary: '#ff6b6b',
                secondary: '#fff',
              },
            },
          }}
        />
      </body>
    </html>
  );
}
