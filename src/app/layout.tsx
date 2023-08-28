// These styles apply to every route in the application
import "@/styles/globals.css";
import { Inter } from "next/font/google";
import AuthContext from "./context/AuthContext";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { Metadata } from "next";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Next Cofession',
  description: 'Automation the process of a Cofession\' Mod',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.variable}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <AuthContext>
        {children}
        </AuthContext>
        </ThemeProvider>
      </body>      
    </html>
  );
}
