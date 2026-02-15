# OWSH Studio Site Review

**Reviewed:** 2026-02-15  
**Status:** Ready for deploy with minor items

---

## Fixed Issues

- [x] `owsh.com` link → changed to `owshunlimited.com` (Noah doesn't own owsh.com)
- [x] Work page placeholder "?" emoji → replaced with clean "Your project here" text
- [x] PWA icons created (icon-192.png, icon-512.png)
- [x] McLear's images added from real project
- [x] Removed unused Next.js default SVGs

---

## Needs Attention Before Launch

### Critical

| Issue | Location | Action Needed |
|-------|----------|---------------|
| **Contact form doesn't send** | `/contact` | Hook up to email service (Resend, Formspree, or Vercel form) |
| **McLear's URL** | `/work`, `/work/mclears-cottage-colony` | Verify correct URL - currently says `mclears.com` |
| **Noah's photo** | `/about` | Add real photo to replace "Photo coming soon" |

### Social Links (Verify These Exist)

| Platform | URL | Exists? |
|----------|-----|---------|
| Instagram | instagram.com/owshstudio | ? |
| Facebook | facebook.com/owshstudio | ? |
| LinkedIn | linkedin.com/company/owshstudio | ? |

Update in `/contact`, `/src/components/Footer.tsx` if URLs are different.

---

## Enhancement Ideas

### Quick Wins

1. **Add phone number** - Local businesses often prefer calling. Add to contact page + footer.

2. **Pricing comparison** - Show "$185/mo vs $5,000+ agency" more prominently to emphasize value.

3. **More FAQ questions:**
   - "Do you work with businesses outside Buffalo?"
   - "How long does a typical project take?"
   - "What happens if I need changes after launch?"

4. **Scroll-to-top button** - Nice UX for long pages.

5. **Sitemap link in footer** - Minor SEO signal.

### Medium Effort

6. **Add more testimonials** - Homepage has one from Janet McLear. Add more as you get them.

7. **Case study metrics** - McLear's case study could show results (traffic increase, bookings, etc.) once you have data.

8. **Blog/Resources section** - Future SEO play. Not needed for launch.

9. **Client portal link** - Future feature. Add to nav when ready.

### Design Polish

10. **Loading skeletons** - Add skeleton loaders for images instead of blank space while loading.

11. **404 page** - Already exists but could add a search or popular links.

12. **Micro-interactions** - Button hover states are good. Could add more subtle animations.

---

## Code Quality Notes

- TypeScript is clean, no major issues
- Two `@ts-expect-error` comments in hero for animation delay - acceptable
- Framer Motion usage is solid
- Tailwind classes are well-organized
- Component structure is clean

---

## Performance Checklist

- [ ] Run Lighthouse audit after deploy
- [ ] Test on real mobile devices
- [ ] Check load time on slow 3G
- [ ] Verify images are optimized (Next.js handles this)
- [ ] Test form submission flow

---

## Deploy Checklist

1. [ ] Connect Vercel to repo
2. [ ] Set custom domain (owshstudio.com)
3. [ ] Configure DNS
4. [ ] Set up contact form backend
5. [ ] Add analytics (Plausible or GA4)
6. [ ] Test all links
7. [ ] Test contact form end-to-end
8. [ ] Submit to Google Search Console

---

*Site is solid. Main blocker is contact form backend.*
