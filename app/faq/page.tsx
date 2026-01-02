"use client";
import Link from "next/link";
import { Shell } from "../components";
import { useState } from "react";

const Q = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <button onClick={() => setOpen(v=>!v)} className="w-full flex items-center justify-between text-left">
        <div className="font-semibold">{q}</div>
        <span className="text-white/60">{open ? "–" : "+"}</span>
      </button>
      {open && <div className="mt-3 text-sm text-white/70">{a}</div>}
    </div>
  );
};

export default function FAQPage() {
  return (
    <Shell>
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-sm text-white/70"><Link href="/">← Back</Link></div>
        <h1 className="mt-6 text-4xl font-extrabold tracking-tight">FAQ</h1>

        <div className="mt-10 grid gap-3">
          <Q q="How accurate is face matching?" a="Accuracy depends on lighting, occlusion, and face size. We show top matches first." />
          <Q q="Is it secure and private?" a="Add consent + clear retention rules. Production should use secure cloud storage and access controls." />
          <Q q="Can I sell photos?" a="Yes—integrate Stripe and set your own pricing per photo or pack." />
          <Q q="How do guests access photos?" a="They open the event link and use the camera to match. No accounts required for guests (optional)." />
          <Q q="Can I embed this on my site?" a="Yes, link to /event/<id> or embed within your own pages." />
        </div>
      </div>
    </Shell>
  );
}
