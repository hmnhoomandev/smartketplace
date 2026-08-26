import Link from "next/link";
import CategoryMegaMenu from "@/components/CategoryMegaMenu";

// Liens de la barre de navigation secondaire, en plus du méga-menu Catégories.
// Pour ajouter un nouvel élément plus tard, il suffit d'ajouter une ligne ici.
const NAV_LINKS = [
  { label: "Associations membres", href: "/#membres" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  return (
    <header className="border-b border-gray-200 bg-white">
      {/* Barre du haut : logo + connexion / inscription */}
      <div className="border-b border-gray-100">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          <Link href="/" className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/kultura-logo.svg"
              alt="Kultura"
              className="h-7 w-auto"
            />
            <span className="flex flex-col leading-tight">
              <span className="text-lg font-bold text-brand">
                SmartketPlace
              </span>
              <span className="hidden text-xs text-gray-500 sm:block">
                Un projet de Kultura
              </span>
            </span>
          </Link>

          <div className="flex items-center gap-1.5 sm:gap-2">
            <Link
              href="/login"
              className="rounded-md px-2 py-1.5 text-xs font-medium text-gray-700 hover:bg-brand-light hover:text-brand sm:px-3 sm:text-sm"
            >
              Se connecter
            </Link>
            <Link
              href="/signup"
              className="rounded-md bg-brand px-2 py-1.5 text-xs font-medium text-white hover:bg-brand-dark sm:px-3 sm:text-sm"
            >
              S&apos;inscrire
            </Link>
          </div>
        </div>
      </div>

      {/* Barre de navigation secondaire : catégories, associations, contact... */}
      <nav className="mx-auto flex max-w-6xl items-center gap-1 overflow-x-auto px-4 py-1 sm:px-6">
        <CategoryMegaMenu />
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="shrink-0 rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-brand-light hover:text-brand"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
