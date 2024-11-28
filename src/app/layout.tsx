import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Quantum-Pay | Next-Gen Payments",
  description: "Experience quantum-speed payment processing",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800`}>
        <div className="min-h-screen flex flex-col">
          <header className="py-6 px-4 sm:px-6 lg:px-8">
            <nav className="max-w-7xl mx-auto flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <Image 
                  src="/logo.svg" 
                  alt="Quantum-Pay Logo" 
                  width={40} 
                  height={40}
                  className="dark:invert"
                />
                <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-teal-500">
                  Quantum-Pay
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Developed by Shalom
                </div>
                <Image 
                  src="/ProfilePic.png" 
                  alt="Shalom's Profile" 
                  width={40} 
                  height={40}
                  className="rounded-full border-2 border-emerald-500"
                />
              </div>
            </nav>
          </header>
          <main className="flex-grow">{children}</main>
          <footer className="py-6 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto text-center space-y-2">
              <div className="flex justify-center items-center space-x-2">
                <Image 
                  src="/logo.svg" 
                  alt="Shalom's Logo" 
                  width={24} 
                  height={24}
                  className="dark:invert"
                />
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  Quantum-Pay
                </span>
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-500">
                {new Date().getFullYear()} Developed by Shalom. All rights reserved.
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
