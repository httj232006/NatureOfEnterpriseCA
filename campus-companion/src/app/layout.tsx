import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Campus Companion – TU Dublin",
  description: "Your student companion app for TU Dublin campus",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-800 min-h-screen flex flex-col">
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        <Header />
        <div className="flex flex-1 min-h-0">
          <Sidebar />
          <main
            id="main-content"
            className="flex-1 overflow-y-auto p-6 focus:outline-none"
            tabIndex={-1}
          >
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
