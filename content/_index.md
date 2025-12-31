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
    scale: 1.2;
  }

  .retro-avatar {
    width: 180px;
    height: 180px;
    object-fit: cover;
    display: block;
    border-radius: 45px;
    border: 6px solid #db4740;
    box-shadow: 0 0 0 8px #000;
    transition: transform 0.75s ease-in-out, scale 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  .hero-container {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 80vh;
    gap: 2rem;
    flex-wrap: wrap;
    padding: 2rem;
  }

  .hero-content {
    flex: 1;
    max-width: 500px;
    text-align: left;
  }

  @media (max-width: 768px) {
    .hero-container {
      flex-direction: column-reverse;
      padding-top: 4rem;
      gap: 0;
    }
    
    .hero-content {
      text-align: center;
    }
    
    .hero-content .buttons {
      justify-content: center;
    }
  }
</style>

<div class="hero-container">
  <div class="hero-content">
    {{ retro_text(text="Axenide", tag="h1") }}
    <p style="font-size: 1rem; margin-bottom: 2rem; line-height: 1.6;">
        I'm <mark>Adriano Tisera</mark>, known on the Internet as <mark>Axenide</mark>. Future computer engineer, technologist, and scientist. I'm a programmer, I make videos, music, animation, and video games... Among other things.
    </p>
    <div class="buttons">
      <a class="button suggested" href="@/blog/_index.md" style="border-radius: 2rem; padding: 0.5rem 1.5rem;">About me</a>
    </div>
  </div>
  
  <div class="retro-avatar-container">
    <img src="/images/avatar.png" alt="Axenide" class="retro-avatar no-hover">
  </div>
</div>
