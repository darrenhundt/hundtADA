import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="text-lg font-semibold text-foreground">AccessibleShop</span>
            <p className="text-sm text-muted-foreground text-center md:text-left">
              Shopify ADA compliance expertise since 2015.
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-6">
            <Link
              href="#services"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Services
            </Link>
            <Link
              href="#process"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              How It Works
            </Link>
            <Link
              href="#contact"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </Link>
          </nav>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} AccessibleShop. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
