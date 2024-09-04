import "./globals.scss";
import Navbar from '../component/Navbar/Navbar'


export const metadata = {
  title: "ImWork",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
    
  );
}
