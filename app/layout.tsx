import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apres — Share Event Photos with Face Matching",
  description: "Apres helps guests find their photos instantly with a quick selfie.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              tailwind.config = {
                theme: { extend: {
                  boxShadow: { glow: "0 0 0 1px rgba(255,255,255,.12), 0 20px 60px rgba(0,0,0,.35)" }
                } }
              }
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-slate-950 text-white selection:bg-fuchsia-400/30 selection:text-white">
        <div className="h-1 w-full bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-lime-400" />
        {children}
      </body>
    </html>
  );
}
