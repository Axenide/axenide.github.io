+++
title = "Axenide"
insert_anchor_links = "left"
[extra]
no_header = true
badges = [
  { name = "adhd.gif", url = "https://en.wikipedia.org/wiki/Attention_deficit_hyperactivity_disorder" },
  { name = "dark-mode.gif", url = "https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme" },
  { name = "mobilefriendly.gif", url = "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Responsive_Design" },
  { name = "righttorepair.gif", url = "https://www.ifixit.com/Right-to-Repair" },
  { name = "standwith.gif", url = "https://decolonizepalestine.com" },
  { name = "vscodium.gif", url = "https://vscodium.com" },
]
+++

<section class="snap-section hero-wrapper">
<div class="hero-container">
<div class="hero-content">
{{ retro_text(text="Axenide", tag="h1") }}
<p style="font-size: 1rem; margin-bottom: 2rem; line-height: 1.6;">
I'm <mark>Adriano Tisera</mark>, known on the Internet as <mark>Axenide</mark>. Future computer engineer, technologist, and scientist. I'm a programmer, I make videos, music, animation, and video games...<br>Among other things.
</p>
<div>
{{ styled_button(image="/social-icons/16x/youtube_icon_bg.png", link="https://www.youtube.com/@Axenide", width="32px", effect="zoom rotate", rotate="-15") }}
{{ styled_button(image="/social-icons/16x/twitch_icon_bg.png", link="https://www.twitch.tv/Axenide", width="32px", effect="zoom rotate", rotate="-15") }}
{{ styled_button(image="/social-icons/16x/xtwitter_icon_bg.png", link="https://x.com/Axenide", width="32px", effect="zoom rotate", rotate="-15") }}
{{ styled_button(image="/social-icons/16x/instagram_icon_bg.png", link="https://www.instagram.com/Axenide", width="32px", effect="zoom rotate", rotate="-15") }}
{{ styled_button(image="/social-icons/16x/github_icon_bg.png", link="https://github.com/Axenide", width="32px", effect="zoom rotate", rotate="-15") }}
{{ styled_button(image="/social-icons/16x/discord_icon_bg.png", link="https://discord.com/invite/gHG9WHyNvH", width="32px", effect="zoom rotate", rotate="-15") }}
{{ styled_button(image="/social-icons/16x/kofi_icon_bg.png", link="https://ko-fi.com/Axenide", width="32px", effect="zoom rotate", rotate="-15") }}
</div>
</div>
    
{{ retro_avatar(src="/images/avatar.png", alt="Axenide") }}
</div>

<div class="scroll-indicator" onclick="document.querySelector('#more').scrollIntoView({behavior: 'smooth'})">
<div class="bounce-inner">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="32" height="32"><rect width="256" height="256" fill="none"/><polyline points="208 96 128 176 48 96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
</div>
</div>
</section>

<section class="snap-section content-wrapper" id="more">
<div style="width: 100%;">
<h2>About</h2>
<ul class="masonry">
<!-- Card Start: Intro -->
<li>
<article>

I'm a polymath from Mendoza, Argentina. I’ve always been drawn to technology and science, and I love making things like code, music, animations, videos, and games.

I love learning new skills and exploring different fields. My mind is always buzzing with ideas, and I enjoy diving deep into topics that catch my interest.

I’m {{ age() }} years old.

</article>
</li>

<!-- Card Start: Interests -->
<li>
<article class="fancy-list">

**I think these are neat:**
- Red
- Open Source
- Retro tech
- Astronomy
- Physics
- Cartoons
- Frutiger Aero
- Pixel Art
- You
- Sans Undertale

</article>
</li>

<li>
<article>

I’m obsessed with building my own tools and workflows. People say not to reinvent the wheel, but I think custom tools can unlock freedom and innovation. Just like every person is unique, the tools they use can be too.

</article>
</li>

<!-- Card Start: Tile Embed -->
<li>
<article>
{{ tile_embed() }}
</article>
</li>

<li>
<article>

My curiosity about computers led me into computer engineering, where I get to merge creativity with tech. I have a nostalgic side, and I often mix retro aesthetics like pixel art and chiptune with modern techniques to craft unique experiences.

</article>
</li>

<!-- Card Start: Games -->
<li>
<article class="fancy-list games">

**Games I like:**

{{ games() }}
</article>
</li>

</ul>

<div id="indieweb" style="margin-top: 3rem;">
<h2>IndieWeb</h2>
{{ badges() }}

Simply put, IndieWeb is anything on the web that is hand-crafted and feels personal.
</div>
</div>
</section>

<script>
  document.addEventListener('DOMContentLoaded', () => {
    const indicator = document.querySelector('.scroll-indicator');
    
    function updateIndicator() {
      // Logic for the scroll indicator visibility
      if (window.scrollY > 150) {
        indicator.classList.add('hidden');
      } else {
        indicator.classList.remove('hidden');
      }

      // Logic to release scroll snapping after the first section
      // This allows free scrolling in the tall content section
      if (window.scrollY > window.innerHeight * 0.9) {
        document.documentElement.style.scrollSnapType = 'none';
      } else {
        document.documentElement.style.scrollSnapType = 'y mandatory';
      }
    }

    // Check on load, but also allow a small delay to ensure layout is settled
    setTimeout(updateIndicator, 100); 
    
    window.addEventListener('scroll', updateIndicator, { passive: true });
  });
</script>
