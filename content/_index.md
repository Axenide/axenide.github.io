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
<!-- Card Start -->
<li>
<article>

**I'm Adriano Tisera,** a future Computer Engineer. I love building things and exploring new technologies.
</article>
</li>
<!-- Card End -->

<!-- Card Start -->
<li>
<article class="window">
{{ window() }}
</article>
</li>
<!-- Card End -->

<!-- Card Start -->
<li>
<article class="fancy-list">

**Interests:**
- Programming
- Game Development
- Music Production
- Content Creation
</article>
</li>
<!-- Card End -->
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
      // Increased threshold to 150px to prevent accidental hiding
      // and ensure it stays visible longer at the top
      if (window.scrollY > 150) {
        indicator.classList.add('hidden');
      } else {
        indicator.classList.remove('hidden');
      }
    }

    // Check on load, but also allow a small delay to ensure layout is settled
    setTimeout(updateIndicator, 100); 
    
    window.addEventListener('scroll', updateIndicator, { passive: true });
  });
</script>
