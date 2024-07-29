import { Inter } from "next/font/google";
import MenuItems from "../components/NavBar/MenuItems/MenuItems";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-gradient-to-r from-pink-200 to-blue-200">
          <div className="font-outfit container mx-auto  ">
            <MenuItems ></MenuItems>
            <div className="mx-4 lg:mx-0 mt-10 md:mt-40"> {children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}


