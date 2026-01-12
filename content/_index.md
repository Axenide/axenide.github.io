+++
title = "Axenide"
insert_anchor_links = "left"
[extra]
no_header = true
badges = [
  { name = "Axenide", image = "images/88x31.gif", alt = "Axenide" },
  { name = "tr1xem", image = "https://trix.is-a.dev/badges/tr1xem_1.gif", url = "https://trix.is-a.dev/" }
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
<div id="scroll-target" style="position: absolute; bottom: 10px; left: 50%; width: 1px; height: 1px; animation: bounce-vertical 3s infinite ease-in-out; z-index: -1;"></div>
<style>
  @keyframes bounce-vertical {
    0%, 20%, 40%, 100% { transform: translate(-50%, 0); }
    10% { transform: translate(-50%, 15px); }
    30% { transform: translate(-50%, 15px); }
  }
</style>

<div class="scroll-indicator" onclick="document.querySelector('#more').scrollIntoView({behavior: 'smooth'})" style="position: absolute; width: 100%; bottom: 0; pointer-events: none; left: 0; right: auto;">
<div style="position: absolute; left: 50%; margin-left: -120px; bottom: 80px; z-index: 0; animation: svg-boil 0.3s infinite steps(1);">
<div style="width: 96px; height: 96px; background-color: var(--accent-color); -webkit-mask: url('/images/axie.svg') no-repeat center / contain; mask: url('/images/axie.svg') no-repeat center / contain;"></div>
</div>
<div style="position: absolute; left: 50%; margin-left: 100px; bottom: 140px; right: auto; pointer-events: auto;">
<div style="transform: rotate(5deg); display: inline-block; text-align: center;">
{{ arrow_note(text="Pssst...<br>There's more.", target="scroll-target", start_dir="left", end_dir="top", color="accent", font_size="1rem", amplitude="80", spacing="10", stroke_width="2") }}
</div>
</div>
</div>
</section>

<section class="snap-section content-wrapper" id="more">
<div style="width: 100%;">

## About

<ul class="masonry">
<!-- Card Start: Intro -->
<li>
<article>

**⚡ I am a [polymath](https://en.wikipedia.org/wiki/Polymath).**

I'm from Mendoza, Argentina. I’ve always been drawn to technology and science, and I love making things like code, music, animations, videos, and games. ᕙ(͡°‿ ͡°)ᕗ

**I’m {{ age() }} years old.**

2001, what a year. June 12th, it was a Tuesday. A really cold night in Mendoza...

I was extracted successfully, with my eyes wide open, and my first thought was "general relativity and quantum mechanics haven't been unified yet, what a shame". Then I cried a lot. Wouldn't you? u_u

</article>
</li>

<!-- Card Start: Interests -->
<li>
<article class="fancy-list">

**✨ Hyperfixations:**
- Red
- Open Source
- Retro tech
- Astronomy
- Physics
- Cartoons
- Frutiger Aero
- Pixel Art
- You
- Sans Undertale (literally me)

</article>
</li>

<li>
<article>

**🔧 I like tinkering and building custom tools.**

I’m obsessed with building my own tools and workflows. People say not to reinvent the wheel, but I think custom tools can unlock freedom and innovation. Just like every person is unique, the tools they use can be too. :D

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

**👾 I study computer science engineering.**

My curiosity about computers led me into this field, where I get to merge creativity with tech. I have a nostalgic side, and I often mix retro aesthetics like pixel art and chiptune with modern techniques to craft unique experiences.

I honestly enjoy coding and problem-solving. It’s like a puzzle that I get to solve every day, and I love the satisfaction of seeing my ideas come to life through code. :)

</article>
</li>

<!-- Card Start: Games -->
<li>
<article class="fancy-list games">

**🕹️ Procrastination Kit:**

{{ games() }}
</article>
</li>

</ul>

## IndieWeb

Simply put, IndieWeb is anything on the web that is hand-crafted, feels personal and gives a retro feel.

Cozy and nostalgic, like the early days of the internet. Since I became an adult, I felt this strong urge to recreate that feeling of wonder and excitement I had when I first explored the web as a kid.

Also, I had a lot of fun making my own 88x31 button, and you should make one too! :)

{{ badges() }}

</div>
</section>

<script>
  document.addEventListener('DOMContentLoaded', () => {
    const indicator = document.querySelector('.scroll-indicator');
    const heroSection = document.querySelector('.hero-wrapper');
    
    // Move indicator to body to avoid stacking context issues
    // if (indicator) {
    //   document.body.appendChild(indicator);
    // }

    function updateIndicator() {
      if (!indicator || !heroSection) return;

      // Use getBoundingClientRect to detect position regardless of what container is scrolling
      const rect = heroSection.getBoundingClientRect();
      
      // If the top of the hero section moves up (scrolled down), hide the indicator
      // We use -100 as a threshold (100px scrolled)
      if (rect.top < -100) {
        indicator.classList.add('hidden');
      } else {
        indicator.classList.remove('hidden');
      }

      // Logic to manage scroll snapping
      // We want strong snapping (mandatory) for the first section transition.
      // But we need to disable it (none) once we are in the content to allow scrolling to the footer.
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      const viewportHeight = window.innerHeight;
      
      // If we have scrolled past the hero section (with a small buffer), disable snapping
      if (scrollY > viewportHeight * 0.9) {
        document.documentElement.style.scrollSnapType = 'none';
      } else {
        document.documentElement.style.scrollSnapType = 'y mandatory';
      }
    }

    // Check on load
    setTimeout(updateIndicator, 100); 
    
    // Use capture: true to catch scroll events from any element (in case body or a div is scrolling)
    document.addEventListener('scroll', updateIndicator, { passive: true, capture: true });
  });
</script>
