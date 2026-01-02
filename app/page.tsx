import Link from "next/link";
import { Shell } from "./components";

const UseCard = ({ title, desc, href }: { title: string; desc: string; href: string }) => (
  <Link href={href} className="group rounded-3xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition">
    <div className="text-lg font-semibold">{title}</div>
    <div className="mt-2 text-sm text-white/70">{desc}</div>
    <div className="mt-4 text-xs text-white/60 group-hover:text-white/80">Read more →</div>
  </Link>
);

export default function Page() {
  return (
    <Shell>
      <main className="relative">
        <div
          className="absolute inset-0 opacity-90"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25% 15%, rgba(255, 64, 129, 0.25), transparent 35%)," +
              "radial-gradient(circle at 70% 25%, rgba(0, 200, 255, 0.22), transparent 40%)," +
              "radial-gradient(circle at 65% 80%, rgba(139, 92, 246, 0.25), transparent 45%)," +
              "radial-gradient(circle at 25% 85%, rgba(34, 197, 94, 0.18), transparent 45%)," +
              "linear-gradient(to bottom right, rgba(255,255,255,0.06), rgba(255,255,255,0))",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-14 pb-14 lg:pt-20">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/70">
                <span className="h-2 w-2 rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-400"></span>
                Share event photos using face matching
              </div>

              <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.03]">
                Guests use a quick selfie —{" "}
                <span className="bg-gradient-to-r from-fuchsia-400 via-violet-300 to-cyan-300 bg-clip-text text-transparent">
                  instantly find their photos.
                </span>
              </h1>

              <p className="mt-5 text-white/75 text-lg max-w-xl">
                Apres helps photographers and organizers deliver private, fast, shareable galleries with optional monetization.
              </p>

              <div className="mt-7 flex flex-col sm:flex-row gap-3 sm:items-center">
                <Link href="/admin" className="inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400 hover:opacity-95 transition shadow-glow">
                  Create New Event
                </Link>
                <Link href="/demo" className="inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold border border-white/12 bg-white/5 hover:bg-white/10 transition">
                  Try the demo
                </Link>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-3 max-w-xl">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-2xl font-extrabold">Fast</div>
                  <div className="text-xs text-white/60 mt-1">ranked matches</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-2xl font-extrabold">Private</div>
                  <div className="text-xs text-white/60 mt-1">consent-first</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-2xl font-extrabold">Monetize</div>
                  <div className="text-xs text-white/60 mt-1">optional sales</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-6 blur-3xl opacity-70"
                style={{
                  background:
                    "radial-gradient(circle at 30% 30%, rgba(236,72,153,.35), transparent 45%)," +
                    "radial-gradient(circle at 70% 35%, rgba(34,211,238,.28), transparent 50%)," +
                    "radial-gradient(circle at 55% 80%, rgba(139,92,246,.32), transparent 55%)",
                }}
              />
              <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 shadow-glow p-6">
                <div className="text-sm font-semibold">Gallery preview</div>
                <div className="mt-4 grid grid-cols-6 gap-2">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <div key={i} className="aspect-square rounded-xl bg-gradient-to-br from-fuchsia-500/20 to-transparent border border-white/10" />
                  ))}
                </div>
                <div className="mt-5 rounded-2xl border border-white/10 bg-slate-950/40 p-4">
                  <div className="text-sm font-semibold">Selfie → matched photos</div>
                  <div className="mt-1 text-xs text-white/65">Try /demo or create an event in /admin.</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-14 rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="text-sm font-semibold text-white/80">Trusted by photographers & organizers</div>
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="h-12 rounded-2xl border border-white/10 bg-slate-950/30 grid place-items-center text-xs text-white/55">
                  Brand
                </div>
              ))}
            </div>
          </div>

          <section className="mt-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Works for all types of events. Any size.</h2>
            <p className="mt-3 text-white/70 max-w-2xl">Weddings, races, corporate events, schools, clubs — anywhere there are photos and people.</p>

            <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <UseCard title="Weddings" desc="Delight guests by sharing their moments privately." href="/use/weddings" />
              <UseCard title="Private events" desc="Birthdays, anniversaries, reunions, etc." href="/use/private-events" />
              <UseCard title="College events" desc="Convocations, alumni meets, yearbooks." href="/use/college-events" />
              <UseCard title="Sporting events" desc="Races, tournaments, clubs, marathons." href="/use/sporting-events" />
              <UseCard title="Social clubs" desc="Member galleries without spammy apps." href="/use/social-clubs" />
              <UseCard title="Corporate events" desc="Conferences, retreats, internal comms." href="/use/corporate-events" />
            </div>
          </section>

          <section className="mt-14 rounded-[2rem] border border-white/10 bg-white/5 p-8 lg:p-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">How it works</h2>
            <div className="mt-8 grid lg:grid-cols-3 gap-4">
              <div className="rounded-3xl border border-white/10 bg-slate-950/30 p-6">
                <div className="text-xs text-white/60">01</div>
                <div className="mt-2 text-lg font-semibold">Create event & upload</div>
                <div className="mt-2 text-sm text-white/70">Set an event link and upload photos.</div>
              </div>
              <div className="rounded-3xl border border-white/10 bg-slate-950/30 p-6">
                <div className="text-xs text-white/60">02</div>
                <div className="mt-2 text-lg font-semibold">Guests take a selfie</div>
                <div className="mt-2 text-sm text-white/70">Guests use the camera for matching.</div>
              </div>
              <div className="rounded-3xl border border-white/10 bg-slate-950/30 p-6">
                <div className="text-xs text-white/60">03</div>
                <div className="mt-2 text-lg font-semibold">View & download</div>
                <div className="mt-2 text-sm text-white/70">Show best matches first. Add purchases later.</div>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link href="/admin" className="rounded-2xl px-5 py-3 text-sm font-semibold bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400 hover:opacity-95 transition shadow-glow">
                Create New Event
              </Link>
              <Link href="/pricing" className="rounded-2xl px-5 py-3 text-sm font-semibold border border-white/12 bg-white/5 hover:bg-white/10 transition">
                View pricing
              </Link>
            </div>
          </section>

          <section className="mt-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Frequently asked questions</h2>
            <p className="mt-3 text-white/70 max-w-2xl">Short answers here — full list in the FAQ page.</p>

            <div className="mt-6 grid gap-3">
              {[
                ["How accurate is matching?", "Accuracy depends on lighting and image quality. We rank best matches first."],
                ["Is it private?", "Yes. We recommend explicit consent and clear retention rules in production."],
                ["Can I sell photos?", "Yes. Add checkout/paywall when you’re ready (Stripe)."],
              ].map(([q,a]) => (
                <div key={q} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                  <div className="font-semibold">{q}</div>
                  <div className="mt-2 text-sm text-white/70">{a}</div>
                </div>
              ))}
              <Link href="/faq" className="text-sm text-white/80 hover:text-white underline hover:no-underline w-fit">See all FAQs →</Link>
            </div>
          </section>
        </div>
      </main>
    </Shell>
  );
}
