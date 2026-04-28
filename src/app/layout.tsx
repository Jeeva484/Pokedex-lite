import type { Metadata } from 'next';
import { PokemonProvider } from '@/context/PokemonContext';
import './globals.css';

export const metadata: Metadata = {
  title: 'Pokédex Lite',
  description: 'A lightweight Pokédex app built with Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <PokemonProvider>
          {children}
        </PokemonProvider>
      </body>
    </html>
  );
}
