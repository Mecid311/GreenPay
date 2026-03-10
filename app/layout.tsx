import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Roboto } from "next/font/google";
import "./globals.css";
import { ApiProvider } from "@/context/ApiContext";
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';


const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "GreenPay - Biznesiniz üçün sürətli və təhlükəsiz ödənişlər",
  description: "Ödəniş prosesləriniz bir platformada",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="az">
      <body className={roboto.className}>
        <ApiProvider>
          <Header />
          {children}
          <Footer />
        </ApiProvider>
      </body>
    </html>
  );
}
