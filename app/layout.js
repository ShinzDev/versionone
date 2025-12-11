

import "./globals.css";
import { Inter, Poppins } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});
const poppins = Poppins({
  subsets: ["latin"],
    weight: ["400", "500", "600"],
});

export const metadata = {
  title: "Oluwashinaayomi | Software Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
