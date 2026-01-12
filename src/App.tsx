import { useEffect, useState, useRef } from "react";
import "./App.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md border-b border-black/5 py-2"
          : "bg-transparent py-3"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-xl font-bold tracking-tight group">
          <span className="inline-block transition-transform group-hover:-rotate-3" style={{ fontFamily: 'Syne, sans-serif' }}>Drizzle</span>
          <span className="inline-block transition-transform group-hover:rotate-3 text-gradient" style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic' }}>shine</span>
        </a>
        <div className="hidden md:flex gap-8 text-sm font-medium">
          {["Work", "About", "Services", "Contact"].map((item, i) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative overflow-hidden group"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <span className="inline-block transition-transform group-hover:-translate-y-full">{item}</span>
              <span className="absolute left-0 top-0 inline-block translate-y-full transition-transform group-hover:translate-y-0 text-gradient font-semibold">{item}</span>
            </a>
          ))}
        </div>
        <button 
          className="md:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {menuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </>
            ) : (
              <>
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </>
            )}
          </svg>
        </button>
      </div>
      
      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-b border-black/5 py-4 px-6">
          <div className="flex flex-col gap-4">
            {["Work", "About", "Services", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-lg font-medium py-2 hover:text-purple-600 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const FloatingOrb = ({ className, delay = 0 }: { className?: string; delay?: number }) => (
  <div 
    className={`absolute rounded-full blur-3xl opacity-30 animate-float ${className}`}
    style={{ animationDelay: `${delay}s` }}
  />
);

const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePos({
          x: (e.clientX - rect.left - rect.width / 2) / 50,
          y: (e.clientY - rect.top - rect.height / 2) / 50,
        });
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden"
    >
      {/* Animated background orbs */}
      <FloatingOrb className="w-96 h-96 bg-purple-300 -top-20 -left-20" delay={0} />
      <FloatingOrb className="w-80 h-80 bg-blue-300 top-1/3 -right-20" delay={2} />
      <FloatingOrb className="w-64 h-64 bg-amber-200 bottom-20 left-1/4" delay={4} />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />

      <div 
        className="max-w-6xl w-full space-y-6 relative z-10"
      >
        <p className="text-sm md:text-base font-medium tracking-wide uppercase animate-fade-in-up inline-flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-gradient">Web3 & DeFi Content Writer</span>
        </p>
        <h1 className="text-[3.4rem] md:text-[4.3rem] lg:text-[5.5rem] font-bold tracking-tight leading-[1.1] text-black animate-slide-up" style={{ fontFamily: 'Syne, sans-serif' }}>
          I help Web3 and DeFi brands{" "}
          <br className="hidden md:block" />
          turn complex ideas into{" "}
          <span className="text-gradient-animated">clear</span>
          ,{" "}
          <span className="text-gradient-animated" style={{ animationDelay: '0.5s' }}>educational</span>{" "}
          <br className="hidden md:block" />
          content that builds{" "}
          <span className="text-gradient-animated" style={{ animationDelay: '1s' }}>trust</span>
          .
        </h1>
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          Through educational X threads, project breakdowns, and long-form writing.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <a
            href="#contact"
            className="group inline-flex items-center justify-center px-8 py-4 bg-black text-white font-medium rounded-full transition-all hover:scale-105 hover:shadow-2xl hover:shadow-black/20 active:scale-95"
          >
            Let's Work Together
            <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-black/20 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-black/40 rounded-full animate-scroll-down" />
        </div>
      </div>
    </section>
  );
};


const ProjectCard = ({
  title,
  category,
  link,
  index,
}: {
  title: string;
  category: string;
  link: string;
  index: number;
}) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="group block animate-fade-in-up"
    style={{ animationDelay: `${index * 0.1}s` }}
  >
    <div className="aspect-4/3 bg-gray-50 rounded-2xl overflow-hidden mb-4 relative">
      <div className="w-full h-full flex items-center justify-center text-gray-300 group-hover:text-gray-400 transition-all group-hover:scale-105">
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
        </svg>
      </div>
    </div>
    <div className="flex justify-between items-start gap-4">
      <div>
        <h3 className="text-xl font-semibold tracking-tight mb-1 group-hover:text-purple-600 transition-colors" style={{ fontFamily: 'Syne, sans-serif' }}>{title}</h3>
        <p className="text-gray-500 text-sm">{category}</p>
      </div>
      <div className="w-8 h-8 shrink-0 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
        <svg className="w-3 h-3 transition-transform group-hover:rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
        </svg>
      </div>
    </div>
  </a>
);

const ProofOfWork = () => {
  const xThreads = [
    { title: "The Growth Toolkit Your Product Needs", category: "X Thread", link: "https://x.com/i/status/1818700607751905765" },
    { title: "Solana ID and Identity Layers in Web3", category: "X Thread", link: "https://x.com/i/status/1831274889656914321" },
    { title: "Neon EVM (Solana Network Extension)", category: "X Thread", link: "https://x.com/i/status/1864736731301372224" },
  ];

  const articles = [
    { title: "How to Easily Distribute Tokens with Smithii's Airdrop Tool", category: "How-to Guide", link: "#" },
    { title: "I Can Prove I'm Real and Still Earn Rewards on Solana", category: "Project Breakdown", link: "#" },
  ];

  return (
    <section id="work" className="py-32 px-6 relative">
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-purple-50/30 to-transparent" />
      <div className="max-w-6xl mx-auto relative">
        <div className="mb-16 text-center">
          <p className="text-sm font-medium text-gradient tracking-wide uppercase mb-3">Proof of Work</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight" style={{ fontFamily: 'Syne, sans-serif' }}>
            Selected <span className="text-gradient-animated">Works</span>
          </h2>
        </div>

        <div className="mb-20">
          <h3 className="text-lg font-semibold mb-8 text-gray-600 flex items-center gap-3">
            <span className="w-8 h-px bg-gray-300" />
            X / Twitter Threads
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {xThreads.map((project, i) => (
              <ProjectCard key={i} {...project} index={i} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-8 text-gray-600 flex items-center gap-3">
            <span className="w-8 h-px bg-gray-300" />
            Medium / Long-Form Writing
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {articles.map((project, i) => (
              <ProjectCard key={i} {...project} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


const StatCounter = ({ value, label, suffix = "" }: { value: string; label: string; suffix?: string }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="text-center">
      <div className={`text-4xl md:text-5xl font-bold transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ fontFamily: 'Syne, sans-serif' }}>
        {value}{suffix}
      </div>
      <div className="text-gray-500 mt-2">{label}</div>
    </div>
  );
};

const About = () => {
  return (
    <section id="about" className="py-32 px-6 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-purple-50/50 to-transparent" />
      <div className="max-w-4xl mx-auto relative">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-gradient tracking-wide uppercase mb-3">About Me</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black leading-tight" style={{ fontFamily: 'Syne, sans-serif' }}>
            I'm a content writer focused on{" "}
            <span className="text-gradient-animated">clarity</span>,{" "}
            <span className="text-gradient-animated" style={{ animationDelay: '0.3s' }}>education</span>, and{" "}
            <span className="text-gradient-animated" style={{ animationDelay: '0.6s' }}>trust</span>.
          </h2>
        </div>

        <div className="space-y-6 text-lg text-gray-600 leading-relaxed mb-16 max-w-2xl mx-auto text-center">
          <p>
            I write about Web3 and decentralized finance, with the goal of making complex ideas easier to understand — especially for people encountering them for the first time.
          </p>
          <p>
            My work spans educational X threads, project breakdowns, and long-form articles. I care deeply about structure, flow, and helping the reader walk away actually understanding something.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-16">
          <span className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium">AI-assisted workflow</span>
          <span className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium">Education-first content</span>
          <span className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium">Team-friendly</span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 pt-8 border-t border-gray-100">
          <StatCounter value="2025" label="Started" />
          <StatCounter value="5" suffix="+" label="Clients" />
          <StatCounter value="10" suffix="+" label="Bounties Won" />
          <StatCounter value="20" suffix="+" label="Projects" />
        </div>
      </div>
    </section>
  );
};


const Services = () => {
  const services = [
    {
      title: "Educational X Threads",
      description: "Simplify Web3 and DeFi concepts into engaging, digestible threads that educate and build trust with your audience.",
      icon: "💬",
      gradient: "from-purple-100 to-pink-100",
      iconBg: "from-purple-500 to-pink-500",
    },
    {
      title: "Project Breakdowns",
      description: "Deep-dive analysis that explains your product's use case, value proposition, and technical details in clear language.",
      icon: "📊",
      gradient: "from-blue-100 to-cyan-100",
      iconBg: "from-blue-500 to-cyan-500",
    },
    {
      title: "Long-Form Articles",
      description: "Comprehensive content for readers who want to truly understand — from how-to guides to educational deep dives.",
      icon: "📚",
      gradient: "from-amber-100 to-orange-100",
      iconBg: "from-amber-500 to-orange-500",
    },
  ];

  return (
    <section id="services" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-white via-gray-50/50 to-white" />
      
      <div className="max-w-6xl mx-auto relative">
        <div className="mb-16 text-center">
          <p className="text-sm font-medium text-gradient tracking-wide uppercase mb-3">My Services</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight" style={{ fontFamily: 'Syne, sans-serif' }}>
            What I Can <span className="text-gradient-animated">Help</span> With
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className={`group p-8 bg-linear-to-br ${service.gradient} rounded-3xl border border-white/50 hover:shadow-2xl transition-all hover:-translate-y-2 cursor-default relative overflow-hidden`}
            >
              <div className="absolute inset-0 bg-white/40 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className={`w-14 h-14 rounded-2xl bg-linear-to-br ${service.iconBg} flex items-center justify-center mb-6 text-xl group-hover:scale-110 group-hover:rotate-6 transition-all shadow-lg text-white`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900" style={{ fontFamily: 'Syne, sans-serif' }}>{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                <a href="#contact" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-black transition-colors group/link">
                  Get in Touch
                  <svg className="ml-2 w-4 h-4 transition-transform group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [copied, setCopied] = useState(false);
  
  const copyEmail = () => {
    navigator.clipboard.writeText("design8sheva@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-32 px-6 bg-linear-to-br from-purple-600 via-pink-500 to-orange-400 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px]" />
      <FloatingOrb className="w-96 h-96 bg-white -top-40 -left-40 opacity-10" delay={0} />
      <FloatingOrb className="w-80 h-80 bg-white bottom-0 -right-40 opacity-10" delay={2} />
      
      <div className="max-w-3xl mx-auto text-center relative">
        <p className="text-sm font-medium text-white/70 tracking-wide uppercase mb-3">Get in Touch</p>
        <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-6" style={{ fontFamily: 'Syne, sans-serif' }}>
          Let's Work<br />Together
        </h2>
        <p className="text-xl text-white/80 mb-10 text-balance">
          I'm always happy to discuss ideas, collaborations, or projects.
        </p>
        <button
          onClick={copyEmail}
          className="group inline-flex items-center gap-3 text-2xl md:text-3xl font-bold bg-white/10 backdrop-blur-sm px-8 py-4 rounded-full hover:bg-white/20 transition-all hover:scale-105 active:scale-95"
        >
          design8sheva@gmail.com
          <span className="text-base opacity-70 group-hover:opacity-100 transition-opacity">
            {copied ? "✓ Copied!" : "📋"}
          </span>
        </button>
        <div className="flex justify-center gap-4 mt-12">
          <a
            href="https://x.com/_0drizzle"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all hover:scale-105"
          >
            X / Twitter
          </a>
          <a
            href="mailto:design8sheva@gmail.com"
            className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all hover:scale-105"
          >
            Email
          </a>
        </div>
        <div className="mt-20 text-sm text-white/50">
          © {new Date().getFullYear()}{" "}
          <span style={{ fontFamily: 'Syne, sans-serif' }}>Drizzle</span>
          <span style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic' }}>shine</span>
          . DMs open.
        </div>
      </div>
    </section>
  );
};

function App() {
  return (
    <div className="bg-white min-h-screen text-black font-sans selection:bg-purple-500 selection:text-white">
      <Navbar />
      <Hero />
      <ProofOfWork />
      <About />
      <Services />
      <Contact />
    </div>
  );
}

export default App;
