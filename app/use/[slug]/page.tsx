import Link from "next/link";
import { Shell } from "../../components";

const copy: Record<string, { title: string; bullets: string[] }> = {
  "weddings": { title: "Weddings", bullets: ["Private guest delivery", "Fast sharing", "Optional download rules"] },
  "private-events": { title: "Private Events", bullets: ["Birthdays, reunions, parties", "Simple event link", "Guests find their moments"] },
  "college-events": { title: "College Events", bullets: ["Convocations & alumni", "Large groups", "Easy family access"] },
  "sporting-events": { title: "Sporting Events", bullets: ["Races & tournaments", "Participants find photos quickly", "Monetize with purchases"] },
  "social-clubs": { title: "Social Clubs", bullets: ["Member-only sharing", "Sponsor branding", "Simple galleries"] },
  "corporate-events": { title: "Corporate Events", bullets: ["Conferences & retreats", "Brand-safe galleries", "Analytics-ready"] },
};

export default function UsePage({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const data = copy[slug] ?? { title: "Use Case", bullets: ["Tell us your use case and we’ll tailor the flow."] };

  return (
    <Shell>
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-sm text-white/70"><Link href="/">← Back</Link></div>
        <h1 className="mt-6 text-4xl font-extrabold tracking-tight">{data.title}</h1>
        <p className="mt-3 text-white/70 max-w-2xl">
          Apres can be tailored to this use case with event templates, branding, and download rules.
        </p>
        <ul className="mt-8 space-y-2 text-sm text-white/70 list-disc list-inside">
          {data.bullets.map(b => <li key={b}>{b}</li>)}
        </ul>
        <div className="mt-8 flex gap-3">
          <Link href="/admin" className="rounded-2xl px-5 py-3 text-sm font-semibold bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400 hover:opacity-95 transition shadow-glow">
            Create an event
          </Link>
          <Link href="/pricing" className="rounded-2xl px-5 py-3 text-sm font-semibold border border-white/12 bg-white/5 hover:bg-white/10 transition">
            View pricing
          </Link>
        </div>
      </div>
    </Shell>
  );
}
