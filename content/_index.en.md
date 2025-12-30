+++
title = "Axenide"
insert_anchor_links = "left"
[extra]
no_header = true
+++

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bytesized&display=swap" rel="stylesheet">

<style>
  @property --wave-amplitude {
    syntax: '<length>';
    initial-value: -3px;
    inherits: true;
  }

  .retro-word {
    display: inline-flex;
    font-family: 'Bytesized', monospace;
    font-size: 5rem;
    margin-bottom: 0;
    line-height: 1;
    cursor: default;
    
    filter: 
      drop-shadow(2px 0 0 white)
      drop-shadow(-2px 0 0 white)
      drop-shadow(0 2px 0 white)
      drop-shadow(0 -2px 0 white);
  }

  .retro-letter {
    position: relative;
    color: transparent;
    z-index: 1;
    display: inline-block;
    
    --wave-amplitude: -3px;
    
    transition: --wave-amplitude 0.5s ease;
    
    animation: wave 1s ease-in-out infinite running;
    animation-delay: calc(0.1s * var(--i));
  }

  .retro-word:hover .retro-letter {
    --wave-amplitude: -6px; 
  }

  @keyframes wave {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(var(--wave-amplitude));
    }
  }

  .retro-letter::after {
    content: attr(data-text);
    position: absolute;
    left: 0;
    top: 0;
    z-index: 10;
    background: linear-gradient(180deg, #ff6b4d 0%, #db4740 100%);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }

  .retro-letter::before {
    content: attr(data-text);
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
    color: black;
    -webkit-text-stroke: 8px black;
    
    filter: 
      drop-shadow(1px 1px 0 #000)
      drop-shadow(1px 1px 0 #000)
      drop-shadow(1px 1px 0 #000)
      drop-shadow(1px 1px 0 #000)
      drop-shadow(1px 1px 0 #000)
      drop-shadow(1px 1px 0 #000);
  }

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
    <h1 class="retro-word">
        <span class="retro-letter" style="--i:1" data-text="A">A</span>
        <span class="retro-letter" style="--i:2" data-text="x">x</span>
        <span class="retro-letter" style="--i:3" data-text="e">e</span>
        <span class="retro-letter" style="--i:4" data-text="n">n</span>
        <span class="retro-letter" style="--i:5" data-text="i">i</span>
        <span class="retro-letter" style="--i:6" data-text="d">d</span>
        <span class="retro-letter" style="--i:7" data-text="e">e</span>
    </h1>
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
