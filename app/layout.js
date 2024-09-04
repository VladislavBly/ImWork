import { Inter, Involve } from "next/font/google";
import "./globals.scss";
import Navbar from '../component/Navbar/Navbar'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ImWork",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
