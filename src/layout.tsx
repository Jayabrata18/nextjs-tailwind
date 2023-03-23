import "@/styles/global.css";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import Providers from "./components/Providers";
import Navbar from "./components/Navbar";
import {Toaster} from "./components/ui/Toast";


const inter = Inter({subsets: ['latin']})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn("bg-white text-slate-900 antialiased", inter.className)}
    >
      <body className="min-h-screen bg-slate-50 dark:bg-slate-900 antialiased">
        <Providers> {children}
        <Toaster position="bottom-right"/>
        <Navbar/>
        </Providers>
        {/* allow for more height on mobile device */}
        <div className="h-40 md:hidden"/>
      </body>
    </html>
  );
}
