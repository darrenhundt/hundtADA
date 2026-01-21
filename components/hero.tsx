import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <div className="mb-8 flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-card px-4 py-2 text-sm font-medium text-foreground border border-border shadow-sm">
            <Shield className="h-4 w-4 text-accent" />
            <span>Protect Your Shopify Store</span>
          </div>
        </div>

        <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
          ADA Compliance for Shopify Stores
        </h1>

        <p className="mt-6 text-lg leading-relaxed text-muted-foreground max-w-2xl mx-auto text-pretty">
          Got a demand letter? Worried about accessibility lawsuits? With 10+ years of Shopify expertise, 
          I help store owners become fully ADA compliant—fast.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" asChild className="w-full sm:w-auto">
            <Link href="#contact">
              Get Your Free Audit
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild className="w-full sm:w-auto bg-transparent">
            <Link href="#services">View Services</Link>
          </Button>
        </div>

        <p className="mt-6 text-sm text-muted-foreground">
          Respond to demand letters within 48 hours
        </p>
      </div>
    </section>
  )
}
