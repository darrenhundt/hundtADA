export function Process() {
  const steps = [
    {
      number: "1",
      title: "Free Consultation",
      description:
        "Quick call to understand your situation—whether you've received a demand letter or want to prevent one.",
    },
    {
      number: "2",
      title: "Comprehensive Audit",
      description:
        "I'll scan your entire Shopify store for WCAG 2.1 AA violations and provide a detailed report.",
    },
    {
      number: "3",
      title: "Remediation",
      description:
        "I fix every issue—theme code, images, forms, navigation. You'll have full documentation of all changes.",
    },
    {
      number: "4",
      title: "Validation & Support",
      description:
        "Final testing with assistive technologies, plus ongoing support to maintain compliance.",
    },
  ]

  return (
    <section id="process" className="px-6 py-24 sm:py-32 lg:px-8 bg-card border-y border-border">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            A straightforward process to get your store compliant and protected.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-border -translate-x-1/2" />
              )}
              <div className="flex flex-col items-start">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground text-2xl font-semibold mb-4">
                  {step.number}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
