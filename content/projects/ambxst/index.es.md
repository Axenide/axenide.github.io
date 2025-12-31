+++
title = "Ambxst"
date = 2025-12-31
weight = 1
description = "Una shell ***Ax**tremadamente* personalizable."
path = "/es/ambxst"

[taxonomies]
tags = ["dev", "wip"]
[extra]
no_header = true
[extra.meta]
favicon = "favicon.png"
+++

<img src="./ambxst-banner.png" alt="Ambxst Logo" class="transparent drop-shadow no-hover" style="max-width: 500px; width: 100%;" />

<div align="center">

Una shell ***Ax**tremadamente* personalizable.

</div>

{{ carousel(images=["1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png"], interval=3000, style="margin: -2rem 0 -2rem 0") }}

## Instalación

{% crt() %}
```bash
curl -L get.axeni.de/ambxst | sh
```
{% end %}

> [!WARNING]
> Ambxst está actualmente en desarrollo temprano.

<div class="buttons">
  <a class="button suggested" href="https://github.com/Axenide/Ambxst" style="border-radius: 2rem; padding: 0.5rem 1.5rem;">¡Mira el código! (Mmm... Spaghetti. 🍝)</a>
</div>

### ¿Qué hace la instalación?

> [!IMPORTANT]
> Por ahora Ambxst se instala vía Nix flakes, por lo que **Nix es requerido** para soportarlo en la mayor cantidad de distros posible. Pero estamos buscando contribuciones para soportar otros gestores de paquetes (y hacer esto más fácil para todos).

En distros non-NixOS, el script de instalación hace lo siguiente:
- Instala [Nix](https://en.wikipedia.org/wiki/Nix_(package_manager)) si no está ya instalado.
- Instala algunas dependencias del sistema necesarias. (Solo unas pocas que Nix no puede manejar por sí mismo).
- Instala Ambxst como flake de Nix. (¿*Dependency hell*? No, gracias. 😎)
- Crea un alias para iniciar `ambxst` desde cualquier lugar. (`exec-once = ambxst` en tu `hyprland.conf`, por ejemplo.)
- Te da un beso en la mejilla. 😘 (Opcional, claro.)

En NixOS:
- Instala Ambxst con `nix profile add github:Axenide/Ambxst`.
> [!NOTE]
> El script de instalación no hace nada más en NixOS, por lo que puedes declararlo como gustes en tu sistema.

## Características
- [x] Componentes personalizables
- [x] Temas
- [x] Integración con el sistema
- [x] Lanzador de aplicaciones
- [x] Gestor de portapapeles
- [x] Notas rápidas (y no tan rápidas)
- [x] Gestor de wallpapers
- [x] Selector de emojis
- [x] Gestor de sesiones de [tmux](https://github.com/tmux/tmux)
- [x] Monitor del sistema
- [x] Control multimedia
- [x] Sistema de notificaciones
- [x] Gestor de Wi-Fi
- [x] Gestor de Bluetooth
- [x] Mezclador de audio
- [x] Integración con [EasyEffects](https://github.com/wwmm/easyeffects)
- [x] Captura de pantalla
- [x] Grabación de pantalla
- [x] Selector de color
- [x] OCR
- [x] Escáner de códigos QR y códigos de barras
- [x] "Espejo" (webcam)
- [x] Modo juego
- [x] Modo noche
- [x] Gestor de perfiles de energía
- [x] Asistente de IA
- [x] Clima
- [x] Calendario
- [x] Menú de apagado
- [x] Gestión de espacios de trabajo
- [x] Soporte para diferentes layouts (dwindle, master, scrolling, etc.)
- [x] Soporte para múltiples monitores
- [x] Atajos de teclado personalizables
- [ ] Sistema de plugins y extensiones
- [ ] Compatibilidad con otros compositores Wayland

## ¿Y los *docs*?

Quiero liberar esto antes de fin de año, así que tendrás que esperar un poco para la documentación completa. u_u
Sin embargo, lo más importante que debes saber es lo siguiente:
- La configuración principal se encuentra en `~/.config/Ambxst`.
- Remover Ambxst es tan simple como `nix profile remove Ambxst`.
- Puedes preguntar lo que sea en el [servidor de Discord de Axenide](https://discord.com/invite/gHG9WHyNvH) o en las [discusiones de GitHub](https://github.com/Axenide/Ambxst/discussions).

> [!CAUTION]
> Los paquetes instalados via Nix tomarán prioridad sobre los del sistema. Tenlo en cuenta si tienes conflictos de versiones.
