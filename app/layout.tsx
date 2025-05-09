import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "sonner";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Agulonye Micheal - Portfolio",
  description: "Frontend developer leveraging AI to build intelligent, scalable, and high-performing digital infrastructures for modern brands. Expert in crafting seamless, responsive, and future-ready user interfaces.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Agulonye Micheal - Portfolio",
    description: "Frontend developer leveraging AI to build intelligent, scalable, and high-performing digital infrastructures for modern brands. Expert in crafting seamless, responsive, and future-ready user interfaces.",
    url: "https://agulonyemicheal.vercel.app",
    siteName: "Agulonye Micheal - Portfolio",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agulonye Micheal - Portfolio",
    description: "Frontend developer leveraging AI to build intelligent, scalable, and high-performing digital infrastructures for modern brands. Expert in crafting seamless, responsive, and future-ready user interfaces.",
    images: '/og.png', // Local image
    creator: '@agulonye_m',
},
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Navbar />
          {children}
          <Toaster position="bottom-left"/>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
