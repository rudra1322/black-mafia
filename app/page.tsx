'use client'

import { useEffect, useState } from 'react'
import { ArrowRight, ChevronDown, GitBranch, LockKeyhole, Menu, Search, ShieldCheck, Users, X, Zap } from 'lucide-react'
import Link from 'next/link'
import Image from "next/image"
const stegaFeatures = ['Hide Files in Images', 'Password Protection', 'Extract Hidden Data', 'Secure & Simple']
const shadowFeatures = ['Anonymous Rooms', 'Real-time Messaging', 'Erase Chat History', 'Secure & Minimal']

function MagneticButton({ children, variant = 'primary' }: { children: React.ReactNode; variant?: 'primary' | 'outline' }) {
  return <button className={`magnetic-button ${variant}`} type="button"><span>{children}</span><ArrowRight size={17} /></button>
}

function CircuitLines() {
  return <svg className="circuit-lines" viewBox="0 0 1200 560" preserveAspectRatio="none" aria-hidden="true">
    <path className="circuit cyan-line" d="M0 190h158l36 35h118l45 45h92" />
    <path className="circuit cyan-line" d="M0 380h170l35-32h118l47-43h75" />
    <path className="circuit purple-line" d="M1200 190h-158l-36 35H888l-45 45h-92" />
    <path className="circuit purple-line" d="M1200 380h-170l-35-32H877l-47-43h-75" />
    <circle className="node cyan-node" cx="350" cy="270" r="5" /><circle className="node cyan-node" cx="350" cy="305" r="5" />
    <circle className="node purple-node" cx="850" cy="270" r="5" /><circle className="node purple-node" cx="850" cy="305" r="5" />
  </svg>
}

function Core() {
  return (
    <div className="core-wrap" aria-label="BlackMafia privacy core">
      <div className="core-orbit orbit-one" />
      <div className="core-orbit orbit-two" />
      <div className="core-glow" />

      <div className="core-disc">
        <Image
          className="core-logo"
          src="/images/blackmafia-logo.png"
          alt="BlackMafia"
          width={420}
          height={420}
          priority
        />
      </div>

      <div className="orbit-label label-top">
        SECURE&nbsp; · &nbsp;PRIVATE&nbsp; · &nbsp;ANONYMOUS
      </div>

      <div className="orbit-label label-bottom">
        DIFFERENT TOOLS
        <br />
        SAME MISSION
      </div>
    </div>
  )
}

function ProductCard({ kind, title, accent, description, features }: { kind: 'stega' | 'shadow'; title: string; accent: string; description: string; features: string[] }) {
  return <article className={`product-card ${kind}`}>
    <div className="card-scan" /><div className="eyebrow">{kind === 'stega' ? 'DATA STEGANOGRAPHY' : 'PRIVATE COMMUNICATION'}</div>
    <div className="product-title"><div className="product-icon">{kind === 'stega' ? '◈' : '◒'}</div><h2>{title}<span>{accent}</span></h2></div>
    <p className="product-kicker">{kind === 'stega' ? 'HIDE MORE THAN MEETS THE EYE' : 'REAL PEOPLE. PRIVATE CONVERSATIONS.'}</p>
    <p className="product-description">{description}</p>
    <ul>{features.map((feature) => <li key={feature}><span className="check">⌁</span>{feature}</li>)}</ul>
    <Link href={kind === 'stega' ? '/stegax' : '/shadowchat'}>
  <MagneticButton variant="outline">
    Enter {title}
  </MagneticButton>
</Link>
    {kind === 'stega' ? <div className="card-stamp">SECRETS<br />IN PIXELS</div> : <div className="chat-bubbles"><div>Anonymous <small>11:24 PM</small><br /><strong>Real conversations.</strong></div><div>You <small>11:25 PM</small><br /><strong>Without traces.</strong></div></div>}
  </article>
}

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  useEffect(() => { document.body.classList.add('blackmafia-loaded'); return () => document.body.classList.remove('blackmafia-loaded') }, [])
  return <main className="blackmafia-shell">
    <div className="ambient ambient-cyan" /><div className="ambient ambient-purple" /><div className="stars" />
    <header className="site-header">
      <a className="brand" href="#top" aria-label="BlackMafia home">
      <div className="brand-mark">
  <Image
    src="/images/blackmafia-logo.png"
    alt="BlackMafia logo"
    width={48}
    height={48}
    priority
  />
</div>
      <div><strong>BLACK<span>MAFIA</span></strong><small>PRIVACY · SECURITY · FREEDOM</small></div></a>
      <nav className={menuOpen ? 'open' : ''}><a className="active" href="#top">Home</a><a href="#tools">Tools <ChevronDown size={14} /></a><a href="#about">About</a><a href="#security">Security</a><a href="#docs">Docs</a><a href="#pricing">Pricing</a></nav>
      <div className="header-actions"><button className="icon-button" aria-label="Search"><Search size={22} /></button><MagneticButton>Get Started</MagneticButton><button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <X /> : <Menu />}</button></div>
    </header>
    <section id="top" className="hero">
      <div className="side-note left-note">SAME PEOPLE<br />DIFFERENT TOOLS<br />A SAFER TOMORROW.</div><div className="side-note right-note">BUILT<br />BY DREAMERS<br />FOR A MORE<br />PRIVATE WORLD.</div>
      <div className="hero-copy"><p className="overline">WELCOME TO BLACKMAFIA</p><h1>ONE PLATFORM. <span>A SAFER DIGITAL YOU.</span></h1><p className="hero-subtitle">Powerful cybersecurity tools to protect your data and your conversations.<br />Built for a more private, secure and free internet.</p><div className="hero-actions"><MagneticButton>Explore Platform</MagneticButton><MagneticButton variant="outline"><GitBranch size={18} /> View on GitHub</MagneticButton></div></div>
      <div id="tools" className="tools-stage"><CircuitLines /><ProductCard kind="stega" title="Stega" accent="X." description="Hide secret files or messages inside images using advanced steganography. Keep your data invisible, yet accessible to the right people." features={stegaFeatures} /><Core /><ProductCard kind="shadow" title="Shadow" accent="Chat" description="A real-time anonymous chat platform with end-to-end privacy. Create rooms, chat freely and erase everything when you're done." features={shadowFeatures} /></div>
    </section>
    <section className="principles" id="security"><div><ShieldCheck /><span>Your Data<br /><b>Your Control</b></span></div><div><LockKeyhole /><span>Privacy<br /><b>by Design</b></span></div><div><Users /><span>Tools for a<br /><b>Safer Internet</b></span></div><div><Zap /><span>Open Source<br /><b>Driven</b></span></div></section>
    <footer><span>CYBERSECURITY<br />FOR A BETTER TOMORROW.</span><strong>PRIVACY IS NOT A FEATURE.<br />IT&apos;S THE ARCHITECTURE.</strong><span>BLACKMAFIA.IN<br /><i /></span></footer>
  </main>
}
