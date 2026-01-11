import React, { useState, useEffect } from "react";
import "./App.css";

// --- Components ---

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-sm border-b border-black/10 py-4" : "bg-transparent py-6"}`}>
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-xl font-bold tracking-tight">
          drizzleshine
        </a>
        <div className="hidden md:flex gap-8 text-sm font-medium">
          {["Work", "About", "Services", "Contact"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:opacity-50 transition-opacity">
              {item}
            </a>
          ))}
        </div>
        <button className="md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
        </button>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center px-6 pt-24 max-w-6xl mx-auto">
      <div className="space-y-6 max-w-4xl">
        <p className="text-sm md:text-base font-medium text-gray-500 tracking-wide uppercase animate-fade-in-up">
          Web3 & DeFi Content Writer
        </p>
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.9] text-black animate-slide-up">
          I help Web3 and DeFi brands <br className="hidden md:block" />
          turn complex ideas into <span className="text-gray-400">clear, educational</span> <br className="hidden md:block" />
          content that builds trust.
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 leading-relaxed pt-4">
          Through educational X threads, project breakdowns, and long-form writing.
        </p>
        <div className="pt-4 flex flex-col sm:flex-row gap-4">
          <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 bg-black text-white font-medium transition-all hover:bg-gray-800">
            Let's Work Together
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
          </a>
          <a href="#work" className="inline-flex items-center justify-center px-8 py-4 border-2 border-black font-medium hover:bg-black hover:text-white transition-all">
            View Work
          </a>
        </div>
      </div>
    </section>
  )
}

const ProjectCard = ({ title, category, link }: { title: string, category: string, link: string }) => (
  <a href={link} target="_blank" rel="noopener noreferrer" className="group cursor-pointer">
    <div className="aspect-[4/3] bg-gray-100 rounded-2xl overflow-hidden mb-6 relative">
      <div className="w-full h-full bg-neutral-100 flex items-center justify-center text-neutral-400">
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
      </div>
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
    </div>
    <div className="flex justify-between items-start">
      <div>
        <h3 className="text-2xl font-semibold tracking-tight mb-1">{title}</h3>
        <p className="text-gray-500">{category}</p>
      </div>
      <div className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
      </div>
    </div>
  </a>
)

const ProofOfWork = () => {
  const xThreads = [
    { title: "The Growth Toolkit Your Product Needs", category: "X Thread", link: "https://x.com/i/status/1818700607751905765" },
    { title: "Solana ID and Identity Layers in Web3", category: "X Thread", link: "https://x.com/i/status/1831274889656914321" },
    { title: "Neon EVM (Solana Network Extension)", category: "X Thread", link: "https://x.com/i/status/1864736731301372224" },
  ]

  const articles = [
    { title: "How to Easily Distribute Tokens with Smithii's Airdrop Tool", category: "How-to Guide", link: "#" },
    { title: "I Can Prove I'm Real and Still Earn Rewards on Solana", category: "Project Breakdown", link: "#" },
  ]

  return (
    <section id="work" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-end mb-16">
        <div>
          <p className="text-sm font-medium text-gray-500 tracking-wide uppercase mb-4">Proof of Work</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">Selected Works</h2>
        </div>
      </div>

      <div className="mb-20">
        <h3 className="text-2xl font-semibold mb-8 text-gray-700">X / Twitter Threads</h3>
        <div className="grid md:grid-cols-3 gap-x-8 gap-y-16">
          {xThreads.map((project, i) => (
            <ProjectCard key={i} {...project} />
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-8 text-gray-700">Medium / Long-Form Writing</h3>
        <div className="grid md:grid-cols-2 gap-x-8 gap-y-16">
          {articles.map((project, i) => (
            <ProjectCard key={i} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}

const About = () => {
  return (
    <section id="about" className="py-32 px-6 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <div className="relative inline-block">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1.1] text-black text-balance">
            I'm a <span className="inline-block px-1 border-b-4 border-black mx-1">content writer</span> <br />
            focused on <span className="inline-block px-1 border-b-4 border-black mx-1">clarity</span>, <br />
            <span className="inline-block px-1 border-b-4 border-black mx-1">education</span>, and <span className="inline-block px-1 border-b-4 border-black mx-1">trust</span>.
          </h2>
        </div>

        <div className="mt-20 grid md:grid-cols-2 gap-12 text-left max-w-4xl mx-auto items-center">
          <div className="border-2 border-black p-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-lg font-medium">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                design8sheva@gmail.com
              </div>
              <div className="flex items-center gap-3 text-lg font-medium">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
                @_0drizzle
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <p className="text-lg text-gray-800 leading-relaxed">
              I write about Web3 and decentralized finance, with the goal of making complex ideas easier to understand — especially for people encountering them for the first time.
            </p>
            <p className="text-lg text-gray-800 leading-relaxed">
              My work spans educational X threads, project breakdowns, and long-form articles. I care deeply about structure, flow, and helping the reader walk away actually understanding something, not just feeling impressed.
            </p>
          </div>
        </div>

        <div className="mt-16 max-w-3xl mx-auto text-left">
          <ul className="space-y-4 text-lg text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-2xl">→</span>
              <span>I use AI and design tools like Figma and Canva to streamline my workflow, while keeping the writing thoughtful, human, and original.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">→</span>
              <span>I focus on education-first content that helps users understand products before they're asked to trust them.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">→</span>
              <span>I'm comfortable working independently or alongside product, marketing, and growth teams.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

const Services = () => {
  const services = [
    {
      title: "Educational X Threads",
      description: "Simplify Web3 and DeFi concepts into engaging, digestible threads that educate and build trust with your audience.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
      )
    },
    {
      title: "Project Breakdowns",
      description: "Deep-dive analysis that explains your product's use case, value proposition, and technical details in clear language.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
      )
    },
    {
      title: "Long-Form Articles & Guides",
      description: "Comprehensive content for readers who want to truly understand — from how-to guides to educational deep dives.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
      )
    },
  ]
  return (
    <section id="services" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="mb-16">
        <p className="text-sm font-medium text-gray-500 tracking-wide uppercase mb-4">My Services</p>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">What I Can Help With</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, i) => (
          <div key={i} className="p-8 border border-gray-100 bg-white rounded-2xl hover:shadow-xl hover:border-transparent transition-all duration-300 group">
            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-6 text-black group-hover:bg-black group-hover:text-white transition-colors">
              {service.icon}
            </div>
            <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
            <p className="text-gray-500 leading-relaxed mb-8">{service.description}</p>
            <a href="#contact" className="inline-flex items-center text-sm font-bold uppercase tracking-wide group-hover:opacity-70">
              Get in Touch <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-black text-white">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">Let's Work Together</h2>
        <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto text-balance">
          I'm always happy to discuss ideas, collaborations, or projects. Open to short-term projects, ongoing content, and collaborations.
        </p>
        <div className="pt-8">
          <a href="mailto:design8sheva@gmail.com" className="inline-block text-4xl md:text-6xl font-bold underline decoration-1 underline-offset-8 hover:text-gray-300 transition-colors">
            design8sheva@gmail.com
          </a>
        </div>
        <div className="flex justify-center gap-8 pt-16">
          <a href="https://x.com/_0drizzle" target="_blank" rel="noopener noreferrer" className="text-lg font-medium text-gray-400 hover:text-white transition-colors">X / Twitter</a>
          <a href="mailto:design8sheva@gmail.com" className="text-lg font-medium text-gray-400 hover:text-white transition-colors">Email</a>
        </div>
        <div className="pt-24 text-sm text-gray-600">
          &copy; {new Date().getFullYear()} drizzleshine. DMs open.
        </div>
      </div>
    </section>
  )
}

function App() {
  return (
    <div className="bg-white min-h-screen text-black font-sans selection:bg-black selection:text-white">
      <Navbar />
      <Hero />
      <ProofOfWork />
      <About />
      <Services />
      <Contact />
    </div>
  )
}

export default App
