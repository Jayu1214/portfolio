import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Orbitron } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { Toaster } from "react-hot-toast";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jay Trivedi - Cybersecurity & ML Specialist | Portfolio",
  description: "B.Tech Computer Science student specializing in cybersecurity and machine learning. Experienced in security audits, ML models, and backend development.",
  keywords: ["Cybersecurity", "Machine Learning", "Computer Science", "Portfolio", "Jay Trivedi", "Security Research", "Python", "Flask"],
  authors: [{ name: "Jay Trivedi" }],
  creator: "Jay Trivedi",
  publisher: "Jay Trivedi",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jay-trivedi-portfolio.vercel.app",
    title: "Jay Trivedi - Cybersecurity & ML Specialist | Portfolio",
    description: "B.Tech Computer Science student specializing in cybersecurity and machine learning. Experienced in security audits, ML models, and backend development.",
    siteName: "Jay Trivedi Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jay Trivedi - Cybersecurity & ML Specialist | Portfolio",
    description: "B.Tech Computer Science student specializing in cybersecurity and machine learning. Experienced in security audits, ML models, and backend development.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} ${orbitron.variable} antialiased`}
      >
        <ThemeProvider>
          {children}
          <Toaster
            position="bottom-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: 'hsl(var(--card))',
                color: 'hsl(var(--card-foreground))',
                border: '1px solid hsl(var(--border))',
              },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
