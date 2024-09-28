import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Healthdonalds",
  description: "Start eating healty burger!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body
        className={cn(
          "antialiased",
          geistMono.variable,
          geistSans.variable,
          "h-full"
        )}
      >
        <Toaster />
        <div className="min-h-full border-x max-w-md m-auto flex flex-col">
          <Header />
          <main className="flex-1 px-4 py-2">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
