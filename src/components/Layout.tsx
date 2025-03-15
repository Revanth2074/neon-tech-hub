
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-tech-dark text-white">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
