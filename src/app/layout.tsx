import { Roboto } from "next/font/google";
import "./globals.css";
import { SideBar } from "@/components/SideBar";
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
      {/* <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet" />
      </head> */}
      <body className={roboto.className}>
        <SideBar />
        {children}
      </body>
    </html>
  );
}
