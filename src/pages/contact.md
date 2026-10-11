---
import { getEntry } from 'astro:content';
import BaseLayout from '../layouts/BaseLayout.astro';

const entry = await getEntry('pages', 'contact');
---

<BaseLayout title="Contact & Inquiries — Erika Lacroix" activeNav="contact">
  <div class="max-w-2xl mx-auto px-6 sm:px-10 py-20 sm:py-28 text-center">
    <p class="text-[10px] uppercase tracking-[0.3em] text-stone-400 font-medium">Get in Touch</p>
    <h1 class="font-serif-art text-4xl sm:text-5xl font-light text-stone-950 mt-2 mb-6">
      {entry?.data.title || "Studio & Inquiries"}
    </h1>

    <p class="text-stone-600 text-sm leading-relaxed font-light max-w-md mx-auto">
      {entry?.data.intro || "For acquisitions, commissions, exhibition opportunities, or private studio viewings."}
    </p>

    <div class="mt-10 space-y-4">
      {entry?.data.email && (
        <div>
          <a
            href={`mailto:${entry.data.email}`}
            class="font-serif-art text-2xl sm:text-3xl text-stone-900 border-b border-stone-900/60 pb-1 hover:text-stone-500 transition-colors"
          >
            {entry.data.email}
          </a>
        </div>
      )}

      {entry?.data.location && (
        <p class="text-[11px] uppercase tracking-[0.25em] text-stone-400 pt-4">
          {entry.data.location}
        </p>
      )}
    </div>
  </div>
</BaseLayout>
