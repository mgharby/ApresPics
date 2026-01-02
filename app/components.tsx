"use client";
import Link from "next/link";
import { useMemo, useState } from "react";

export function Brand() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-fuchsia-500 via-violet-500 to-cyan-400 shadow-glow grid place-items-center">
        <span className="font-black tracking-tight">A</span>
      </div>
      <div className="leading-tight">
        <div className="font-extrabold text-lg tracking-tight">Apres</div>
        <div className="text-xs text-white/60 -mt-0.5">Après, but for photos</div>
      </div>
    </Link>
  );
}

export function Nav() {
  const [open, setOpen] = useState(false);
  const items = useMemo(() => ([
    { href: "/", label: "Home" },
    { href: "/pricing", label: "Pricing" },
    { href: "/faq", label: "FAQ" },
  ]), []);

  const useFor = useMemo(() => ([
    { href: "/use/weddings", label: "Weddings" },
    { href: "/use/private-events", label: "Private Events" },
    { href: "/use/college-events", label: "College Events" },
    { href: "/use/sporting-events", label: "Sporting Events" },
    { href: "/use/social-clubs", label: "Social Clubs" },
    { href: "/use/corporate-events", label: "Corporate Events" },
  ]), []);

  return (
    <div className="flex items-center gap-3">
      <nav className="hidden md:flex items-center gap-7 text-sm text-white/80">
        {items.map(i => (
          <Link key={i.href} className="hover:text-white transition" href={i.href}>{i.label}</Link>
        ))}
        <div className="relative group">
          <button className="hover:text-white transition">Use for</button>
          <div className="absolute top-full left-0 mt-2 hidden group-hover:block">
            <div className="w-56 rounded-2xl border border-white/10 bg-slate-950/95 backdrop-blur-xl p-2 shadow-glow">
              {useFor.map(u => (
                <Link key={u.href} href={u.href} className="block rounded-xl px-3 py-2 text-sm text-white/80 hover:bg-white/5 hover:text-white">
                  {u.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <Link className="hover:text-white transition" href="/demo">Demo</Link>
        <Link className="hover:text-white transition" href="/admin">Create Event</Link>
      </nav>

      <div className="hidden md:flex items-center gap-3">
        <Link href="/demo" className="text-sm text-white/80 hover:text-white transition">Login</Link>
        <Link
          href="/admin"
          className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm font-semibold bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400 hover:opacity-95 transition shadow-glow"
        >
          Create New Event
        </Link>
      </div>

      <button
        onClick={() => setOpen(v => !v)}
        className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-2xl border border-white/10 hover:border-white/20 transition"
        aria-label="Menu"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M3 5h14a1 1 0 010 2H3a1 1 0 110-2zm0 6h14a1 1 0 010 2H3a1 1 0 110-2zm0 6h14a1 1 0 010 2H3a1 1 0 110-2z" clipRule="evenodd"/>
        </svg>
      </button>

      {open && (
        <div className="absolute left-0 right-0 top-[73px] md:hidden border-b border-white/10 bg-slate-950/95 backdrop-blur-xl">
          <div className="mx-auto max-w-7xl px-4 py-4 grid gap-2 text-sm text-white/80">
            {items.map(i => (
              <Link key={i.href} className="rounded-xl px-3 py-2 hover:bg-white/5" href={i.href} onClick={() => setOpen(false)}>{i.label}</Link>
            ))}
            <Link className="rounded-xl px-3 py-2 hover:bg-white/5" href="/demo" onClick={() => setOpen(false)}>Demo</Link>
            <Link className="rounded-xl px-3 py-2 hover:bg-white/5" href="/admin" onClick={() => setOpen(false)}>Create Event</Link>
          </div>
        </div>
      )}
    </div>
  );
}

export function Shell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-slate-950/55 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <Brand />
            <Nav />
          </div>
        </div>
      </header>

      {children}

      <footer className="border-t border-white/10 bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 text-xs text-white/55">
          © {new Date().getFullYear()} Apres · <Link className="underline hover:no-underline" href="/privacy">Privacy</Link> ·{" "}
          <Link className="underline hover:no-underline" href="/terms">Terms</Link>
        </div>
      </footer>
    </>
  );
}
