import { Inter } from "next/font/google";
import { useState } from "react";
import DashboardNavBar from "../components/DashboardNavBar/DashboardNavBar";
import SideBar from "../components/SideBar/SideBar";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleSidebar = (value: boolean) => {
    setIsOpen(value);

  }
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-gradient-to-r from-[#F6D4FB] to-blue-200 min-h-screen">
          <div className="font-outfit flex relative ">
            <div className="fixed z-50">
              <SideBar isOpen={isOpen} />
            </div>
            <div className="flex-1 mx-6  ">
              <div className=" sticky top-0  bg-gradient-to-r from-[#F6D4FB] to-blue-200 ">
                <div className="md:ml-72 py-4 md:py-8">
                  <DashboardNavBar handleSidebar={handleSidebar} />
                </div>
              </div>
              <div className="mx-4 mt-4 sm:mt-16 md:ml-72">{children}</div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
