import '@/app/global.css';
import type { Viewport } from 'next';
import { RootProvider } from 'fumadocs-ui/provider';
import { Inter,Geist_Mono } from 'next/font/google';
import { baseUrl, createMetadata } from '@/lib/metadata';


export const metadata = createMetadata({
  title: {
    template: '%s | NextWiki',
    default: 'NextWiki',
  },
  description: 'The Next.js framework for building documentation sites',
  metadataBase: baseUrl,
});


const inter = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
});
const mono = Geist_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
});

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#0A0A0A' },
    { media: '(prefers-color-scheme: light)', color: '#fff' },
  ],
};
export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="zh" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
        
      </body>
    </html>
  );
}
