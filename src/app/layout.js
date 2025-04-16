import { satoshi, clashDisplay } from "./font"; // Import satoshi and clashDisplay fonts
import "./globals.css";
import Footer from "./ui/root-layout/footer";

export const metadata = {
  title: "Vendr",
  description: "Shop in style.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${satoshi.variable} ${clashDisplay.variable} antialiased`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
