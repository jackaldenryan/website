import '@/css/prism.css';
import '@/css/tailwind.css';
import '@fontsource/mukta';

import Header from '@/components/Header';
import LenisProvider from '@/components/Providers/LenisProvider';
import ThemeProvider from '@/components/Providers/ThemeProvider';

export const metadata = {
  title: 'Jack Ryan',
  description: 'Stanford graduate in Math and Computer Science.',
  metadataBase: new URL('https://cs.stanford.edu/~ryanjack/'),
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* <link rel="apple-touch-icon" sizes="76x76" href="/static/favicons/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/static/favicons/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/static/favicons/favicon.ico" /> */}
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href={`/~ryanjack/static/favicons/favicon.ico`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`/~ryanjack/static/favicons/favicon.ico`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`/~ryanjack/static/favicons/favicon.ico`}
        />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="theme-color" content="#000000" />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      </head>
      <body className="bg-white text-black antialiased dark:bg-black dark:text-white">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Header />
          <LenisProvider>
            <main>{children}</main>
          </LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
