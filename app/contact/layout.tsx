import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact – Iets met AI',
  description: 'Neem contact op met Milan van Bruggen. Stel je vraag over AI in jouw organisatie of maak een afspraak.',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

