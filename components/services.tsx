import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, Wrench, RefreshCw, FileText } from "lucide-react"

export function Services() {
  const services = [
    {
      icon: Search,
      title: "Accessibility Audit",
      description:
        "Comprehensive review of your Shopify store against WCAG 2.1 AA standards. Detailed report with prioritized fixes.",
      features: ["Full site scan", "WCAG 2.1 AA checklist", "Prioritized action plan", "Screen reader testing"],
      popular: false,
    },
    {
      icon: Wrench,
      title: "Full Remediation",
      description:
        "Complete fixes for all accessibility issues. Theme modifications, alt text, forms, navigation—everything.",
      features: ["All audit findings fixed", "Theme code updates", "Content accessibility", "Testing & validation"],
      popular: true,
    },
    {
      icon: RefreshCw,
      title: "Ongoing Compliance",
      description:
        "Monthly monitoring and maintenance to keep your store compliant as you add products and update content.",
      features: ["Monthly audits", "Priority support", "New content review", "Compliance certificate"],
      popular: false,
    },
    {
      icon: FileText,
      title: "Demand Letter Response",
      description:
        "Got a legal threat? Rapid response service with documentation to show good-faith compliance efforts.",
      features: ["48hr turnaround", "Remediation plan", "Compliance documentation", "Attorney coordination"],
      popular: false,
    },
  ]

  return (
    <section id="services" className="px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Services & Packages
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Every Shopify store is different. Get a custom quote based on your store{"'"}s size and complexity.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Card
              key={service.title}
              className={`relative flex flex-col ${service.popular ? "border-primary shadow-lg" : ""}`}
            >
              {service.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
                  Most Popular
                </Badge>
              )}
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-secondary">
                  <service.icon className="h-6 w-6 text-foreground" />
                </div>
                <CardTitle className="text-lg">{service.title}</CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="mt-12 text-center text-sm text-muted-foreground">
          All services include a detailed report and compliance documentation for your records.
        </p>
      </div>
    </section>
  )
}
