import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'The blog',
  description: 'Essa é a descrição do site',
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
