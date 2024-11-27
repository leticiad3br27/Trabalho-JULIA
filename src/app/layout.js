/* import localFont from "next/font/local"; */
import "./globals.css";
import Header from "@/components/Header"

export const metadata = {
  title: "JUlia",
  description: "Aplicação de Front-End II",
  charset: 'UTF-8',
  author: 'LUZ',
  keywords: "HTML, CSS, JavaScript, React, Next.js, JUJU"
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
