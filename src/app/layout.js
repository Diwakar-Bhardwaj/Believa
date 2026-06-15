import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Providers from "./providers";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col bg-gray-50">
        {/* <Navbar /> */}

        <main className="flex-1">
          <Providers>
            <Navbar />
            {children}
          </Providers>
        </main>

        <Toaster
          position="top-center"
          reverseOrder={false}
        />

        <Footer />
      </body>
    </html>
  );
}