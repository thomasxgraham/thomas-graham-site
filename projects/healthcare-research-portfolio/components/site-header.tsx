import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/archive", label: "Archive" },
  { href: "/contact", label: "Contact" },
  { href: "/system", label: "System" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link href="/" className="site-brand" aria-label="Thomas Graham home">
          <span className="site-brand__monogram">TG</span>
          <span className="site-brand__text">
            <strong>Thomas Graham</strong>
            <span>Research strategy and editorial portfolio</span>
          </span>
        </Link>
        <nav className="site-nav" aria-label="Primary">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
