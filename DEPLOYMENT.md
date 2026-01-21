# Deployment Guide: Getting Your Site Online with Custom Domain

## Cheapest Deployment Option: Vercel (FREE)

Vercel is the best choice for Next.js sites because:
- **100% Free** for personal/small business use
- Built by the Next.js team (perfect optimization)
- Easy custom domain setup
- Automatic SSL certificates
- Fast global CDN
- Automatic deployments from Git

### Step 1: Prepare Your Repository

1. Make sure your code is in a Git repository:
```bash
git init
git add .
git commit -m "Initial commit"
```

2. Push to GitHub, GitLab, or Bitbucket (all free)

### Step 2: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) and sign up (free)
2. Click "Add New Project"
3. Import your Git repository
4. Vercel will auto-detect Next.js settings
5. Add environment variables if needed:
   - `RESEND_API_KEY` (for contact form emails)
   - `CONTACT_EMAIL` (your email address)
6. Click "Deploy"

Your site will be live at `your-project.vercel.app` in about 2 minutes!

### Step 3: Add Custom Domain (FREE)

1. In Vercel dashboard, go to your project → Settings → Domains
2. Click "Add Domain"
3. Enter your domain (e.g., `accessibleshop.com`)
4. Follow Vercel's DNS instructions:
   - Add a CNAME record pointing to `cname.vercel-dns.com`
   - Or add an A record (Vercel will provide the IP)
5. Wait for DNS propagation (usually 5-60 minutes)
6. Vercel automatically provides SSL certificates (HTTPS)

**Domain Cost**: You'll need to buy a domain from:
- **Namecheap**: ~$10-15/year (cheapest)
- **Google Domains**: ~$12/year
- **Cloudflare**: ~$8-10/year (very cheap, includes privacy)

### Total Cost Breakdown

- **Hosting**: $0/month (Vercel free tier)
- **Domain**: ~$10/year
- **SSL Certificate**: FREE (included with Vercel)
- **CDN**: FREE (included with Vercel)

**Total: ~$10/year** (just the domain!)

## Alternative: Cloudflare Pages (Also FREE)

If you prefer Cloudflare:

1. Go to [pages.cloudflare.com](https://pages.cloudflare.com)
2. Connect your Git repository
3. Build command: `npm run build`
4. Output directory: `.next`
5. Deploy!

Cloudflare Pages also offers free custom domains and SSL.

## Blog Content Management

### Adding New Blog Posts

1. Create a new `.md` file in `/content/blog/`
2. Use this frontmatter template:

```markdown
---
title: "Your Blog Post Title"
date: "2024-01-20"
excerpt: "A brief description for the blog listing page"
author: "Your Name"
tags: ["Tag1", "Tag2", "Tag3"]
seoTitle: "SEO Optimized Title"
seoDescription: "SEO meta description (150-160 characters)"
---

Your blog content in Markdown format...
```

3. Save the file with a URL-friendly name (e.g., `shopify-accessibility-tips.md`)
4. Commit and push to Git
5. Vercel will automatically rebuild and deploy

### Blog Post SEO Tips

- **Title**: Include target keywords naturally
- **Excerpt**: 150-200 characters, compelling summary
- **Tags**: 3-5 relevant tags for categorization
- **Content**: Aim for 800-1500 words for SEO
- **Headings**: Use H2, H3 for structure
- **Internal Links**: Link to other blog posts and main pages
- **Images**: Include alt text for all images

### Publishing Schedule

For 4 posts per week:
- Monday: How-to guide
- Wednesday: Industry news/updates
- Friday: Case study or tips
- Sunday: FAQ or common questions

## Environment Variables Setup

Create a `.env.local` file (don't commit this):

```env
RESEND_API_KEY=your_resend_api_key_here
CONTACT_EMAIL=your-email@example.com
```

Get Resend API key:
1. Sign up at [resend.com](https://resend.com) (free tier: 3,000 emails/month)
2. Create API key
3. Add to Vercel environment variables

## Post-Deployment Checklist

- [ ] Custom domain connected and working
- [ ] SSL certificate active (HTTPS)
- [ ] Contact form sending emails
- [ ] Blog posts displaying correctly
- [ ] All images loading
- [ ] Mobile responsive design working
- [ ] Analytics tracking (Vercel Analytics already included)

## Need Help?

- Vercel Docs: [vercel.com/docs](https://vercel.com/docs)
- Next.js Docs: [nextjs.org/docs](https://nextjs.org/docs)
- Resend Docs: [resend.com/docs](https://resend.com/docs)

## Cost Summary

**Monthly**: $0  
**Yearly**: ~$10 (domain only)  
**Total First Year**: ~$10

This is the absolute cheapest way to host a Next.js site with a custom domain and blog functionality!

