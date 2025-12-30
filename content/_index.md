+++
title = "Axenide"
insert_anchor_links = "left"
[extra]
no_header = true
+++

<style>
  .retro-title {
    font-family: 'Bytesized', monospace;
    font-size: 5rem;
    margin-bottom: 0;
    line-height: 1;
    position: relative;
    color: transparent;
    z-index: 1;
    /* Borde blanco exterior NÍTIDO alrededor de todo el conjunto */
    /* Usamos desplazamientos en 4 direcciones con 0 blur para simular 'stroke' externo */
    filter: 
      drop-shadow(2px 0 0 white)
      drop-shadow(-2px 0 0 white)
      drop-shadow(0 2px 0 white)
      drop-shadow(0 -2px 0 white);
  }

  /* Capa Superior: Texto con Gradiente */
  .retro-title::after {
    content: attr(data-text);
    position: absolute;
    left: 0;
    top: 0;
    z-index: 10;
    background: linear-gradient(180deg, #ff4d4d 0%, #f9cb28 100%);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }

  /* Capa Inferior: Borde Negro + Block Shadow Real (desde el borde) */
  .retro-title::before {
    content: attr(data-text);
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
    color: black;
    /* 1. BORDE: Usamos text-stroke grueso para ampliar la silueta del texto */
    -webkit-text-stroke: 8px black;
    
    /* 2. EXTRUSIÓN: Usamos drop-shadow encadenados.
       A diferencia de text-shadow, drop-shadow respeta la silueta del text-stroke.
       Al aplicar varios seguidos (1px cada vez), creamos un bloque sólido desde el borde exterior. */
    filter: 
      drop-shadow(1px 1px 0 #000)
      drop-shadow(1px 1px 0 #000)
      drop-shadow(1px 1px 0 #000)
      drop-shadow(1px 1px 0 #000)
      drop-shadow(1px 1px 0 #000)
      drop-shadow(1px 1px 0 #000);
  }
</style>

<div style="display: flex; align-items: center; justify-content: center; min-height: 80vh; gap: 2rem; flex-wrap: wrap; padding: 2rem;">
  <div style="flex: 1; max-width: 500px; text-align: left;">
    <h1 class="retro-title" data-text="Axenide">Axenide</h1>
    <p style="font-size: 1rem; margin-bottom: 2rem; line-height: 1.6;">
      Soy Adriano Tisera, conocido en Internet como Axenide. Futuro ingeniero informático, tecnólogo y científico. Hago videos, música, animación y videojuegos... Entre otras cosas.
    </p>
    <div class="buttons">
      <a class="button suggested" href="@/blog/_index.md" style="border-radius: 2rem; padding: 0.5rem 1.5rem;">Sobre mí ↓</a>
    </div>
  </div>
  
  <div style="flex-shrink: 0;">
    <img src="/images/avatar.png" alt="Axenide" style="
      width: 200px;
      height: 200px;
      object-fit: cover;
      border-radius: 45px;
      border: 6px solid var(--accent-color, #b57edc);
      transform: rotate(6deg);
      box-shadow: 0 10px 25px rgba(0,0,0,0.2);
      display: block;
    ">
  </div>
</div>
