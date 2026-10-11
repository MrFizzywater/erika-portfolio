---
import { getEntry, render } from 'astro:content';
import BaseLayout from '../layouts/BaseLayout.astro';
import ArtImage from '../components/ArtImage.astro';

const entry = await getEntry('pages', 'about');
const rendered = entry ? await render(entry) : null;
const { Content } = rendered || {};
---

<BaseLayout title="About & Statement — Erika Lacroix" activeNav="about">
  <div class="max-w-3xl mx-auto px-6 sm:px-10 py-16 sm:py-24">
    <div class="space-y-8">
      <div>
        <p class="text-[10px] uppercase tracking-[0.3em] text-stone-400 font-medium">Artist Statement</p>
        <h1 class="font-serif-art text-4xl sm:text-5xl font-light text-stone-950 mt-2">
          {entry?.data.title || "About Erika Lacroix"}
        </h1>
      </div>

      {entry?.data.headline && (
        <blockquote class="font-serif-art text-2xl sm:text-3xl font-light italic leading-snug text-stone-800 border-l-2 border-stone-300 pl-6 my-8">
          "{entry.data.headline}"
        </blockquote>
      )}

      {entry?.data.portraitImage && (
        <div class="my-10 max-w-lg border border-stone-200">
          <ArtImage path={entry.data.portraitImage} alt="Erika Lacroix Studio" />
        </div>
      )}

      <div class="prose prose-stone text-stone-700 font-light leading-relaxed text-base space-y-6 pt-4 border-t border-stone-200/80">
        {Content ? <Content /> : (
          <p>Erika Lacroix is an abstract and mixed media artist exploring texture, cold wax medium, and layered history.</p>
        )}
      </div>
    </div>
  </div>
</BaseLayout>
