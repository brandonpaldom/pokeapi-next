import Head from 'next/head';
import { useRouter } from 'next/router';
import { Navbar } from '../ui';

interface LayoutProps {
  children: React.ReactNode;
  title: string;
}

const origin = typeof window === 'undefined' ? '' : window.location.origin;

export function Layout({ children, title }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title || 'Pokemon App'}</title>
        <meta name="author" content="Brandon Palmeros" />

        <meta property="og:title" content={`Información sobre ${title}`} />
        <meta
          property="og:description"
          content={`Esta es la página sobre ${title}`}
        />
        <meta property="og:image" content={`${origin}/images/banner.png`} />
      </Head>

      <Navbar />

      <main
        style={{
          padding: '0.5rem 1rem',
        }}
      >
        {children}
      </main>
    </>
  );
}
