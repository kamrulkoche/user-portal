import { Inter } from "next/font/google";
import "../globals.css";
import DashboardNavBar from "../components/DashboardNavBar/DashboardNavBar";
import SideBar from "../components/SideBar/SideBar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-gradient-to-r from-[#F6D4FB] to-blue-200 min-h-screen">
          <div className="font-outfit flex ">
            <SideBar />
            <div className="flex-1 mx-6 pt-4">
              <DashboardNavBar />
              <div className="mx-4 lg:mx-0 mt-10">{children}</div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
