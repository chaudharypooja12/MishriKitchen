import Link from "next/link";
import { CONTACT } from "@/lib/constants";
import { services } from "@/data/services";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/categories", label: "Categories" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="grain-overlay relative mt-auto border-t border-border bg-gradient-to-b from-surface/90 to-bg-deep/95 backdrop-blur-xl">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display bg-gradient-to-r from-cyan-600 via-fuchsia-600 to-violet-700 bg-clip-text text-xl font-bold text-transparent">
            Mishri Kitchen
          </p>
          <p className="mt-3 text-sm leading-relaxed text-text-muted">
            Premium modular kitchens & home interiors across Delhi NCR — 14+ years
            of Mishri delivery.
          </p>
          <div className="mt-4 flex flex-col gap-1 text-sm">
            <a className="text-wood transition hover:text-gold hover:underline" href={CONTACT.tel1}>
              {CONTACT.phone1_display}
            </a>
            <a
              className="text-whatsapp transition hover:brightness-110 hover:underline"
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp us
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-widest text-wood">
            Quick links
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-text-muted transition hover:text-wood hover:underline"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-widest text-wood">
            Services
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {services.map((s) => (
              <li key={s.id}>
                <Link
                  href="/services"
                  className="text-text-muted transition hover:text-wood hover:underline"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-widest text-wood">
            Visit
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-text-muted">
            {CONTACT.address.line1}
            <br />
            {CONTACT.address.line2}
            <br />
            {CONTACT.address.city} – {CONTACT.address.pin}
          </p>
          <p className="mt-3 text-sm text-text-muted">{CONTACT.hours}</p>
        </div>
      </div>

      <div className="border-t border-border py-4 text-center text-xs text-text-muted">
        © {new Date().getFullYear()} {CONTACT.brandName}. All rights reserved.
      </div>
    </footer>
  );
}
