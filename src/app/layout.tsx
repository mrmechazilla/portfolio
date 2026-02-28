import type { Metadata } from 'next';
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['300', '400', '500', '600', '700'],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['300', '400', '600', '700'],
});

export const metadata: Metadata = {
  title: "M'hamed Ben Youssef | Senior Software Engineer",
  description:
    'Senior Software Engineer with 4+ years of experience in Java, Spring Boot, Angular, Kafka and DevOps. Based in Morocco, open to relocation.',
  keywords: [
    'Software Engineer',
    'Java',
    'Spring Boot',
    'Angular',
    'Kafka',
    'Kubernetes',
    'Full Stack',
    'Morocco',
  ],
  authors: [{ name: "M'hamed Ben Youssef" }],
  openGraph: {
    title: "M'hamed Ben Youssef | Senior Software Engineer",
    description: 'Senior Software Engineer — Java, Spring, Angular, Kafka, DevOps.',
    url: 'https://mrmechazilla.vercel.app',
    siteName: "M'hamed Ben Youssef Portfolio",
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "M'hamed Ben Youssef | Senior Software Engineer",
    description: 'Senior Software Engineer — Java, Spring, Angular, Kafka, DevOps.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body className="grid-bg">
        {children}
      </body>
    </html>
  );
}