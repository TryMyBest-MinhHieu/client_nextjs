import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["vietnamese"],
  weight: ["100", "300"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <header>Header</header>
        {children}
      </body>
    </html>
  );
}
