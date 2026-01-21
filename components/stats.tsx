export function Stats() {
  const stats = [
    { value: "10+", label: "Years Shopify Experience" },
    { value: "48hr", label: "Response Time" },
    { value: "100%", label: "WCAG 2.1 Compliance" },
    { value: "0", label: "Lawsuits After Remediation" },
  ]

  return (
    <section className="border-y border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
