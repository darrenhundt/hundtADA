"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

interface ContactFormData {
  name: string
  email: string
  store: string
  urgency: string
  message: string
}

const urgencyLabels: Record<string, string> = {
  "demand-letter": "Received a demand letter (URGENT)",
  "prevention": "Wants to prevent lawsuits",
  "audit": "Needs an accessibility audit",
  "remediation": "Needs help fixing issues",
  "other": "Other inquiry",
}

export async function sendContactEmail(data: ContactFormData) {
  const { name, email, store, urgency, message } = data

  const urgencyLabel = urgencyLabels[urgency] || urgency
  const isUrgent = urgency === "demand-letter"

  try {
    await resend.emails.send({
      from: "AccessibleShop <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL!,
      subject: `${isUrgent ? "[URGENT] " : ""}New Lead: ${name} - ${urgencyLabel}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1a1a1a; border-bottom: 2px solid ${isUrgent ? "#dc2626" : "#22c55e"}; padding-bottom: 10px;">
            ${isUrgent ? "URGENT: " : ""}New Lead from AccessibleShop
          </h2>
          
          <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; width: 140px;">Name:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold;">Email:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;">
                <a href="mailto:${email}" style="color: #2563eb;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold;">Store URL:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;">
                ${store ? `<a href="https://${store.replace(/^https?:\/\//, "")}" style="color: #2563eb;">${store}</a>` : "Not provided"}
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold;">Situation:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; ${isUrgent ? "color: #dc2626; font-weight: bold;" : ""}">${urgencyLabel}</td>
            </tr>
          </table>

          ${message ? `
            <h3 style="color: #1a1a1a; margin-top: 24px;">Message:</h3>
            <div style="background: #f9fafb; padding: 16px; border-radius: 8px; white-space: pre-wrap;">${message}</div>
          ` : ""}

          <p style="color: #6b7280; font-size: 14px; margin-top: 32px;">
            Reply directly to this email to respond to ${name}.
          </p>
        </div>
      `,
      replyTo: email,
    })

    return { success: true }
  } catch (error) {
    console.error("Failed to send email:", error)
    return { success: false, error: "Failed to send email" }
  }
}
