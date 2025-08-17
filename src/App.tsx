import { useRef, useState, useEffect } from "react";
import BottomNav from "./components/Navbar/BottomNav";
import Home from "./sections/Home";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import SplashScreen from "./SplashScreen";

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [showSplash, setShowSplash] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToSection = (index: number) => {
    if (containerRef.current) {
      const width = window.innerWidth;
      containerRef.current.scrollTo({
        left: width * index,
        behavior: "smooth",
      });
    }
    setActiveIndex(index);
  };

  // sync BottomNav activeIndex when user scrolls manually
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const handleScroll = () => {
      const width = window.innerWidth;
      const index = Math.round(el.scrollLeft / width);
      setActiveIndex(index);
    };

    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  if (showSplash) {
    return <SplashScreen onFinish={() => setShowSplash(false)} />;
  }

  return (
    <div className="relative bg-neutral-900 text-white">
      <div
        ref={containerRef}
        className="flex flex-row overflow-x-scroll snap-x snap-mandatory h-screen w-screen scroll-smooth hide-scrollbar"
      >
        <section className="w-screen h-screen snap-center flex items-center justify-center bg-neutral-900">
          <Home onNavigate={scrollToSection} />
        </section>
        <section className="w-screen h-screen snap-center flex items-center justify-center bg-neutral-800">
          <About />
        </section>
        <section className="w-screen h-screen snap-center flex items-center justify-center bg-neutral-900">
          <Skills />
        </section>
        <section className="w-screen h-screen snap-center flex items-center justify-center bg-neutral-800">
          <Experience />
        </section>
        <section className="w-screen h-screen snap-center flex items-center justify-center bg-neutral-900">
          <Projects />
        </section>
        <section className="w-screen h-screen snap-center flex items-center justify-center bg-neutral-800">
          <Contact />
        </section>
      </div>

      {/* Bottom Navigation now controlled */}
      <BottomNav activeIndex={activeIndex} onNavigate={scrollToSection} />
    </div>
  );
}