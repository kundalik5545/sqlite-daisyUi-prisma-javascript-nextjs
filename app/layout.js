import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/AppLayout/Navbar";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/Providers/ThemeProviders";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "Sqlite Next App",
  description: "Sqlite next app with prisma",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased `}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="container mx-auto p-5 min-h-screen">
            {children}
            <Toaster richColors />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
