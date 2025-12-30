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
  /* Definimos la propiedad para que el navegador sepa interpolarla suavemente */
  @property --wave-amplitude {
    syntax: '<length>';
    initial-value: -3px;
    inherits: true;
  }

  .retro-word {
    display: inline-flex; /* Alinea las letras en fila */
    font-family: 'Bytesized', monospace;
    font-size: 5rem;
    margin-bottom: 0;
    line-height: 1;
    cursor: default;
    
    /* MOVIDO AQUÍ: Borde blanco exterior NÍTIDO aplicado al CONJUNTO completo */
    /* Al estar en el contenedor, rodea la silueta total y no cada letra individualmente */
    filter: 
      drop-shadow(2px 0 0 white)
      drop-shadow(-2px 0 0 white)
      drop-shadow(0 2px 0 white)
      drop-shadow(0 -2px 0 white);
  }

  /* Estilos para cada letra individual */
  .retro-letter {
    position: relative;
    color: transparent;
    z-index: 1;
    display: inline-block;
    
    /* Animación constante: 1s */
    /* Usamos una variable CSS para controlar la amplitud */
    --wave-amplitude: -3px;
    
    /* Añadimos transición para la variable (requiere soporte @property) */
    transition: --wave-amplitude 0.5s ease;
    
    animation: wave 1s ease-in-out infinite running;
    animation-delay: calc(0.1s * var(--i));
  }

  /* Estado HOVER: Solo cambia la amplitud */
  .retro-word:hover .retro-letter {
    /* Mantenemos la velocidad igual (1s) */
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

  /* Capa Superior: Texto con Gradiente */
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

  /* Capa Inferior: Borde Negro + Block Shadow Real */
  .retro-letter::before {
    content: attr(data-text);
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
    color: black;
    -webkit-text-stroke: 8px black; /* Borde grueso */
    
    /* Extrusión sólida */
    filter: 
      drop-shadow(1px 1px 0 #000)
      drop-shadow(1px 1px 0 #000)
      drop-shadow(1px 1px 0 #000)
      drop-shadow(1px 1px 0 #000)
      drop-shadow(1px 1px 0 #000)
      drop-shadow(1px 1px 0 #000);
  }

  /* --- ESTILOS PARA LA FOTO DE AVATAR (RETRO) --- */
  .retro-avatar-container {
    flex-shrink: 0;
    transform: rotate(6deg); /* Inclinación fija inicial del marco */
    
    /* APLICAMOS LOS EFECTOS DE SOMBRA AQUÍ (EN EL PADRE ESTÁTICO) */
    /* De esta forma, la sombra siempre se proyecta en la misma dirección 
       independientemente de cómo gire la imagen interior */
    filter: 
      /* 1. BLOCK SHADOW NEGRA (Proyección sólida) */
      /* Encadenamos drop-shadows para crear la extrusión */
      drop-shadow(1px 1px 0 #000)
      drop-shadow(1px 1px 0 #000)
      drop-shadow(1px 1px 0 #000)
      drop-shadow(1px 1px 0 #000)
      drop-shadow(1px 1px 0 #000)
      drop-shadow(1px 1px 0 #000)
      
      /* 2. BORDE BLANCO EXTERIOR (Rodea todo el conjunto) */
      drop-shadow(2px 0 0 white)
      drop-shadow(-2px 0 0 white)
      drop-shadow(0 2px 0 white)
      drop-shadow(0 -2px 0 white);
  }
  
  /* El contenedor activa la rotación de la imagen al hacer hover */
  .retro-avatar-container:hover .retro-avatar {
    transform: rotate(-360deg); 
  }

  .retro-avatar {
    width: 200px;
    height: 200px;
    object-fit: cover;
    display: block;
    border-radius: 45px;
    
    /* Borde Rojo Real */
    border: 6px solid #db4740;
    
    /* Borde Negro (Simulado con box-shadow para que sea exterior al borde rojo) */
    box-shadow: 0 0 0 8px #000;
    
    /* Margen para que el box-shadow negro no se corte y para espacio de la sombra */
    margin: 20px; 
    
    /* Transición suave de la rotación */
    transition: transform 0.75s ease-in-out;
  }
  
  /* Eliminados keyframes y estilos antiguos */
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
      Soy <mark>Adriano Tisera</mark>, conocido en Internet como <mark>Axenide</mark>. Futuro ingeniero informático, tecnólogo y científico. Soy programador, hago videos, música, animación y videojuegos... Entre otras cosas.
    </p>
    <div class="buttons">
      <a class="button suggested" href="@/blog/_index.md" style="border-radius: 2rem; padding: 0.5rem 1.5rem;">Sobre mí ↓</a>
    </div>
  </div>
  
  <div class="retro-avatar-container">
    <img src="/images/avatar.png" alt="Axenide" class="retro-avatar no-hover">
  </div>
</div>
