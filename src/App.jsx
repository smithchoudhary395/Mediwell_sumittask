import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Screenshots from "./components/Screenshots";
import Testimonials from "./components/Testinomial";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return savedTheme || (systemPrefersDark ? "dark" : "light");
  });

  const toggleTheme = () => {
    setTheme(prev => {
      const newTheme = prev === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    document.body.className = theme;
    
    const root = document.documentElement;
    if (theme === "dark") {
      root.style.setProperty("--bg-primary", "#0f172a");
      root.style.setProperty("--bg-secondary", "#1e293b");
      root.style.setProperty("--text-primary", "#f8fafc");
      root.style.setProperty("--text-secondary", "#cbd5e1");
      root.style.setProperty("--card-bg", "#1e293b");
      root.style.setProperty("--border-color", "#334155");
      root.style.setProperty("--shadow-color", "rgba(0, 0, 0, 0.3)");
    } else {
      root.style.setProperty("--bg-primary", "#ffffff");
      root.style.setProperty("--bg-secondary", "#f8fafc");
      root.style.setProperty("--text-primary", "#1e293b");
      root.style.setProperty("--text-secondary", "#64748b");
      root.style.setProperty("--card-bg", "#ffffff");
      root.style.setProperty("--border-color", "#e2e8f0");
      root.style.setProperty("--shadow-color", "rgba(0, 0, 0, 0.1)");
    }
  }, [theme]);

  return (
    <div className={`app ${theme}`}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Features />
        <Screenshots />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;