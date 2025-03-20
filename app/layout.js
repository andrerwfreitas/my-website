import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {ThemeProvider} from "@/components/theme-provider";
import {ModeToggle} from "@/components/ModeToggle";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "André R. W. Freitas",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
        <div className="fixed bottom-0 left-0 pl-2 pb-2">
          <ModeToggle />
        </div>
      </ThemeProvider>
      </body>
    </html>
  );
}
