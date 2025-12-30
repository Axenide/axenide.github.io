+++
title = "Axenide"
insert_anchor_links = "left"
[extra]
no_header = true
+++

<style>
  .retro-avatar-container {
    flex-shrink: 0;
    transform: rotate(6deg);
    
    filter: 
      drop-shadow(1px 1px 0 #000)
      drop-shadow(1px 1px 0 #000)
      drop-shadow(1px 1px 0 #000)
      drop-shadow(1px 1px 0 #000)
      drop-shadow(1px 1px 0 #000)
      drop-shadow(1px 1px 0 #000)
      
      drop-shadow(2px 0 0 white)
      drop-shadow(-2px 0 0 white)
      drop-shadow(0 2px 0 white)
      drop-shadow(0 -2px 0 white);
  }
  
  .retro-avatar-container:hover .retro-avatar {
    transform: rotate(-360deg); 
  }

  .retro-avatar {
    width: 200px;
    height: 200px;
    object-fit: cover;
    display: block;
    border-radius: 45px;
    border: 6px solid #db4740;
    box-shadow: 0 0 0 8px #000;
    margin: 20px; 
    transition: transform 0.75s ease-in-out;
  }
  
</style>

<div style="display: flex; align-items: center; justify-content: center; min-height: 80vh; gap: 2rem; flex-wrap: wrap; padding: 2rem;">
  <div style="flex: 1; max-width: 500px; text-align: left;">
    {{ retro_text(text="Axenide", tag="h1") }}
    <p style="font-size: 1rem; margin-bottom: 2rem; line-height: 1.6;">
        I'm <mark>Adriano Tisera</mark>, known on the Internet as <mark>Axenide</mark>. Future computer engineer, technologist, and scientist. I'm a programmer, I make videos, music, animation, and video games... Among other things.
    </p>
    <div class="buttons">
      <a class="button suggested" href="@/blog/_index.md" style="border-radius: 2rem; padding: 0.5rem 1.5rem;">Sobre mí ↓</a>
    </div>
  </div>
  
  <div class="retro-avatar-container">
    <img src="/images/avatar.png" alt="Axenide" class="retro-avatar no-hover">
  </div>
</div>
