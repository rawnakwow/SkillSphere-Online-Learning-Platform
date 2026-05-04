import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import Hero from "./components/Hero";
import Mentors from "./components/Mentors";
import CourseCard from "./components/CourseCard";
import Home from "./page";

export const metadata = {
  title: "SkillSphere | Online Learning Platform",
  description: "Upgrade your skills with industry experts.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className="antialiased">
        <Toaster position="top-center" />
        <Navbar />
        {/* Ensures content fills space so footer stays at bottom */}
        <main className="min-h-[calc(100vh-300px)]">
          {children}
        </main>
        <Footer />
        <Hero />
        <Mentors />
        <CourseCard />
         
          <Home />
           

      </body>
    </html>
  );
}
