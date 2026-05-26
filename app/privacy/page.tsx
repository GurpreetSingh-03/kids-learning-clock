import Link from "next/link";
import { ArrowLeft, ShieldCheck, EyeOff, Lock, Heart } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import FadeIn from "@/components/FadeIn";
import ClientBackgroundShapes from "@/components/ClientBackgroundShapes";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen relative flex flex-col items-center px-4 py-8 overflow-hidden bg-slate-50">
      <ClientBackgroundShapes />

      <div className="w-full max-w-2xl z-10 flex flex-col gap-6">
        {/* Back Navigation & Breadcrumbs */}
        <div className="w-full flex flex-col sm:flex-row sm:items-center justify-between gap-3 select-none">
          <div className="flex items-center gap-3">
            <Link href="/">
              <span className="p-2.5 bg-white/80 hover:bg-white text-purple-600 rounded-xl transition-colors border border-slate-200 shadow-sm flex items-center gap-2 cursor-pointer font-bold text-xs md:text-sm">
                <ArrowLeft className="w-5 h-5" />
                Main Menu
              </span>
            </Link>
            <Breadcrumbs items={[{ name: "Privacy Policy", href: "/privacy" }]} />
          </div>
          <div className="bg-emerald-600 text-white font-extrabold px-4 py-1.5 rounded-full text-xs md:text-sm shadow-sm select-none flex items-center gap-1.5 w-fit self-end sm:self-auto">
            <ShieldCheck className="w-4 h-4" />
            Kid Safe
          </div>
        </div>

        {/* Content Card */}
        <FadeIn>
          <div className="bg-white/90 backdrop-blur-md border-4 border-purple-200 rounded-3xl p-6 md:p-8 shadow-xl">
            <h1 className="text-3xl font-black text-purple-700 font-sans tracking-wide mb-2 select-none">
              Privacy Policy
            </h1>
            <p className="text-slate-500 font-bold mb-6 select-none">
              Last Updated: May 2026
            </p>

            <div className="space-y-6 text-slate-700 text-base md:text-lg leading-relaxed font-medium">
              <div>
                <h2 className="text-xl font-extrabold text-purple-600 mb-2 flex items-center gap-2 select-none">
                  <Heart className="w-6 h-6 text-purple-500" />
                  Our Commitment to Child Safety & COPPA Guidelines
                </h2>
                <p>
                  At <strong className="font-extrabold text-purple-700">Tick Tock Time</strong>, we take children's privacy extremely seriously. Our website is designed for kids, parents, and educators. We do not collect personal information from children and are committed to protecting children's privacy in accordance with the <strong className="font-extrabold text-purple-700">Children's Online Privacy Protection Act (COPPA)</strong> guidelines.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-extrabold text-purple-600 mb-2 flex items-center gap-2 select-none">
                  <EyeOff className="w-6 h-6 text-purple-500" />
                  No Personal Information Collected
                </h2>
                <p>
                  We do not collect any personal information (such as name, email address, physical address, or phone number) from our users. 
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>No user registration or account creation is required.</li>
                  <li>We do not save game scores, user preferences, or tracking identifiers to any servers.</li>
                  <li>Everything runs entirely locally within your web browser.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-extrabold text-purple-600 mb-2 flex items-center gap-2 select-none">
                  <Lock className="w-6 h-6 text-purple-500" />
                  No Cookies or Advertising Tracking
                </h2>
                <p>
                  We do not use cookie identifiers to track users across other websites. We do not integrate targeted advertising SDKs or third-party marketing trackers in our kids' game environment. 
                </p>
              </div>

              <div>
                <h2 className="text-xl font-extrabold text-purple-600 mb-2 flex items-center gap-2 select-none">
                  <ShieldCheck className="w-6 h-6 text-purple-500" />
                  Hosting and Services
                </h2>
                <p>
                  Our game code is served securely over HTTPS. Standard server connection logging (such as anonymized IP addresses and browser configurations) is collected momentarily by hosting providers solely to deliver assets and maintain system stability.
                </p>
              </div>

              <div className="pt-6 border-t border-slate-100 select-none">
                <p className="text-sm text-slate-500 font-bold">
                  If you have any questions or concerns regarding child safety and privacy in Tick Tock Time, please contact us at: 
                  <span className="block mt-1 text-purple-600">kidslearningclock@gmail.com</span>
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </main>
  );
}
