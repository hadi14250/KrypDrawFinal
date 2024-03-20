import type { Metadata } from "next";
import { Roboto, Roboto_Mono } from "next/font/google";
import "../globals.css";
import { cn } from "@/lib/utils";
import Footer from "@/components/Footer/Footer";
import { getServerSession } from "next-auth";
import Navbar from "@/components/Navbar/Navbar";
import HomePage from "@/components/HomePage/HomePage";
import { Toaster } from "react-hot-toast";

const roboto = Roboto_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen w-full bg-white text-white flex bg-[#160023]",
          roboto.className,
          {
            "debug-screens": process.env.NODE_ENV === "development",
          }
        )}
      >
        <div className="w-full">
          <HomePage session={session}>
            <Navbar />
            {children}
            <Footer />
            <Toaster />
          </HomePage>
        </div>
      </body>
    </html>
  );
}
