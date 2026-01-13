+++
title = "Axenide"
insert_anchor_links = "left"
[extra]
no_header = true
badges = [
{ name = "axenide.gif", url = "https://axeni.de" },
{ name = "linux.gif", url = "https://kernel.org" },
{ name = "archlinux.gif", url = "https://archlinux.org" },
{ name = "godot.png", url = "https://godotengine.org" },
{ name = "neovim.png", url = "https://neovim.io" },
{ name = "python.png", url = "https://python.org" },
{ name = "ddg.gif", url = "https://duckduckgo.com" },
{ name = "ffmpeg.png", url = "https://ffmpeg.org" },
{ name = "firefox.gif", url = "https://getfirefox.com" },
{ name = "ublock-origin.webp", url = "https://github.com/gorhill/uBlock" },
{ name = "frutiger_aero_community.png", url = "https://frutigeraero.org" },
{ name = "dark-mode.gif", url = "https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme" },
{ name = "mobilefriendly.gif", url = "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Responsive_Design" },
{ name = "tr1xem.gif", url = "https://trix.is-a.dev" },
{ name = "sankalp.png", url = "https://sankalptharu.com.np" },
{ name = "daudix.gif", url = "https://daudix.one" },
{ name = "righttorepair.gif", url = "https://www.ifixit.com/Right-to-Repair" },
{ name = "bestviewed16bit.gif" },
{ name = "savewalterwhite.gif", url = "http://www.savewalterwhite.com" },
{ name = "portal.gif", url = "https://www.thinkwithportals.com" },
{ name = "aperturelabs.gif", url = "https://www.aperturescience.com" },
{ name = "neo-fedi.gif", url = "https://jointhefediverse.net" },
{ name = "smoke.gif" },
{ name = "yarrr.gif" },
{ name = "stardew-valley.gif", url = "https://www.stardewvalley.net" },
{ name = "88x31.gif", url = "https://88x31.nl" },
{ name = "98.gif" },
{ name = "000010.gif" },
{ name = "sourcemissing.gif" },
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
<div id="scroll-target" style="position: absolute; bottom: 58px; left: 50%; width: 1px; height: 1px; animation: bounce-vertical 3s infinite ease-in-out; z-index: -1;"></div>
<style>
  @keyframes bounce-vertical {
    0%, 20%, 40%, 100% { transform: translate(-50%, 0); }
    10% { transform: translate(-50%, 15px); }
    30% { transform: translate(-50%, 15px); }
  }
</style>

<div class="scroll-indicator" onclick="document.querySelector('#more').scrollIntoView({behavior: 'smooth'})" style="position: absolute; bottom: 72px; left: 50%; margin-left: -120px; display: flex; align-items: flex-end; gap: 76px; pointer-events: auto; cursor: pointer; z-index: 10;">
<div style="width: 96px; height: 96px; z-index: 0; animation: svg-boil 0.3s infinite steps(1); flex-shrink: 0;">
<div class="axie-icon" style="width: 96px; height: 96px; background-color: var(--accent-color); -webkit-mask: url('/images/axie.svg') no-repeat center / contain; mask: url('/images/axie.svg') no-repeat center / contain; transition: background-color 0.3s ease;"></div>
</div>
<div style="margin-bottom: 28px; min-width: max-content;">
<div style="transform: rotate(5deg); display: inline-block; text-align: center;">
{{ arrow_note(text="Pssst...<br>There's more.", target="scroll-target", start_dir="left", end_dir="top", color="accent", font_size="1rem", amplitude="30", spacing="10", stroke_width="2") }}
</div>
</div>
</div>
</section>

<script>
  // Handle Hover Effects via JS for robustness
  const scrollIndicator = document.querySelector('.scroll-indicator');
  
  if (scrollIndicator) {
    const axie = scrollIndicator.querySelector('.axie-icon');
    // Note: arrow-note is created by shortcode, might need dynamic selection or it's available
    
    scrollIndicator.addEventListener('mouseenter', () => {
      // 1. Arrow (SVG)
      const paths = document.querySelectorAll('.arrow-path-boil');
      paths.forEach(p => {
          p.style.transition = 'stroke 0.3s ease';
          p.style.stroke = 'var(--fg-color)';
      });

      // 2. Axie Icon
      if (axie) axie.style.backgroundColor = 'var(--fg-color)';

      // 3. Text
      const note = scrollIndicator.querySelector('.arrow-note');
      if (note) {
        note.style.transition = 'color 0.3s ease';
        note.style.color = 'var(--fg-color)';
      }
    });
    
    scrollIndicator.addEventListener('mouseleave', () => {
      // 1. Arrow (SVG)
      const paths = document.querySelectorAll('.arrow-path-boil');
      paths.forEach(p => {
          p.style.stroke = 'var(--accent-color)';
      });

      // 2. Axie Icon
      if (axie) axie.style.backgroundColor = 'var(--accent-color)';

      // 3. Text
      const note = scrollIndicator.querySelector('.arrow-note');
      if (note) {
        note.style.color = 'var(--accent-color)';
      }
    });
  }
</script>

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
- Piano
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

