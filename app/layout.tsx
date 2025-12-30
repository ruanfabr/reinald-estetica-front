import Navbar from "@/src/components/NavBar";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {/* <Navbar/> */}
        {children}
      </body>
    </html>
  );
}
