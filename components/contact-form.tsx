"use client"

import React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { CheckCircle2 } from "lucide-react"
import { sendContactEmail } from "@/app/actions/send-contact-email"

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      store: formData.get("store") as string,
      urgency: formData.get("urgency") as string,
      message: formData.get("message") as string,
    }

    const result = await sendContactEmail(data)

    setIsSubmitting(false)
    if (result.success) {
      setSubmitted(true)
    } else {
      setError("Something went wrong. Please try again or email me directly.")
    }
  }

  if (submitted) {
    return (
      <section id="contact" className="px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <div className="flex justify-center mb-6">
            <CheckCircle2 className="h-16 w-16 text-accent" />
          </div>
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Thank You!
          </h2>
          <p className="text-muted-foreground">
            I{"'"}ve received your message and will get back to you within 24 hours.
            If you{"'"}ve received a demand letter, I{"'"}ll prioritize your request.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Get Your Free Audit
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Tell me about your Shopify store and I{"'"}ll provide a free accessibility assessment.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                placeholder="Your name"
                required
                className="bg-card"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="you@company.com"
                required
                className="bg-card"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="store">Shopify Store URL</Label>
            <Input
              id="store"
              name="store"
              placeholder="yourstore.myshopify.com"
              className="bg-card"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="urgency">How can I help?</Label>
            <Select name="urgency" required>
              <SelectTrigger className="bg-card">
                <SelectValue placeholder="Select your situation" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="demand-letter">I received a demand letter</SelectItem>
                <SelectItem value="prevention">I want to prevent lawsuits</SelectItem>
                <SelectItem value="audit">I need an accessibility audit</SelectItem>
                <SelectItem value="remediation">I need help fixing issues</SelectItem>
                <SelectItem value="other">Something else</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Tell me more</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Any details about your store, timeline, or specific concerns..."
              rows={4}
              className="bg-card resize-none"
            />
          </div>

          {error && (
            <p className="text-sm text-destructive text-center">{error}</p>
          )}

          <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>

          <p className="text-center text-sm text-muted-foreground">
            I respond to all inquiries within 24 hours. Demand letter responses within 48 hours.
          </p>
        </form>
      </div>
    </section>
  )
}
