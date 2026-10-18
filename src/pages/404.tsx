import Head from 'next/head';
import Link from 'next/link';
import { ui } from '../styles/ui';

export default function NotFound() {
  return (
    <>
      <Head>
        <title>Page not found | Krushna Katore</title>
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center gap-4 px-4 text-center font-mono">
        <p className={`text-6xl font-bold ${ui.heading}`}>404</p>
        <p className={ui.subtext}>This page doesn&apos;t exist.</p>
        <Link href="/" className={`${ui.link} underline underline-offset-4`}>
          Back to the portfolio
        </Link>
      </main>
    </>
  );
}
