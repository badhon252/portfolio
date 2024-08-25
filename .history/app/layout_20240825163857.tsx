import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Khalid Hossain | Web Developer',
  description:
    'Passionate Software Engineer with expertise in JavaScript and Python, specializing in crafting high-quality web applications. Proficient in Next.js for building efficient andscalable solutions. Dedicated to delivering exceptional user experiences throughcutting-edge technologies.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
