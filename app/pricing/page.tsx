import Link from "next/link";
import { Shell } from "../components";

const Tier = ({ name, price, bullets, cta }: { name: string; price: string; bullets: string[]; cta: string }) => (
  <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
    <div className="text-lg font-semibold">{name}</div>
    <div className="mt-2 text-3xl font-extrabold">{price}</div>
    <ul className="mt-4 space-y-2 text-sm text-white/70 list-disc list-inside">
      {bullets.map(b => <li key={b}>{b}</li>)}
    </ul>
    <Link href="/admin" className="mt-6 inline-flex rounded-2xl px-5 py-3 text-sm font-semibold bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400 hover:opacity-95 transition shadow-glow">
      {cta}
    </Link>
  </div>
);

export default function PricingPage() {
  return (
    <Shell>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-sm text-white/70"><Link href="/">← Back</Link></div>
        <h1 className="mt-6 text-4xl font-extrabold tracking-tight">Pricing</h1>
        <p className="mt-3 text-white/70 max-w-2xl">
          Placeholder pricing for Apres. Replace with your real pricing model.
        </p>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Tier name="Starter" price="$0" cta="Create event" bullets={["Try the workflow", "Basic matching", "Local demo storage"]} />
          <Tier name="Pro" price="$49 / event" cta="Start Pro" bullets={["Cloud storage (R2/S3)", "Guest access on any device", "Branding + analytics"]} />
          <Tier name="Studio" price="Custom" cta="Talk to us" bullets={["High-volume events", "SLA + support", "API / integrations"]} />
        </div>
      </div>
    </Shell>
  );
}
